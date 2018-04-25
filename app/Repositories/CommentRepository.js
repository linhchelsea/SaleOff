'use strict';

const Comment = use('App/Models/Comment');
const Post = use('App/Models/Post');
const Database = use('Database');
const Config = use('Config');
const { pagination } = Config.get('global');
const authorSelector = [
  'id',
  'username',
  'avatar'
]
class CommentRepository {
  constructor() {
    this.comment = Comment;
    this.post = Post;
  }

  /**
   * addComment
   * @param userId
   * @param postId
   * @param type
   * @param comment
   * @return {Promise.<*>}
   */
  async addComment(userId, postId, type, comment) {
    const db = await Database.beginTransaction();
    try {
      const commentObj = new Comment();
      commentObj.user_id = userId;
      commentObj.post_id = postId;
      commentObj.type = type;
      commentObj.comment = comment;
      await commentObj.save();
      // increase post comment
      const post = await this.post.find(postId);
      post.comment += 1;
      await post.save();
      db.commit();
      return commentObj.toJSON();
    } catch (err) {
      console.log(err);
      db.rollback();
      return null;
    }
  }

  /**
   * getComment
   * @param id
   * @return {Promise.<null>}
   */
  async getComment(id) {
    const comment = await this.comment.find(id);
    return comment ? comment.toJSON() : null;
  }

  /**
   * editComment
   * @param id
   * @param comment
   * @return {Promise.<void>}
   */
  async editComment(id, comment) {
    const db = await Database.beginTransaction();
    try {
      const commentObj = await this.comment.find(id);
      commentObj.comment = comment;
      await commentObj.save();
      db.commit();
    } catch (err) {
      console.log(err);
      db.rollback();
    }
  }

  /**
   * getLastId
   * @returns {Promise.<null>}
   */
  async getLastId() {
    const comment = await this.comment.query().orderBy('id', 'desc').first();
    return comment ? comment.id : null;
  }

  /**
   * getComments
   * @param postId
   * @param lastId
   * @returns {Promise.<Array>}
   */
  async getComments(postId, lastId) {
    const comments = await this.comment
      .query()
      .with('author', (builder) => {
        builder.select(authorSelector);
      })
      .where('post_id', postId)
      .where('comments.id', '<', lastId)
      .orderBy('id', 'desc')
      .limit(pagination)
      .fetch();
    return comments ? comments.toJSON() : [];
  }
}

module.exports = CommentRepository;
