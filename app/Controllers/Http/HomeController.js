'use strict';

const Controller = use('App/Controllers/Controller');
const HomeService = use('App/Services/HomeService');
class HomeController extends Controller {
  constructor() {
    super();
    this.homeService = new HomeService();
  }

  /**
   * getNewsFeedFollowing
   * @param auth
   * @param request
   * @returns {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getNewsFeedFollowing({ auth, request }) {
    const userId = await +auth.user.id;
    const params = request.only(['category', 'last_id']);
    const posts = await this.homeService.getPostsFollowing(userId, params);
    const lastId = posts.length > 0 ? posts[posts.length - 1].id : null;
    const data = {
      posts,
      last_id: lastId,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getNewsFeedNotFollowing
   * @param auth
   * @param request
   * @returns {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getNewsFeedNotFollowing({ auth, request }) {
    const userId = await +auth.user.id;
    const params = request.only(['category', 'last_id']);
    const posts = await this.homeService.getPostsNotFollowing(userId, params);
    const lastId = posts.length > 0 ? posts[posts.length - 1].id : null;
    const data = {
      posts,
      last_id: lastId,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = HomeController;
