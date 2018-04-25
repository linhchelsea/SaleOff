'use strict';

const FeedbackRepository = use('App/Repositories/FeedbackRepository');
class FeedBackService {
  constructor () {
    this.fbRepo = new FeedbackRepository();
  }

  /**
   * send
   * @param userId
   * @param content
   * @returns {Promise.<void>}
   */
  async send(userId, content) {
    await this.fbRepo.send(userId, content);
  }
}

module.exports = FeedBackService;
