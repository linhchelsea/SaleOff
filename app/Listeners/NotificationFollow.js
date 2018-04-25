'use strict';

const TokenRepository = use('App/Repositories/TokenRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const UserFollowRepository = use('App/Repositories/UserFollowRepository');
const ShopFollowRepository = use('App/Repositories/ShopFollowRepository');
const Env = use('Env');
const Config = use('Config');
const { type, sender, target } = Config.get('notification');

const { sendNotificationToAndroid, saveNotification } = use('App/Helpers');
class NotificationFollow {
  constructor () {
    this.shopRepo = new ShopRepository();
    this.tokenRepo = new TokenRepository();
    this.userFollowRepo = new UserFollowRepository();
    this.shopFollowRepo = new ShopFollowRepository();
  }

  /**
   * userFollowNewPost
   * @param user
   * @param post
   * @returns {Promise.<void>}
   */
  async userFollowNewPost({ user, post }) {
    const followers = await this.userFollowRepo.getListFollower(user.id);
    const ids = [];
    followers.forEach((follower) => {
      ids.push(follower.user_one_id);
    });
    const data = {
      type: type.user_follow_new_post,
      post,
    };
    const typeSender = sender.user;
    const content = `${user.username} vừa thêm một bài viết mới`;
    for (let i = 0; i < ids.length; i += 1) {
      saveNotification({
        data,
        sender: 0,
        receiver: ids[i],
        typeSender,
        avatar: user.avatar,
        content,
        targetType: target.post,
        targetId: post.id,
        postId: post.id,
      });
      const deviceTokens = await this.tokenRepo.getDeviceTokens(ids[i]);
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `${user.id}_${type.user_follow_new_post}_${ids[i]}`,
          body: content,
          avatar: user.avatar,
          title: Env.get('APP_NAME'),
        };
        sendNotificationToAndroid(dataNotification);
      });
    }
  }

  /**
   * shopFollowNewPost
   * @param post
   * @returns {Promise.<void>}
   */
  async shopFollowNewPost({ post }) {
    const shop = await this.shopRepo.getShopInfo(post.shop_id);
    const followers = await this.shopFollowRepo.getListFollower(post.shop_id);
    const ids = [];
    followers.forEach((follower) => {
      ids.push(follower.user_id);
    });
    const data = {
      type: type.shop_follow_new_post,
      post,
    };
    const typeSender = sender.shop;
    const content = `${shop.name} vừa thêm một bài viết mới`;
    for (let i = 0; i < ids.length; i += 1) {
      saveNotification({
        data,
        sender: shop.id,
        receiver: ids[i],
        typeSender,
        avatar: shop.avatar,
        content,
        targetType: target.post,
        targetId: post.id,
        postId: post.id,
      });
      const deviceTokens = await this.tokenRepo.getDeviceTokens(ids[i]);
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `${shop.id}_${type.shop_follow_new_post}_${ids[i]}`,
          body: content,
          avatar: shop.avatar,
          title: Env.get('APP_NAME'),
        };
        sendNotificationToAndroid(dataNotification);
      });
    }
  }
}

module.exports = NotificationFollow;

