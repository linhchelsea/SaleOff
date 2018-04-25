'use strict';

const TokenRepository = use('App/Repositories/TokenRepository');
const UserRepository = use('App/Repositories/UserRepository');
const PostRepository = use('App/Repositories/PostRepository');
const ShopRepository = use('App/Repositories/ShopRepository');
const Env = use('Env');
const Config = use('Config');
const { type, sender, target } = Config.get('notification');

const { sendNotificationToAndroid
  , saveNotification
  , getDocumentBySenderReiceiverType
  , getDocumentBySenderReiceiverTypePostId
  , getDocumentBySenderReiceiverTypeShopId
  , updateCreatedAt
  , updateAcceptPost } = use('App/Helpers');
class Notification {
  constructor () {
    this.userRepo = new UserRepository();
    this.postRepo = new PostRepository();
    this.shopRepo = new ShopRepository();
    this.tokenRepo = new TokenRepository();
  }

  /**
   * user follows user
   * @param userOneId
   * @param userTwoId
   * @returns {Promise.<void>}
   */
  async userFollowUser({ userOneId, userTwoId }) {
    const user = await this.userRepo.getUserById(userOneId);
    const deviceTokens = await this.tokenRepo.getDeviceTokens(userTwoId);
    const data = {
      type: type.user_follow_user,
      user,
    };
    const typeSender = sender.user;
    const content = `${data.user.username} đã theo dõi bạn`;
    const notification = await getDocumentBySenderReiceiverType(userOneId, userTwoId, type.user_follow_user);
    if (!notification) {
      saveNotification({
        data,
        sender: userOneId,
        receiver: userTwoId,
        typeSender,
        avatar: user.avatar,
        content,
        targetType: target.user,
        targetId: user.id,
      });
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `${userOneId}_${type.user_follow_user}_${userTwoId}`,
          body: content,
          avatar: user.avatar,
          title: Env.get('APP_NAME'),
        };
        sendNotificationToAndroid(dataNotification);
      });
    } else {
      // update created_at
      await updateCreatedAt(notification.id);
    }
  }

  /**
   * userLikeYourPost
   * @param userId
   * @param postId
   * @returns {Promise.<void>}
   */
  async userLikeYourPost({ userId, postId }) {
    const post = await this.postRepo.getPostById(postId);
    if (!post.shop_id) {
      const user = await this.userRepo.getUserById(userId);
      const deviceTokens = await this.tokenRepo.getDeviceTokens(post.user_id);
      const data = {
        type: type.user_like_your_post,
        post,
      };
      const typeSender = sender.user;
      const content = `${user.username} đã thích bài viết của bạn`;
      const notification = await getDocumentBySenderReiceiverType(userId, post.user_id, type.user_like_your_post);
      if (!notification) {
        saveNotification({
          data,
          sender: userId,
          receiver: post.user_id,
          typeSender,
          avatar: user.avatar,
          content,
          targetType: target.post,
          targetId: post.id,
        });
        deviceTokens.forEach((deviceToken) => {
          const dataNotification = {
            deviceToken,
            data,
            tag: `${type.user_like_your_post}_${post.id}_${post.user_id}`,
            body: content,
            avatar: user.avatar,
            title: Env.get('APP_NAME'),
          };
          sendNotificationToAndroid(dataNotification);
        });
      } else {
        // update created_at
        await updateCreatedAt(notification.id);
      }
    }
  }

  /**
   * userCommentYourPost
   * @param userId
   * @param postId
   * @returns {Promise.<void>}
   */
  async userCommentYourPost({ userId, postId, comment }) {
    const post = await this.postRepo.getPostById(postId);
    if (!post.shop_id) {
      const user = await this.userRepo.getUserById(userId);
      const deviceTokens = await this.tokenRepo.getDeviceTokens(post.user_id);
      const data = {
        type: type.user_comment_your_post,
        post,
      };
      const typeSender = sender.user;
      const content = `${user.username} đã bình luận bài viết của bạn`;
      const notification = await getDocumentBySenderReiceiverType(userId, post.user_id, type.user_comment_your_post);
      if (!notification) {
        saveNotification({
          data,
          sender: userId,
          receiver: post.user_id,
          typeSender,
          avatar: user.avatar,
          content,
          targetType: target.post,
          targetId: post.id,
        });
        deviceTokens.forEach((deviceToken) => {
          const dataNotification = {
            deviceToken,
            data,
            tag: `${type.user_comment_your_post}_${post.id}_${post.user_id}`,
            body: comment,
            avatar: user.avatar,
            title: content,
          };
          sendNotificationToAndroid(dataNotification);
        });
      } else {
        // update created_at
        await updateCreatedAt(notification.id);
      }
    }
  }

  /**
   * acceptYourPost
   * @param postId
   * @returns {Promise.<void>}
   */
  async acceptYourPost({ postId }) {
    const post = await this.postRepo.getPostById(postId);
    if (!post.shop_id) {
      const deviceTokens = await this.tokenRepo.getDeviceTokens(post.user_id);
      const data = {
        type: type.my_post_accepted,
        post,
      };
      const typeSender = sender.system;
      // slice title
      const title = post.title.length <= 35 ? post.title : `${post.title.slice(0, 35)}...`;
      const content = `Bài viết ${title} của bạn đã được phê duyệt`;
      const notification = await getDocumentBySenderReiceiverTypePostId(0, post.user_id, type.my_post_accepted, post.id);
      if (!notification) {
        saveNotification({
          data,
          sender: 0,
          receiver: post.user_id,
          typeSender,
          avatar: Env.get('APP_LOGO'),
          content,
          targetType: target.post,
          targetId: post.id,
          postId: post.id,
        });
      } else {
        // update created_at
        await updateAcceptPost(notification.id, { avatar: Env.get('APP_LOGO'), content });
      }
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `0_${type.my_post_accepted}_${post.id}_${post.user_id}`,
          body: content,
          avatar: Env.get('APP_LOGO'),
          title: Env.get('APP_NAME'),
        };
        sendNotificationToAndroid(dataNotification);
      });
    }
  }

  /**
   * rejectYourPost
   * @param postId
   * @returns {Promise.<void>}
   */
  async rejectYourPost({ postId }) {
    const post = await this.postRepo.getPostById(postId);
    if (!post.shop_id) {
      const deviceTokens = await this.tokenRepo.getDeviceTokens(post.user_id);
      const data = {
        type: type.my_post_rejected,
        post,
      };
      const typeSender = sender.system;
      // slice title
      const title = post.title.length <= 35 ? post.title : `${post.title.slice(0, 35)}...`;
      const content = `Bài viết ${title} của bạn đã bị từ chối vì thông tin không chính xác`;
      const notification = await getDocumentBySenderReiceiverTypePostId(0, post.user_id, type.my_post_accepted, post.id);
      if (!notification) {
        saveNotification({
          data,
          sender: 0,
          receiver: post.user_id,
          typeSender,
          avatar: Env.get('APP_LOGO'),
          content,
          targetType: target.post,
          targetId: post.id,
          postId: post.id,
        });
      } else {
        // update created_at
        await updateAcceptPost(notification.id, { avatar: Env.get('APP_LOGO'), content });
      }
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `0_${type.my_post_rejected}_${post.id}_${post.user_id}`,
          body: content,
          avatar: Env.get('APP_LOGO'),
          title: Env.get('APP_NAME'),
        };
        sendNotificationToAndroid(dataNotification);
      });
    }
  }

  /**
   * acceptYourShop
   * @param shopId
   * @returns {Promise.<void>}
   */
  async acceptYourShop({ shopId }) {
    const shop = await this.shopRepo.getShopInfo(shopId);
    const deviceTokens = await this.tokenRepo.getDeviceTokens(shop.owner_id);
    const data = {
      type: type.my_shop_accepted,
      shop,
    };
    const typeSender = sender.system;
    // slice shop name
    const name = shop.name.length <= 35 ? shop.name : `${shop.name.slice(0, 35)}...`;
    const content = `Cửa hàng ${name} của bạn đã được phê duyệt`;
    const notification = await getDocumentBySenderReiceiverTypeShopId(0, shop.owner_id, type.my_shop_accepted, shop.id);
    if (!notification) {
      saveNotification({
        data,
        sender: 0,
        receiver: shop.owner_id,
        typeSender,
        avatar: shop.avatar,
        content,
        targetType: target.shop,
        targetId: shop.id,
        shopId: shop.id,
      });
    } else {
      // update created_at
      await updateAcceptPost(notification.id, { avatar: shop.avatar, content });
    }
    deviceTokens.forEach((deviceToken) => {
      const dataNotification = {
        deviceToken,
        data,
        tag: `0_${type.my_shop_accepted}_${shop.id}_${shop.owner_id}`,
        body: content,
        avatar: shop.avatar,
        title: Env.get('APP_NAME'),
      };
      sendNotificationToAndroid(dataNotification);
    });
  }

  async rejectYourShop({ shopId }) {
    const shop = await this.shopRepo.getShopInfo(shopId);
    const deviceTokens = await this.tokenRepo.getDeviceTokens(shop.owner_id);
    const data = {
      type: type.my_shop_rejected,
      shop,
    };
    const typeSender = sender.system;
    // slice shop name
    const name = shop.name.length <= 35 ? shop.name : `${shop.name.slice(0, 35)}...`;
    const content = `Cửa hàng ${name} của bạn đã bị từ chối vì thông tin không chính xác`;
    const notification = await getDocumentBySenderReiceiverTypeShopId(0, shop.owner_id, type.my_shop_accepted, shop.id);
    if (!notification) {
      saveNotification({
        data,
        sender: 0,
        receiver: shop.owner_id,
        typeSender,
        avatar: shop.avatar,
        content,
        targetType: target.shop,
        targetId: shop.id,
        shopId: shop.id,
      });
    } else {
      // update created_at
      await updateAcceptPost(notification.id, { avatar: shop.avatar, content });
    }
    deviceTokens.forEach((deviceToken) => {
      const dataNotification = {
        deviceToken,
        data,
        tag: `0_${type.my_shop_rejected}_${shop.id}_${shop.owner_id}`,
        body: content,
        avatar: shop.avatar,
        title: Env.get('APP_NAME'),
      };
      sendNotificationToAndroid(dataNotification);
    });
  }
}

module.exports = Notification;

