'use strict';

const Feedback = use('App/Models/Feedback');

class FeedbackRepository {
  constructor () {
    this.feedback = Feedback;
  }

  /**
   * send
   * @param userId
   * @param content
   * @returns {Promise.<void>}
   */
  async send(userId, content) {
    await this.feedback.create({
      user_id: userId,
      content,
    });
  }
}

module.exports = FeedbackRepository;
