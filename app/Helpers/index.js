const moment = require('moment');
const admin = require('firebase-admin');
const request = require('request');

const Env = use('Env');
const serviceAccount = require('../../serviceAccount.json');

const serverKey = Env.get('FCM_SERVER_KEY');
const databaseURL = Env.get('FIREBASE_DATABASE_URL');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
});
const db = admin.firestore();
const Config = use('Config');
const { dayOffset, timeToLive } = Config.get('global');
const table = 'notifications';
/**
 * get current time
 * @returns {string}
 */
const getTimestamps = () => {
  const today = new Date();
  return moment(today).format('YYYY-MM-DD HH:mm:ss');
};

/**
 * veriry firebase id token to login
 * @param idToken
 * @returns {Promise<admin.auth.DecodedIdToken>}
 */
const verify = async (idToken) => {
  const user = await admin.auth().verifyIdToken(idToken);
  return user;
};

/**
 * send notification to device base on device token generated by firebase
 * @param data
 * @param notification
 * @param deviceToken
 */
const send = (data, notification, deviceToken) => {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
      Authorization: `key=${serverKey}`,
    },
    body: JSON.stringify({
      time_to_live: timeToLive,
      data,
      notification,
      priority: 'high',
      to: deviceToken,
    }),
  }, (error, response, body) => {
    console.log(body);
    if (error) {
      throw error;
    }
  });
};

/**
 * sendNotificationToAndroid
 * @param deviceToken, data, cb
 * @param data
 * @return {Promise}
 */
const sendNotificationToAndroid = (dataNotification) => {
  const { deviceToken, data, tag, body, avatar, title } = dataNotification;
  const notification = {
    title,
    icon: avatar,
    body,
    sound: 'default',
    tag,
  };
  send(data, notification, deviceToken.device_token);
};

/**
 * get date offset
 * @returns {string}
 */
const getDayOffsetTime = () => {
  const today = new Date();
  today.setDate(today.getDate() - dayOffset);
  return moment(today).format('YYYY-MM-DD HH:mm:ss');
};

/**
 * save new notification record
 * @param data
 * @param sender
 * @param receiver
 * @param typeSender
 * @param avatar
 * @param content
 * @param targetType
 * @param targetId
 * @param postId
 * @param shopId
 */
const saveNotification = ({ data, sender, receiver, typeSender, avatar, content, targetType, targetId, postId, shopId }) => {
  const timestamp = getTimestamps();
  const payload = {
    type: data.type,
    sender_id: sender,
    receiver_id: +receiver,
    type_sender: typeSender,
    is_read: false,
    body: {
      avatar,
      content,
    },
    target: {
      type: targetType,
      id: targetId,
    },
    created_at: timestamp,
    updated_at: timestamp,
  };
  if (postId) {
    payload.post_id = postId;
  }
  if (shopId) {
    payload.shop_id = shopId;
  }
  db.collection(table).add(payload);
};

/**
 * getDocumentBySenderReiceiverType
 * @param sender
 * @param receiver
 * @param type
 * @returns {Promise.<number>}
 */
const getDocumentBySenderReiceiverType = async (sender, receiver, type) => {
  const notifications = await db.collection(table)
    .where('sender_id', '=', sender)
    .where('receiver_id', '=', receiver)
    .where('type', '=', type)
    .get();
  let notification = null;
  notifications.forEach((doc) => {
    notification = doc.data();
    notification.id = doc.id;
  });
  return notification;
};

/**
 * getDocumentBySenderReiceiverTypePostId
 * @param sender
 * @param receiver
 * @param type
 * @param postId
 * @returns {Promise.<*>}
 */
const getDocumentBySenderReiceiverTypePostId = async (sender, receiver, type, postId) => {
  const notifications = await db.collection(table)
    .where('sender_id', '=', sender)
    .where('receiver_id', '=', receiver)
    .where('post_id', '=', postId)
    .where('type', '=', type)
    .get();
  let notification = null;
  notifications.forEach((doc) => {
    notification = doc.data();
    notification.id = doc.id;
  });
  return notification;
};

/**
 * getDocumentBySenderReiceiverTypeShopId
 * @param sender
 * @param receiver
 * @param type
 * @param postId
 * @returns {Promise.<*>}
 */
const getDocumentBySenderReiceiverTypeShopId = async (sender, receiver, type, shopId) => {
  const notifications = await db.collection(table)
    .where('sender_id', '=', sender)
    .where('receiver_id', '=', receiver)
    .where('shop_id', '=', shopId)
    .where('type', '=', type)
    .get();
  let notification = null;
  notifications.forEach((doc) => {
    notification = doc.data();
    notification.id = doc.id;
  });
  return notification;
};

/**
 * updateCreatedAt
 * @param id
 * @returns {Promise.<void>}
 */
const updateCreatedAt = async (id) => {
  const notification = await db.collection(table).doc(id);
  notification.update({
    updated_at: getTimestamps(),
  });
};

/**
 * updateAcceptPost
 * @param id
 * @param body
 * @returns {Promise.<void>}
 */
const updateAcceptPost = async (id, body) => {
  const notification = await db.collection(table).doc(id);
  notification.update({
    updated_at: getTimestamps(),
    body,
  });
};

module.exports = {
  saveNotification,
  sendNotificationToAndroid,
  getDayOffsetTime,
  verify,
  getDocumentBySenderReiceiverType,
  getDocumentBySenderReiceiverTypePostId,
  getDocumentBySenderReiceiverTypeShopId,
  updateCreatedAt,
  updateAcceptPost,
};

