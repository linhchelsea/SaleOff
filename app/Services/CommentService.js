'use strict';

const CommentRepository = use('App/Repositories/CommentRepository');
const PostRepository = use('App/Repositories/PostRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const ShopUserRepository = use('App/Repositories/ShopUserRepository');
const PostNotFoundException = use('App/Exceptions/PostNotFoundException');
const Event = use('Event');
const Config = use('Config');
const { typeAuthor } = Config.get('global');
class CommentService {
  constructor () {
    this.commentRepo = new CommentRepository();
    this.postRepo = new PostRepository();
    this.shopRepo = new ShopRepository();
    this.shopUserRepo = new ShopUserRepository();
  }

  /**
   * addComment
   * @param user
   * @param postId
   * @param comment
   * @return {Promise.<*>}
   */
  async addComment(user, postId, comment) {
    let type = typeAuthor.user;
    let author = {
      id: user.id,
      name: user.username,
      avatar: user.avatar,
      type,
    };
    const post = await this.postRepo.getPost(postId);
    if (post.shop_id) {
      const shop = await this.shopRepo.getShopInfo(post.shop_id);
      if (shop.owner_id === user.id) {
        type = typeAuthor.shop;
        author = {
          id: shop.id,
          name: shop.name,
          avatar: shop.avatar,
          type,
        };
      } else {
        const shopUser = await this.shopUserRepo.getShopUser(post.shop_id, user.id);
        if (shopUser) {
          type = typeAuthor.shop;
          author = {
            id: shop.id,
            name: shop.name,
            avatar: shop.avatar,
            type,
          };
        }
      }
    }
    const commentObj = await this.commentRepo.addComment(user.id, postId, type, comment);
    commentObj.author = author;
    // Push notification
    Event.fire('notification:user_comment_your_post', { userId: user.id, postId, comment });
    return commentObj;
  }

  /**
   * editComment
   * @param id
   * @param comment
   * @return {Promise.<void>}
   */
  async editComment(id, comment) {
    await this.commentRepo.editComment(id, comment);
  }

  /**
   * getComments
   * @param postId
   * @param lastId
   * @returns {Promise.<*>}
   */
  async getComments(postId, lastId) {
    const post = await this.postRepo.getPostSmall(postId);
    if (!post) {
      throw new PostNotFoundException();
    }
    let commentId = lastId;
    if (commentId <= 0) {
      commentId = await this.commentRepo.getLastId();
      if (!commentId) {
        return {
          comments: [],
          last_id: 0,
        };
      }
      commentId += 1;
    }
    const comments = await this.commentRepo.getComments(postId, commentId);
    if (!post.shop_id) {
      comments.forEach((comment) => {
        comment.author.name = comment.author.username;
        delete comment.author.username;
        comment.author.type = typeAuthor.user;
      });
    } else {
      // get employee ids
      const employee = await this.shopUserRepo.getEmployee(post.shop_id);
      const ids = [];
      employee.forEach((employ) => {
        ids.push(employ.id);
      });
      const shop = await this.shopRepo.getShopInfo(post.shop_id);
      ids.push(shop.owner_id);
      comments.forEach((comment) => {
        if (ids.indexOf(comment.user_id) >= 0) {
          comment.author = {
            id: shop.id,
            name: shop.name,
            avatar: shop.avatar,
            type: typeAuthor.shop,
          };
        } else {
          comment.author.name = comment.author.username;
          delete comment.author.username;
          comment.author.type = typeAuthor.user;
        }
      });
    }
    const last = comments.length > 0 ? comments[comments.length - 1].id : 0;
    return { comments, last_id: last };
  }
}

module.exports = CommentService;

