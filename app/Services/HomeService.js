'use strict';

const HomeRepository = use('App/Repositories/HomeRepository');
const ShopFollowRepository = use('App/Repositories/ShopFollowRepository');
const UserFollowRepository = use('App/Repositories/UserFollowRepository');
const ProductRepository = use('App/Repositories/ProductRepository');
const CategoryRepository = use('App/Repositories/CategoryRepository');
const CategoryNotFoundException = use('App/Exceptions/CategoryNotFoundException');
class HomeService {
  constructor() {
    this.homeRepo = new HomeRepository();
    this.shopFollowRepo = new ShopFollowRepository();
    this.userFollowRepo = new UserFollowRepository();
    this.productRepo = new ProductRepository();
    this.catRepo = new CategoryRepository();
  }

  /**
   * getPostsFollowing
   * @param userId
   * @param params
   * @returns {Promise.<Array>}
   */
  async getPostsFollowing(userId, params) {
    let id = params.last_id;
    if (id === 0) {
      id = await this.homeRepo.getLastPost() + 1;
    }
    const category = await this.catRepo.getCategoryById(+params.category);
    if (!category) {
      throw new CategoryNotFoundException();
    }
    const productIds = [];
    if (params.category !== 1) {
      const products = await this.productRepo.getListProductByCategory(params.category);
      products.forEach((product) => {
        productIds.push(product.id);
      });
    }
    const posts = await this.homeRepo.getFollowingNewsFeed(userId, productIds, id);
    return posts;
  }

  /**
   * getPostsNotFollowing
   * @param userId
   * @param params
   * @returns {Promise.<Array>}
   */
  async getPostsNotFollowing(userId, params) {
    let id = params.last_id;
    if (id === 0) {
      id = await this.homeRepo.getLastPost() + 1;
    }
    // get list following shop ids
    const shops = await this.shopFollowRepo.getListIdByUserId(userId);
    const shopIds = [];
    shops.forEach((shop) => {
      shopIds.push(shop.shop_id);
    });
    // get list following user ids
    const users = await this.userFollowRepo.getListUserIdFollowed(userId);
    const userIds = [];
    users.forEach((user) => {
      userIds.push(user.user_two_id);
    });
    const productIds = [];
    if (params.category !== 1) {
      const products = await this.productRepo.getListProductByCategory(params.category);
      products.forEach((product) => {
        productIds.push(product.id);
      });
    }
    const posts = await this.homeRepo.getNotFollowingNewsFeed(userId, shopIds, userIds, productIds, id);
    return posts;
  }
}

module.exports = HomeService;
