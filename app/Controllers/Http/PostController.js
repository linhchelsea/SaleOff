'use strict';

const Controller = use('App/Controllers/Controller');
const PostService = use('App/Services/PostService');
const PostNotFoundException = use('App/Exceptions/PostNotFoundException');
class PostController extends Controller {
  constructor() {
    super();
    this.postService = new PostService();
  }

  /**
   * create
   * @param request
   * @param auth
   * @param response
   * @return {Promise.<*>}
   */
  async create({ request, auth, response }) {
    const user = await auth.getUser();
    const postData = request.all();
    const post = await this.postService.create(user, postData);
    if (post) {
      return this.buildSuccess({});
    }
    return this.errorResponse(response, {});
  }

  /**
   * getPost
   * @param params
   * @param response
   * @return {Promise.<*>}
   */
  async getPost({ params }) {
    const { id } = params;
    const post = await this.postService.getPost(id);
    if (!post) {
      throw new PostNotFoundException();
    }
    const data = {
      post,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getLikePost
   * @param params
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getLikePost({ params, auth }) {
    const { id } = params;
    const user = await auth.getUser();
    await this.postService.likePost(user.id, id);
    return this.buildSuccess({});
  }

  /**
   * getUnlikePost
   * @param params
   * @param auth
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getUnlikePost({ params, auth }) {
    const { id } = params;
    const user = await auth.getUser();
    await this.postService.unlikePost(user.id, id);
    return this.buildSuccess({});
  }

  /**
   * getRelativePost
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getRelativePost({ params }) {
    const posts = await this.postService.getPostSmall(params.id);
    const data = {
      posts,
    };
    return this.buildSuccess({data});
  }

  /**
   * getYourPosts
   * @param auth
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getYourPosts({ auth, params }) {
    const user = await auth.getUser();
    const { page } = params;
    const posts = await this.postService.getYourPosts(user.id, page);
    const data = {
      posts,
    };
    return this.buildSuccess({ data });
  }

  /**
   * getShopPosts
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async getShopPosts({ params }) {
    const { page, shopId } = params;
    const posts = await this.postService.getShopPosts(page, shopId);
    const data = {
      posts,
    };
    return this.buildSuccess({ data });
  }

  /**
   *
   * @param auth
   * @param params
   * @param request
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async editYourPost({ auth, params, request }) {
    const user = await auth.getUser();
    const { id } = params;
    const data = request.all();
    await this.postService.editYourPost(user.id, id, data);
    return this.buildSuccess({});
  }

  /**
   * editShopPost
   * @param auth
   * @param params
   * @param request
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async editShopPost({ auth, params, request }) {
    const user = await auth.getUser();
    const { id, shopId } = params;
    const data = request.all();
    await this.postService.editShopPost(user.id, id, shopId, data);
    return this.buildSuccess({});
  }

  /**
   * deletePost
   * @param params
   * @param auth
   * @param response
   * @return {Promise.<*>}
   */
  async deleteYourPost({ params, auth, response }) {
    const { id } = params;
    const user = await auth.getUser();
    const isDelete = await this.postService.deleteYourPost(id, user.id);
    if (isDelete) {
      return this.buildSuccess({});
    }
    return this.errorResponse(response, {});
  }

  /**
   * deleteShopPost
   * @param params
   * @param auth
   * @param response
   * @return {Promise.<*>}
   */
  async deleteShopPost({ params, auth, response }) {
    const { id, shopId } = params;
    const user = await auth.getUser();
    const isDelete = await this.postService.deleteShopPost(id, shopId, user.id);
    if (isDelete) {
      return this.buildSuccess({});
    }
    return this.errorResponse(response, {});
  }

  /**
   * accept
   * @param params
   * @return {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async accept({ params }) {
    const { id } = params;
    await this.postService.accept(id);
    return this.buildSuccess({});
  }

  /**
   * reject
   * @param params
   * @returns {Promise.<{status: number, data: *, message: *, error: number}>}
   */
  async reject({ params }) {
    const { id } = params;
    await this.postService.reject(id);
    return this.buildSuccess({});
  }
}

module.exports = PostController;
