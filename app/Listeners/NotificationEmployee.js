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
   * userBecomeEmployee
   * @param shopId
   * @param ids
   * @returns {Promise.<void>}
   */
  async userBecomeEmployee({ shopId, ids }) {
    const shop = await this.shopRepo.getShopInfo(shopId);
    const data = {
      type: type.user_become_employee,
      shop,
    };
    const typeSender = sender.shop;
    const content = `Bạn đã trở thành nhân viên của cửa hàng ${shop.name}`;
    for (let i = 0; i < ids.length; i += 1) {
      saveNotification({
        data,
        sender: +shopId,
        receiver: ids[i],
        typeSender,
        avatar: shop.avatar,
        content,
        targetType: target.shop,
        targetId: shop.id,
        shopId: shop.id,
      });
      const deviceTokens = await this.tokenRepo.getDeviceTokens(ids[i]);
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `${shop.id}_${type.user_become_employee}_${ids[i]}`,
          body: content,
          avatar: shop.avatar,
          title: Env.get('APP_NAME'),
        };
        sendNotificationToAndroid(dataNotification);
      });
    }
  }

  /**
   * userRemoveEmployee
   * @param shopId
   * @param ids
   * @returns {Promise.<void>}
   */
  async userRemoveEmployee({ shopId, ids }) {
    const shop = await this.shopRepo.getShopInfo(shopId);
    const data = {
      type: type.user_remove_employee,
      shop,
    };
    const typeSender = sender.shop;
    const content = `Chủ cửa hàng ${shop.name} đã xóa bạn khỏi danh sách nhân viên`;
    for (let i = 0; i < ids.length; i += 1) {
      saveNotification({
        data,
        sender: +shopId,
        receiver: ids[i],
        typeSender,
        avatar: shop.avatar,
        content,
        targetType: target.shop,
        targetId: shop.id,
        shopId: shop.id,
      });
      const deviceTokens = await this.tokenRepo.getDeviceTokens(ids[i]);
      deviceTokens.forEach((deviceToken) => {
        const dataNotification = {
          deviceToken,
          data,
          tag: `${shop.id}_${type.user_remove_employee}_${ids[i]}`,
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

