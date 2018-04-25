'use strict';

const Controller = use('App/Controllers/Controller');
const FeedbackService = use('App/Services/FeedbackService');
class FeedbackController extends Controller {
  /**
   * constructor
   */
  constructor() {
    super();
    this.fbService = new FeedbackService();
  }

  /**
   * send
   * @param auth
   * @param request
   * @returns {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async send({ auth, request }) {
    const userId = +auth.user.id;
    const { content } = request.only(['content']);
    await this.fbService.send(userId, content);
    return this.buildSuccess({});
  }
}

module.exports = FeedbackController;
