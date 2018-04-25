'use strict';

const ShopFollow = use('App/Models/ShopFollow');
const Shop = use('App/Models/Shop');
const Database = use('Database');
const Config = use('Config');
const { pagination } = Config.get('global');
class ShopFollowRepository {
  constructor () {
    this.shopFollow = ShopFollow;
    this.shop = Shop;
  }

  /**
   * get shopFollow by id
   * @param id
   * @return {Promise.<null>}
   */
  async getShopFollow (userId, shopId) {
    const shopFollow = await this.shopFollow
      .query()
      .where('shop_id', shopId)
      .where('user_id', userId)
      .first();
    return shopFollow ? shopFollow.toJSON() : null;
  }

  /**
   * follow shop
   * @param shopId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async followShop(shopId, userId) {
    const db = await Database.beginTransaction();
    try {
      const shopFollow = new ShopFollow();
      shopFollow.shop_id = shopId;
      shopFollow.user_id = userId;
      await shopFollow.save();
      const shop = await this.shop.find(shopId);
      shop.follows += 1;
      await shop.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * unfollow shop
   * @param shopId
   * @param userId
   * @return {Promise.<boolean>}
   */
  async unfollowShop(shopId, userId) {
    const db = await Database.beginTransaction();
    try {
      const shopFollow = await this.shopFollow
        .query()
        .where('shop_id', shopId)
        .where('user_id', userId)
        .first();
      await shopFollow.delete();
      const shop = await this.shop.find(shopId);
      shop.follows -= 1;
      await shop.save();
      db.commit();
      return true;
    } catch (err) {
      db.rollback();
      return false;
    }
  }

  /**
   * getListFollowByUserId
   * @param userId
   * @return {Promise.<Array>}
   */
  async getListFollowByUserId(userId) {
    const shops = await this.shopFollow
      .query()
      .where('user_id', userId)
      .fetch();
    return shops ? shops.toJSON() : [];
  }

  /**
   * getListIdByUserId
   * @param userId
   * @return {Promise.<Array>}
   */
  async getListIdByUserId(userId) {
    const shops = await this.shopFollow
      .query()
      .where('user_id', userId)
      .select('shop_id')
      .fetch();
    return shops ? shops.toJSON() : [];
  }

  /**
   * getListFollowingShop
   * @param userId
   * @param text
   * @param page
   * @param categoryId
   * @return {Promise.<Array>}
   */
  async searchListFollowingShop(userId, text, page, categoryId) {
    if (categoryId === 1) {
      const shops = await this.shopFollow
        .query()
        .innerJoin('shops', 'shops.id', 'shop_follows.shop_id')
        .where('shop_follows.user_id', userId)
        .where('shops.name', 'like', `%${text}%`)
        .select('shops.*')
        .paginate(page, pagination);
      return shops ? shops.toJSON().data : [];
    }
    const shops = await this.shopFollow
      .query()
      .innerJoin('shops', 'shops.id', 'shop_follows.shop_id')
      .where('shop_follows.user_id', userId)
      .where('shops.shop_cat_id', categoryId)
      .where('shops.name', 'like', `%${text}%`)
      .select('shops.*')
      .paginate(page, pagination);
    return shops ? shops.toJSON().data : [];
  }

  /**
   * getListFollower
   * @param shopId
   * @returns {Promise.<Array>}
   */
  async getListFollower(shopId) {
    const followers = await this.shopFollow
      .query()
      .where('shop_id', shopId)
      .select('user_id')
      .fetch();
    return followers ? followers.toJSON() : [];
  }
}

module.exports = ShopFollowRepository;
