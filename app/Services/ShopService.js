'use strict';

const ShopRepository = use('App/Repositories/ShopRepository');
const CategoryRepository = use('App/Repositories/CategoryRepository');
const ShopUserRepository = use('App/Repositories/ShopUserRepository');
const UserRepository = use('App/Repositories/UserRepository');
const CategoryNotFoundException = use('App/Exceptions/CategoryNotFoundException');
const CategoryInvalidException = use('App/Exceptions/CategoryInvalidException');
const ShopNotFoundException = use('App/Exceptions/ShopNotFoundException');
const NotShopOwnerException = use('App/Exceptions/NotShopOwnerException');
const CantRemoveShopOwnerException = use('App/Exceptions/CantRemoveShopOwnerException');
const Event = use('Event');
class ShopService {
  constructor () {
    this.shopRepo = new ShopRepository();
    this.shopCatRepo = new CategoryRepository();
    this.userRepo = new UserRepository();
    this.shopUserRepo = new ShopUserRepository();
  }

  /**
   * create new shop
   * @param userId
   * @param params
   * @return {Promise.<*>}
   */
  async createShop (userId, params) {
    const shopCategory = await this.shopCatRepo.getCategoryById(params.shop_cat_id);
    if (!shopCategory) {
      throw new CategoryNotFoundException();
    }
    if (shopCategory.id === 1) {
      throw new CategoryInvalidException();
    }
    const shop = await this.shopRepo.createShop(userId, params);
    shop.category = shopCategory.name;
    return shop;
  }

  /**
   * updateInfo
   * @param id
   * @param data
   * @param userId
   * @return {Promise.<boolean>}
   */
  async updateInfo(id, data, userId) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    if (shop.owner_id !== userId) {
      throw new NotShopOwnerException();
    }
    const update = await this.shopRepo.updateInfo(id, data);
    return update;
  }
  /**
   * getShopInfo
   * @param id
   * @return {Promise.<*>}
   */
  async getShopInfo(id) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const category = await this.shopCatRepo.getCategoryById(shop.shop_cat_id);
    shop.category = category.name;
    const user = await this.userRepo.getUserById(shop.owner_id);
    shop.owner = user.username;
    return shop;
  }

  /**
   * getShopInfo
   * @param id
   * @return {Promise.<*>}
   */
  async getYourShopInfo(id) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    const category = await this.shopCatRepo.getCategoryById(shop.shop_cat_id);
    shop.category = category.name;
    const user = await this.userRepo.getUserById(shop.owner_id);
    shop.owner = user.username;
    const employee = await this.shopUserRepo.getEmployee(id);
    shop.employee = employee;
    return shop;
  }

  /**
   * add employee
   * @param shopId
   * @param ids
   * @return {Promise.<void>}
   */
  async addEmployee(shopId, ids) {
    const shop = await this.shopRepo.shop.findOrFail(shopId);
    for (let i = 0; i < ids.length; i += 1) {
      try {
        if (shop.owner_id !== ids[i]) {
          await shop.users().attach(ids[i]);
        }
      } catch (err) {
        console.log('user add');
      }
    }
    Event.fire('notification:user_become_employee', { shopId, ids });
  }

  async removeEmployee(shopId, ids) {
    const shop = await this.shopRepo.shop.findOrFail(shopId);
    if (ids.indexOf(shop.owner_id) >= 0) {
      throw new CantRemoveShopOwnerException();
    }
    const employee = await this.shopUserRepo.getEmployeeByIds(shopId, ids);
    if (employee.length > 0) {
      await this.shopUserRepo.removeEmployee(shopId, ids);
      Event.fire('notification:user_remove_employee', {shopId, ids});
    }
  }

  /**
   * get employee
   * @param shopId
   * @return {Promise.<*>}
   */
  async getEmployee(shopId) {
    const users = await this.shopUserRepo.getEmployee(shopId);
    return users;
  }

  /**
   * find user to add
   * @param shopId
   * @param text
   * @return {Promise.<*>}
   */
  async findUserToAdd(shopId, text, userId) {
    const employee = await this.shopUserRepo.getEmployee(shopId);
    const ids = [];
    for (let i = 0; i < employee.length; i += 1) {
      ids.push(employee[i].id);
    }
    ids.push(userId);
    if (text.trim() !== '') {
      const users = await this.userRepo.findUserToAdd(ids, text);
      return users;
    }
    return [];
  }

  /**
   * getListShopFollowed
   * @param userId
   * @return {Promise.<*>}
   */
  async getListShopFollowed(userId) {
    const shops = await this.shopRepo.getListShopFollowed(userId);
    return shops;
  }

  /**
   * getYourShops
   * @param userId
   * @return {Promise.<Array>}
   */
  async getYourShops(userId) {
    const shops = await this.shopRepo.getYourShops(userId);
    return shops;
  }

  /**
   * getYourShopsWorking
   * @param userId
   * @return {Promise.<Array>}
   */
  async getYourShopsWorking(userId) {
    const shops = await this.shopRepo.getYourShopsWorking(userId);
    return shops;
  }

  /**
   * rateShop
   * @param shopId
   * @param userId
   * @param point
   * @return {Promise.<boolean>}
   */
  async rateShop(shopId, userId, point) {
    const isRate = await this.shopRepo.rateShop(shopId, userId, point);
    return isRate;
  }

  /**
   * accept
   * @param id
   * @return {Promise.<void>}
   */
  async accept(id) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    if (!shop.is_active) {
      Event.fire('notification:accept_your_shop', { shopId: id });
      await this.shopRepo.accept(id);
    }
  }

  /**
   * reject
   * @param id
   * @returns {Promise.<void>}
   */
  async reject(id) {
    const shop = await this.shopRepo.getShopInfo(id);
    if (!shop) {
      throw new ShopNotFoundException();
    }
    Event.fire('notification:reject_your_shop', { shopId: id });
    if (shop.is_active) {
      await this.shopRepo.accept(id);
    }
  }
}

module.exports = ShopService;
