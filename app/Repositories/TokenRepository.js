'use strict';

const Token = use('App/Models/Token');
const tokenSelector = [
  'id',
  'device_token',
  'platform',
];
class TokenRepository {
  constructor () {
    this.token = Token;
  }

  /**
   * getDeviceTokens
   * @param userId
   * @returns {Promise.<Array>}
   */
  async getDeviceTokens(userId) {
    const tokens = await this.token
      .query()
      .where('user_id', userId)
      .select(tokenSelector)
      .fetch();
    return tokens ? tokens.toJSON() : [];
  }
}

module.exports = TokenRepository;
