'use strict';

const ShopUser = use('App/Models/ShopUser');
const Database = use('Database');
class ShopUserRepository {
  constructor () {
    this.shopUser = ShopUser;
  }

  /**
   * get employee
   * @param shopId
   * @return {Promise.<Array>}
   */
  async getEmployee(shopId) {
    const users = await this.shopUser
      .query()
      .innerJoin('users', 'users.id', 'shop_users.user_id')
      .where('shop_id', shopId)
      .select('users.*')
      .fetch();
    return users ? users.toJSON() : [];
  }

  /**
   * getShopUser
   * @param shopId
   * @param userId
   * @return {Promise.<null>}
   */
  async getShopUser(shopId, userId) {
    const shopUser = await this.shopUser
      .query()
      .where('shop_id', shopId)
      .where('user_id', userId)
      .first();
    return shopUser ? shopUser.toJSON() : null;
  }

  /**
   * getEmployeeByIds
   * @param shopId
   * @param ids
   * @returns {Promise.<Array>}
   */
  async getEmployeeByIds(shopId, ids) {
    const employee = await this.shopUser
      .query()
      .where('shop_id', shopId)
      .whereIn('user_id', ids)
      .fetch();
    return employee ? employee.toJSON() : [];
  }

  /**
   * removeEmployee
   * @param shopId
   * @param ids
   * @returns {Promise.<void>}
   */
  async removeEmployee(shopId, ids) {
    const db = await Database.beginTransaction();
    try {
      await this.shopUser
        .query()
        .where('shop_id', shopId)
        .whereIn('user_id', ids)
        .delete();
      db.commit();
    } catch (err) {
      db.rollback();
    }
  }
}

module.exports = ShopUserRepository;
