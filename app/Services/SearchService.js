'use strict';

const ShopFollowRepository = use('App/Repositories/ShopFollowRepository');
const UserFollowRepository = use('App/Repositories/UserFollowRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const PostRepository = use('App/Repositories/PostRepository');
const UserRepository = use('App/Repositories/UserRepository');
class SearchService {
  constructor () {
    this.shopFollowRepo = new ShopFollowRepository();
    this.userFollowRepo = new UserFollowRepository();
    this.shopRepo = new ShopRepository();
    this.postRepo = new PostRepository();
    this.userRepo = new UserRepository();
  }

  /**
   * searchShop
   * @param page
   * @param text
   * @param categoryId
   * @param userId
   * @return {Promise.<Array>}
   */
  async searchShop(page, text, categoryId, type, userId) {
    if (type) {
      // search following shop
      const shops = await this.shopFollowRepo
        .searchListFollowingShop(userId, text, page, categoryId);
      return shops;
    }
    // get list following shop ids
    const list = await this.shopFollowRepo.getListFollowByUserId(userId);
    const ids = [];
    for (let i = 0; i < list.length; i += 1) {
      ids.push(list[i].id);
    }
    const shops = await this.shopRepo.searchMoreShops(text, categoryId, page, ids);
    return shops;
  }

  /**
   * searchUser
   * @param userId
   * @param params
   * @return {Promise.<*>}
   */
  async searchUser(userId, params) {
    if (params.type) {
      // search user followed
      const users = await this.userFollowRepo.getListUserFollow(userId, params.text, params.page);
      return users;
    }
    // search user not follow
    // get list user id
    const userFollows = await this.userFollowRepo.getListUserIdFollowed(userId);
    const ids = [userId];
    for (let i = 0; i < userFollows.length; i += 1) {
      ids.push(userFollows[i].user_two_id);
    }
    const users = await this.userRepo.getListUserNotFollow(params.text, params.page, ids);
    return users;
  }

  /**
   * searchPost
   * @param page
   * @param params
   * @param userId
   * @return {Promise.<Array>}
   */
  async searchPost(page, params, userId) {
    let posts = [];
    if (params.type === 'shop') {
      const shopIds = await this.shopFollowRepo.getListIdByUserId(userId);
      const ids = [];
      shopIds.forEach((id) => {
        ids.push(id.shop_id);
      });
      if (params.follow) {
        posts = await this.postRepo.getPostShopFollowing(userId, params, ids, page);
      } else {
        posts = await this.postRepo.getPostShopNotFollowing(userId, params, ids, page);
      }
    } else {
      const userIds = await this.userFollowRepo.getListUserIdFollowed(userId);
      const ids = [];
      userIds.forEach((id) => {
        ids.push(id.user_two_id);
      });
      if (params.follow) {
        posts = await this.postRepo.getPostUserFollowing(userId, params, ids, page);
      } else {
        posts = await this.postRepo.getPostUserNotFollowing(userId, params, ids, page);
      }
    }
    return posts;
  }
}

module.exports = SearchService;
