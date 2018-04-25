'use strict';

const Controller = use('App/Controllers/Controller');
const ShopService = use('App/Services/ShopService');
const ShopFollowService = use('App/Services/ShopFollowService');
const Config = use('Config');
const error = Config.get('error');
class ShopController extends Controller {
  constructor() {
    super();
    this.shopService = new ShopService();
    this.shopFollowService = new ShopFollowService();
  }

  /**
   * create
   * @param request
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async create({ request, auth }) {
    const user = await auth.getUser();
    const params = request.all();
    const shop = await this.shopService.createShop(user.id, params);
    const data = {
      shop,
    };
    return this.buildSuccess({ data });
  }

  /**
   * updateInfo
   * @param params
   * @param auth
   * @param request
   * @param response
   * @return {Promise.<*>}
   */
  async updateInfo({ params, auth, request, response }) {
    const user = await auth.getUser();
    const { id } = params;
    const data = request.only([
      'name', 'phone', 'avatar', 'cover', 'description', 'address', 'web',
    ]);
    const update = await this.shopService.updateInfo(id, data, user.id);
    if (update) {
      return this.buildSuccess({});
    }
    return this.errorResponse(response, {});
  }

  /**
   * getShopInfo
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getShopInfo({ params }) {
    const shop = await this.shopService.getShopInfo(params.shopId);
    const data = {
      shop,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getYourShopInfo
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getYourShopInfo({ params }) {
    const shop = await this.shopService.getYourShopInfo(params.shopId);
    const data = {
      shop,
    };
    return this.buildSuccess({ data });
  }

  /**
   * follow shop
   * @param params
   * @param auth
   * @return {Promise.<*>}
   */
  async followShop ({ params, auth }) {
    const user = await auth.getUser();
    const shopId = params.id;
    const follow = await this.shopFollowService.followShop(shopId, user.id);
    if (follow) {
      return this.buildSuccess({});
    }
    return this.errorResponse({});
  }

  /**
   * unfollow shop
   * @param params
   * @param auth
   * @return {Promise.<*>}
   */
  async unfollowShop({ params, auth }) {
    const user = await auth.getUser();
    const shopId = params.id;
    const follow = await this.shopFollowService.unfollowShop(shopId, user.id);
    if (follow) {
      return this.buildSuccess({});
    }
    return this.errorResponse({});
  }

  /**
   * get list shop to follow
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getListFollowSearch({ auth }) {
    const user = await auth.getUser();
    const shops = await this.shopFollowService.getListFollowSearch(user.id);
    const data = {
      shops,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getListShopFollowed
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getListShopFollowed({ auth }) {
    const user = await auth.getUser();
    const shops = await this.shopService.getListShopFollowed(user.id);
    const data = {
      shops,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getYourShops
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getYourShops({ auth }) {
    const user = await auth.getUser();
    const shops = await this.shopService.getYourShops(user.id);
    const data = {
      shops,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getYourShopsWorking
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getYourShopsWorking({ auth }) {
    const user = await auth.getUser();
    const shops = await this.shopService.getYourShopsWorking(user.id);
    const data = {
      shops,
    };
    return this.buildSuccess({ data });
  }

  /**
   * rate
   * @param request
   * @param auth
   * @param params
   * @param response
   * @return {Promise.<*>}
   */
  async rate({ request, auth, params, response }) {
    const { point } = request.all();
    const user = await auth.getUser();
    const { id } = params;
    const isRate = await this.shopService.rateShop(id, user.id, point);
    if (isRate) {
      return this.buildSuccess({});
    }
    return this.errorResponse(response, {
      message: error.rate_shop_fail.message,
      error: error.rate_shop_fail.error,
    });
  }

  /**
   * accept
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async accept({ params }) {
    const { id } = params;
    await this.shopService.accept(id);
    return this.buildSuccess({});
  }

  /**
   * reject
   * @param params
   * @returns {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async reject({ params }) {
    const { id } = params;
    await this.shopService.reject(id);
    return this.buildSuccess({});
  }
}

module.exports = ShopController;
