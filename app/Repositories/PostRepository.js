'use strict';

const Post = use('App/Models/Post');
const PostLike = use('App/Models/PostLike');
const Comment = use('App/Models/Comment');
const Database = use('Database');
const Config = use('Config');
const { pagination } = Config.get('global');
const postSearch = [
  'id',
  'cover',
  'title',
  'sale_percent',
  'start_date',
  'end_date',
  'like',
  'comment',
  'shop_id',
  'user_id',
];
const selectShop = [
  'shops.id',
  'shops.avatar',
  'shops.name',
];
const selectUser = [
  'id',
  'avatar',
  'username',
];
class PostRepository {
  constructor() {
    this.post = Post;
    this.postLike = PostLike;
    this.comment = Comment;
  }


  /**
   * getPostById
   * @param id
   * @return {Promise.<null>}
   */
  async getPostById(id) {
    const post = await this.post.find(id);
    return post ? post.toJSON() : null;
  }
  /**
   * getPostByIdAndShopId
   * @param id
   * @return {Promise.<null>}
   */
  async getPostByIdAndShopId(id, shopId) {
    const post = await this.post
      .query()
      .where('id', id)
      .where('shop_id', shopId)
      .first();
    return post ? post.toJSON() : null;
  }

  /**
   * create
   * @param userId
   * @param data
   * @return {Promise.<boolean>}
   */
  async create(userId, data) {
    const db = await Database.beginTransaction();
    try {
      const post = new Post();
      post.title = data.title;
      post.description = data.description;
      post.sale_percent = data.sale_percent;
      post.cover = data.cover;
      post.images = JSON.stringify(data.images);
      post.start_date = data.start_date;
      post.end_date = data.end_date;
      post.address = data.address;
      post.product_id = data.product_id || null;
      post.shop_id = data.shop_id || null;
      post.is_trust = !!post.shop_id;
      post.user_id = userId;
      await post.save();
      db.commit();
      return post;
    } catch (err) {
      db.rollback();
      return null;
    }
  }

  /**
   * getPost
   * @param id
   * @return {Promise.<null>}
   */
  async getPost(id) {
    const db = await Database.beginTransaction();
    try {
      const post = await this.post
        .query()
        .where('id', id)
        .with('user', (builder) => {
          builder.select(['id', 'username', 'avatar', 'follows']);
        })
        .first();
      post.view += 1;
      await post.save();
      db.commit();
      return post.toJSON();
    } catch (err) {
      console.log(err);
      db.rollback();
      return null;
    }
  }

  /**
   * getPostSmall
   * @param postId
   * @return {Promise.<null>}
   */
  async getPostSmall(postId) {
    const post = await this.post
      .query()
      .where('id', postId)
      .select(['id', 'product_id', 'shop_id', 'user_id', 'title', 'description'])
      .first();
    return post ? post.toJSON() : null;
  }

  async getRelativePost(post) {
    let posts = [];
    if (post.product_id) {
      posts = await this.post
        .query()
        .where('product_id', post.product_id)
        .orderBy('created_at', 'desc')
        .select(['id', 'cover', 'title'])
        .limit(10)
        .fetch();
    } else if (!post.product_id && post.shop_id) {
      posts = await this.post
        .query()
        .where('shop_id', post.shop_id)
        .orderBy('created_at', 'desc')
        .select(['id', 'cover', 'title'])
        .limit(10)
        .fetch();
    } else if (!post.product_id && !post.shop_id) {
      posts = await this.post
        .query()
        .where('user_id', post.user_id)
        .orderBy('created_at', 'desc')
        .select(['id', 'cover', 'title'])
        .limit(10)
        .fetch();
    }
    return posts;
  }

  /**
   * getYourPosts
   * @param userId
   * @param page
   * @return {Promise.<Array>}
   */
  async getYourPosts(userId, page) {
    const posts = await this.post
      .query()
      .with('product', (builder) => {
        builder.select(['id', 'name']);
      })
      .where('user_id', userId)
      .where('is_trust', true)
      .where('shop_id', null)
      .orderBy('created_at', 'desc')
      .paginate(page, pagination);
    return posts ? posts.toJSON().data : [];
  }

  /**
   * getShopPosts
   * @param page
   * @param shopId
   * @return {Promise.<Array>}
   */
  async getShopPosts(page, shopId) {
    const posts = await this.post
      .query()
      .where('shop_id', shopId)
      .where('is_trust', true)
      .orderBy('created_at', 'desc')
      .with('user')
      .paginate(page, pagination);
    return posts ? posts.toJSON().data : [];
  }

  /**
   * edit post
   * @param postId
   * @param data
   * @return {Promise.<boolean>}
   */
  async editPost(postId, data) {
    const db = await Database.beginTransaction();
    try {
      const post = await this.post.find(postId);
      post.title = data.title || post.title;
      post.description = data.description || post.description;
      post.sale_percent = data.sale_percent || post.sale_percent;
      post.cover = data.cover || post.cover;
      post.images = JSON.stringify(data.images) || post.images;
      post.start_date = data.start_date || post.start_date;
      post.end_date = data.end_date || post.end_date;
      post.address = data.address || post.address;
      post.product_id = data.product_id || post.product_id;
      await post.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * deletePost
   * @param id
   * @return {Promise.<boolean>}
   */
  async deletePost(id) {
    const db = await Database.beginTransaction();
    try {
      await this.comment
        .query()
        .where('post_id', id)
        .delete();
      await this.postLike
        .query()
        .where('post_id', id)
        .delete();
      const post = await this.post.find(id);
      await post.delete();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * getShopTotalPost
   * @param shopId
   * @return {Promise.<*>}
   */
  async getShopTotalPost(shopId) {
    const total = await this.post.query().where('shop_id', shopId).getCount();
    return total;
  }

  /**
   * getUserTotalPost
   * @param userId
   * @return {Promise.<*>}
   */
  async getUserTotalPost(userId) {
    const total = await this.post
      .query()
      .where('user_id', userId)
      .where('shop_id', null)
      .getCount();
    return total;
  }

  /**
   * getPostShopFollowing
   * @param userId
   * @param params
   * @param ids
   * @param page
   * @return {Promise.<Array>}
   */
  async getPostShopFollowing(userId, params, ids, page) {
    let posts;
    if (params.category_id === 1) {
      posts = await this.post
        .query()
        .whereIn('shop_id', ids)
        .whereNot('user_id', userId)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('shop', (builder) => {
          builder.select(selectShop);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    } else {
      posts = await this.post
        .query()
        .whereIn('shop_id', ids)
        .whereNot('user_id', userId)
        .where('product_id', params.sub_category_id)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('shop', (builder) => {
          builder.select(selectShop);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    }
    return posts ? posts.toJSON().data : [];
  }

  /**
   * getPostShopNotFollowing
   * @param userId
   * @param params
   * @param ids
   * @param page
   * @return {Promise.<Array>}
   */
  async getPostShopNotFollowing(userId, params, ids, page) {
    let posts;
    if (params.category_id === 1) {
      posts = await this.post
        .query()
        .whereNotIn('shop_id', ids)
        .whereNot('user_id', userId)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('shop', (builder) => {
          builder.select(selectShop);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    } else {
      posts = await this.post
        .query()
        .whereNotIn('shop_id', ids)
        .whereNotIn('user_id', userId)
        .where('product_id', params.sub_category_id)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('shop', (builder) => {
          builder.select(selectShop);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    }
    return posts ? posts.toJSON().data : [];
  }

  /**
   * getPostUserFollowing
   * @param userId
   * @param params
   * @param ids
   * @param page
   * @return {Promise.<Array>}
   */
  async getPostUserFollowing(userId, params, ids, page) {
    let posts;
    if (params.category_id === 1) {
      posts = await this.post
        .query()
        .whereIn('user_id', ids)
        .where('shop_id', null)
        .whereNot('user_id', userId)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('user', (builder) => {
          builder.select(selectUser);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    } else {
      posts = await this.post
        .query()
        .whereIn('user_id', ids)
        .where('shop_id', null)
        .whereNot('user_id', userId)
        .where('product_id', params.sub_category_id)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('user', (builder) => {
          builder.select(selectUser);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    }
    return posts ? posts.toJSON().data : [];
  }

  /**
   * getPostUserNotFollowing
   * @param userId
   * @param params
   * @param ids
   * @param page
   * @return {Promise.<Array>}
   */
  async getPostUserNotFollowing(userId, params, ids, page) {
    let posts;
    if (params.category_id === 1) {
      posts = await this.post
        .query()
        .whereNotIn('user_id', ids)
        .where('shop_id', null)
        .whereNot('user_id', userId)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('user', (builder) => {
          builder.select(selectUser);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    } else {
      posts = await this.post
        .query()
        .whereNotIn('user_id', ids)
        .where('shop_id', null)
        .whereNot('user_id', userId)
        .where('product_id', params.sub_category_id)
        .where((query) => {
          query.where('title', 'like', `%${params.text}%`)
            .orWhere('description', 'like', `%${params.text}%`);
        })
        .with('user', (builder) => {
          builder.select(selectUser);
        })
        .select(postSearch)
        .orderBy('created_at', 'desc')
        .paginate(page, pagination);
    }
    return posts ? posts.toJSON().data : [];
  }

  /**
   * accept
   * @param id
   * @return {Promise.<void>}
   */
  async accept(id) {
    const shop = await this.post.findOrFail(id);
    shop.is_trust = true;
    await shop.save();
  }

  /**
   * reject
   * @param id
   * @returns {Promise.<void>}
   */
  async reject(id) {
    const shop = await this.post.findOrFail(id);
    shop.is_trust = false;
    await shop.save();
  }
}

module.exports = PostRepository;
