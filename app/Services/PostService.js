'use strict';

const PostRepository = use('App/Repositories/PostRepository');
const PostLikeRepository = use('App/Repositories/PostLikeRepository');
const ProductRepository = use('App/Repositories/ProductRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const ShopUserRepository = use('App/Repositories/ShopUserRepository');
const PostNotFoundException = use('App/Exceptions/PostNotFoundException');
const ShopNotFoundException = use('App/Exceptions/ShopNotFoundException');
const NotYourPostException = use('App/Exceptions/NotYourPostException');
const NotEmployeeException = use('App/Exceptions/NotEmployeeException');
const Event = use('Event');
class PostService {
  constructor() {
    this.postRepo = new PostRepository();
    this.postLikeRepo = new PostLikeRepository();
    this.productRepo = new ProductRepository();
    this.shopRepo = new ShopRepository();
    this.shopUserRepo = new ShopUserRepository();
  }

  /**
   * create
   * @param user
   * @param data
   * @returns {Promise.<boolean>}
   */
  async create(user, data) {
    const post = await this.postRepo.create(user.id, data);
    if (!post) {
      return false;
    }
    if (data.shop_id) {
      // push notification to shop followers
      Event.fire('notification:shop_follow_new_post', { post });
    } else {
      // push notification to user followers
      Event.fire('notification:user_follow_new_post', { user, post });
    }
    return true;
  }

  /**
   * getPost
   * @param id
   * @return {Promise.<*>}
   */
  async getPost(id) {
    const post = await this.postRepo.getPost(id);
    if (post) {
      post.images = JSON.parse(post.images);
      if (post.product_id) {
        post.product = await this.productRepo.getProductWithPost(post.product_id);
      }
      const userPosts = await this.postRepo.getUserTotalPost(post.user_id);
      post.user.posts = userPosts;
      if (post.shop_id) {
        const shop = await this.shopRepo.getShopWithPost(post.shop_id);
        shop.posts = await this.postRepo.getShopTotalPost(post.shop_id);
        post.shop = shop;
      }
    }
    return post;
  }

  /**
   * likePost
   * @param userId
   * @param postId
   * @return {Promise.<boolean>}
   */
  async likePost(userId, postId) {
    const isLike = await this.postLikeRepo.like(postId, userId);
    // send notification
    Event.fire('notification:user_like_your_post', { userId, postId });
    return isLike;
  }

  /**
   * unlikePost
   * @param userId
   * @param postId
   * @return {Promise.<boolean>}
   */
  async unlikePost(userId, postId) {
    return await this.postLikeRepo.unlike(postId, userId);
  }

  /**
   * getPostSmall
   * @param postId
   * @return {Promise.<null>}
   */
  async getPostSmall(postId) {
    const post = await this.postRepo.getPostSmall(postId);
    if (!post) {
      throw new PostNotFoundException();
    }
    const posts = await this.postRepo.getRelativePost(post);
    return posts;
  }

  /**
   * getYourPosts
   * @param userId
   * @param page
   * @return {Promise.<*>}
   */
  async getYourPosts(userId, page) {
    const posts = await this.postRepo.getYourPosts(userId, page);
    for (let i = 0; i < posts.length; i += 1) {
      posts[i].images = JSON.parse(posts[i].images);
    }
    return posts;
  }

  /**
   * getShopPosts
   * @param page
   * @param shopId
   * @return {Promise.<Array>}
   */
  async getShopPosts(page, shopId) {
    const shop = await this.shopRepo.getShopInfo(shopId);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const posts = await this.postRepo.getShopPosts(page, shopId);
    for (let i = 0; i < posts.length; i += 1) {
      posts[i].images = JSON.parse(posts[i].images);
    }
    return posts;
  }

  async editYourPost(userId, postId, data) {
    const post = await this.postRepo.getPostById(postId);
    if (!post) {
      throw new PostNotFoundException();
    }
    if (post.user_id !== userId) {
      throw new NotYourPostException();
    }
    const edit = await this.postRepo.editPost(postId, data);
    return edit;
  }

  /**
   * editShopPost
   * @param userId
   * @param postId
   * @param shopId
   * @param data
   * @return {Promise.<boolean>}
   */
  async editShopPost(userId, postId, shopId, data) {
    const shop = await this.shopRepo.getShopInfo(shopId);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const post = await this.postRepo.getPostByIdAndShopId(postId, shopId);
    if (!post) {
      throw new PostNotFoundException();
    }
    if (post.user_id !== userId && shop.owner_id !== userId) {
      throw new NotYourPostException();
    }
    const shopUser = await this.shopUserRepo.getShopUser(shopId, userId);
    if (!shopUser && shop.owner_id !== userId) {
      throw new NotEmployeeException();
    }
    const edit = await this.postRepo.editPost(postId, data);
    return edit;
  }

  /**
   * deletePost
   * @param id
   * @param userId
   * @return {Promise.<boolean>}
   */
  async deleteYourPost(id, userId) {
    const post = await this.postRepo.getPostById(id);
    if (!post) {
      throw new PostNotFoundException();
    }
    if (post.shop_id) {
      throw new NotYourPostException();
    }
    if (post.user_id !== userId) {
      throw new NotYourPostException();
    }
    const isDelete = await this.postRepo.deletePost(id);
    return isDelete;
  }

  /**
   * deleteShopPost
   * @param id
   * @param shopId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async deleteShopPost(id, shopId, userId) {
    const shop = this.shopRepo.getShopInfo(shopId);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const post = await this.postRepo.getPostByIdAndShopId(id, shopId);
    if (!post) {
      throw new PostNotFoundException();
    }
    if (shop.owner_id !== userId && post.user_id !== userId) {
      throw new NotYourPostException();
    }
    const isDelete = await this.postRepo.deletePost(id);
    return isDelete;
  }

  /**
   * accept
   * @param id
   * @return {Promise.<void>}
   */
  async accept(id) {
    const post = await this.postRepo.getPostById(id);
    if (!post.is_trust) {
      Event.fire('notification:accept_your_post', { postId: id });
      await this.postRepo.accept(id);
    }
  }

  /**
   * reject
   * @param id
   * @returns {Promise.<void>}
   */
  async reject(id) {
    const post = await this.postRepo.getPostById(id);
    if (post.is_trust) {
      Event.fire('notification:reject_your_post', { postId: id });
      await this.postRepo.reject(id);
    }
  }
}

module.exports = PostService;
