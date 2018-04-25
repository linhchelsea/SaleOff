'use strict';

const Controller = use('App/Controllers/Controller');
const SearchService = use('App/Services/SearchService');
class SearchController extends Controller {
  constructor() {
    super();
    this.searchService = new SearchService();
  }

  /**
   * searchShop
   * @param request
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async searchShop({ request, auth }) {
    const params = request.only(['page', 'text', 'category_id', 'type']);
    const page = params.page > 0 ? params.page : 1;
    const userId = +await auth.user.id;
    const shops = await this.searchService
      .searchShop(page, params.text, params.category_id, params.type, userId);
    const data = {
      shops,
    };
    return this.buildSuccess({ data });
  }

  /**
   * searchUser
   * @param auth
   * @param request
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async searchUser({ auth, request }) {
    const userId = +await auth.user.id;
    const params = request.only(['page', 'text', 'type']);
    const users = await this.searchService.searchUser(userId, params);
    const data = {
      users,
    };
    return this.buildSuccess({ data });
  }

  /**
   * searchPost
   * @param request
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async searchPost({ request, auth }) {
    const params = request.only(['page', 'text', 'category_id', 'sub_category_id', 'type', 'follow']);
    const page = +params.page > 1 ? params.page : 1;
    const userId = await +auth.user.id;
    const posts = await this.searchService
      .searchPost(page, params, userId);
    const data = {
      posts,
    };
    return this.buildSuccess({ data });
  }
}

module.exports = SearchController;
