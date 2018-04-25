'use strict';

const Post = use('App/Models/Post');
const Config = use('Config');
const { pagination } = Config.get('global');
const { getDayOffsetTime } = use('App/Helpers');
const dayOffsetTime = getDayOffsetTime();
const newsFeedSelector = [
  'posts.id',
  'posts.title',
  'posts.sale_percent',
  'start_date',
  'end_date',
  'like',
  'comment',
  'product_id',
  'posts.created_at',
  'posts.shop_id',
  'posts.user_id',
  'posts.cover',
];
const shopSelector = ['id', 'name', 'avatar'];
const userSelector = ['id', 'username', 'avatar'];
class HomeRepository {
  constructor () {
    this.post = Post;
  }

  /**
   * getFollowingNewsFeed
   * @param userId
   * @param productIds
   * @param lastId
   * @returns {Promise.<Array>}
   */
  async getFollowingNewsFeed(userId, productIds, lastId) {
    let posts;
    if (productIds.length === 0) {
      posts = await this.post
        .query()
        .innerJoin('shop_follows', 'posts.shop_id', 'shop_follows.shop_id')
        .whereNot('posts.shop_id', null)
        .whereNot('posts.user_id', userId)
        .where('posts.id', '<', lastId)
        .where('shop_follows.user_id', userId)
        .where('posts.created_at', '>=', dayOffsetTime)
        .select(newsFeedSelector)
        .with('shop', (builder) => {
          builder.select(shopSelector);
        })
        .with('user', (builder) => {
          builder.select(userSelector);
        })
        .union(function () {
          this.innerJoin('user_follows', 'posts.user_id', 'user_follows.user_two_id')
            .whereNull('posts.shop_id')
            .whereNot('posts.user_id', userId)
            .where('posts.id', '<', lastId)
            .where('user_follows.user_one_id', userId)
            .where('posts.created_at', '>=', dayOffsetTime)
            .select(newsFeedSelector);
        })
        .orderBy('id', 'desc')
        .limit(pagination)
        .fetch();
    } else {
      posts = await this.post
        .query()
        .innerJoin('shop_follows', 'posts.shop_id', 'shop_follows.shop_id')
        .whereNot('posts.shop_id', null)
        .whereNot('posts.user_id', userId)
        .whereIn('posts.product_id', productIds)
        .where('posts.id', '<', lastId)
        .where('shop_follows.user_id', userId)
        .where('posts.created_at', '>=', dayOffsetTime)
        .select(newsFeedSelector)
        .with('shop', (builder) => {
          builder.select(shopSelector);
        })
        .with('user', (builder) => {
          builder.select(userSelector);
        })
        .union(function () {
          this.innerJoin('user_follows', 'posts.user_id', 'user_follows.user_two_id')
            .whereNull('posts.shop_id')
            .whereNot('posts.user_id', userId)
            .where('posts.id', '<', lastId)
            .whereIn('posts.product_id', productIds)
            .where('user_follows.user_one_id', userId)
            .where('posts.created_at', '>=', dayOffsetTime)
            .select(newsFeedSelector);
        })
        .orderBy('id', 'desc')
        .limit(pagination)
        .fetch();
    }
    return posts ? posts.toJSON() : [];
  }

  /**
   * getNotFollowingNewsFeed
   * @param userId
   * @param shopIds
   * @param userIds
   * @param productIds
   * @param lastId
   * @returns {Promise.<Array>}
   */
  async getNotFollowingNewsFeed(userId, shopIds, userIds, productIds, lastId) {
    let posts;
    if (productIds.length === 0) {
      posts = await this.post
        .query()
        .whereNot('shop_id', null)
        .whereNotIn('shop_id', shopIds)
        .whereNot('user_id', userId)
        .where('id', '<', lastId)
        .where('created_at', '>=', dayOffsetTime)
        .select(newsFeedSelector)
        .with('shop', (builder) => {
          builder.select(shopSelector);
        })
        .with('user', (builder) => {
          builder.select(userSelector);
        })
        .union(function () {
          this.whereNull('shop_id')
            .whereNotIn('user_id', userIds)
            .whereNot('user_id', userId)
            .where('id', '<', lastId)
            .where('created_at', '>=', dayOffsetTime)
            .select(newsFeedSelector);
        })
        .orderBy('created_at', 'desc')
        .limit(pagination)
        .fetch();
    } else {
      posts = await this.post
        .query()
        .whereNot('shop_id', null)
        .whereNotIn('shop_id', shopIds)
        .whereNot('user_id', userId)
        .where('id', '<', lastId)
        .whereIn('product_id', productIds)
        .where('created_at', '>=', dayOffsetTime)
        .select(newsFeedSelector)
        .with('shop', (builder) => {
          builder.select(shopSelector);
        })
        .with('user', (builder) => {
          builder.select(userSelector);
        })
        .union(function () {
          this.whereNull('shop_id')
            .whereNotIn('user_id', userIds)
            .whereNot('user_id', userId)
            .where('id', '<', lastId)
            .whereIn('product_id', productIds)
            .where('created_at', '>=', dayOffsetTime)
            .select(newsFeedSelector);
        })
        .orderBy('created_at', 'desc')
        .limit(pagination)
        .fetch();
    }
    return posts ? posts.toJSON() : [];
  }

  /**
   * getLastPost
   * @returns {Promise.<void>}
   */
  async getLastPost() {
    const post = await this.post.query().orderBy('id', 'desc').first();
    return post.id;
  }
}

module.exports = HomeRepository;
