'use strict';

const Route = use('Route');
const apiPrefix = '/api/v1';
Route.on('/').render('welcome');

Route.group(() => {
  Route.post('/login', 'AuthController.login')
    .validator('Auth/Login');

  /**
   * ============================================================
   *                             Accept                         *
   * ============================================================
   */
  Route.get('/accept/:id/shop', 'ShopController.accept')
    .as('accept.shop');
  Route.get('/accept/:id/post', 'PostController.accept')
    .as('accept.post');

  /**
   * ============================================================
   *                             Reject                         *
   * ============================================================
   */
  Route.get('/reject/:id/shop', 'ShopController.reject')
    .as('reject.post');
  Route.get('/reject/:id/post', 'PostController.reject')
    .as('reject.post');
})
  .prefix(apiPrefix);
Route.group(() => {
  /**
   * ============================================================
   *                           User routes                      *
   * ============================================================
   */
  Route.get('/user/profile', 'UserController.getProfile');
  Route.get('/user/:id', 'UserController.getUser');
  Route.get('/user/:id/follow', 'UserController.followUser')
    .as('user.follow').validator('User/Follow');
  Route.get('/user/:id/unfollow', 'UserController.unfollowUser')
    .as('user.unfollow').validator('User/Unfollow');
  Route.get('/user-followed', 'UserController.getListUserFollowed')
    .as('user.followed');
  Route.get('/user/follow/search', 'UserController.getListUserToFollow')
    .as('user.to-follow');


  Route.put('user/update-profile', 'UserController.postUpdateProfile')
    .validator('User/UpdateProfile');
  /**
   * ============================================================
   *                      Category routes                       *
   * ============================================================
   */
  Route.get('/category/get', 'CategoryController.get')
    .as('category.get');
  Route.get('/category/get-for-create', 'CategoryController.getForCreate')
    .as('category.get');


  Route.post('/category/create', 'CategoryController.create')
    .as('category.create').validator('Category/Create');

  /**
   * ============================================================
   *                       Product routes                       *
   * ============================================================
   */
  Route.get('product/get', 'ProductController.get')
    .as('product.get');
  Route.get('product/category/:categoryId', 'ProductController.getListProductByCategory')
    .as('product.getByCat');

  Route.post('/product/create/:categoryId', 'ProductController.create')
    .as('product.create').validator('Product/Create');

  /**
   * ============================================================
   *                    ShopCategory routes                     *
   * ============================================================
   */
  Route.get('/shop-cat/get', 'ShopCategoryController.get')
    .as('shop-cat.get');


  Route.post('/shop-cat/create', 'ShopCategoryController.create')
    .as('shop-cat.create').validator('ShopCategory/Create');

  /**
   * ============================================================
   *                          Shop routes                       *
   * ============================================================
   */
  Route.get('/shop/:shopId/info', 'ShopController.getShopInfo')
    .as('shop.info');
  Route.get('/shops', 'ShopController.getYourShops')
    .as('shop.yours');
  Route.get('/shops/working', 'ShopController.getYourShopsWorking')
    .as('shop.working');
  Route.get('/your-shop/:shopId/info', 'ShopController.getYourShopInfo')
    .as('shop.info').validator('Shop/Info');
  Route.get('/shop/:id/follow', 'ShopController.followShop')
    .as('shop.follow').validator('Shop/Follow');
  Route.get('/shop/:id/unfollow', 'ShopController.unfollowShop')
    .as('shop.unfollow').validator('Shop/Unfollow');
  Route.get('shop/follow/search', 'ShopController.getListFollowSearch')
    .as('shop.follow_search');
  Route.get('shop/followed', 'ShopController.getListShopFollowed')
    .as('shop.followed');


  Route.post('/shop/create', 'ShopController.create')
    .as('shop.create').validator('Shop/Create');
  Route.post('/shop/:id/rate', 'ShopController.rate')
    .as('shop.create').validator('Shop/Rate');

  Route.put('/shop/:id/update', 'ShopController.updateInfo')
    .as('shop.update').validator('Shop/Update');
  /**
   * ============================================================
   *                      Shop Employee routes                  *
   * ============================================================
   */
  Route.get('shop/:shopId/employee', 'ShopUserController.getEmployee')
    .as('employee.add').validator('Shop/Info');


  Route.post('shop/:shopId/add-employee', 'ShopUserController.addEmployee')
    .as('employee.add').validator('Shop/AddEmployee');
  Route.post('shop/:shopId/remove-employee', 'ShopUserController.removeEmployee')
    .as('employee.remove').validator('Shop/RemoveEmployee');
  Route.post('shop/:shopId/employee/find', 'ShopUserController.findUserToAdd')
    .as('employee.find').validator('Shop/FindUserToAdd');

  /**
   * ============================================================
   *                           Post routes                      *
   * ============================================================
   */
  Route.get('post/:id/get', 'PostController.getPost')
    .as('post.get');
  Route.get('post/:id/like', 'PostController.getLikePost')
    .as('post.like').validator('Post/Like');
  Route.get('post/:id/unlike', 'PostController.getUnlikePost')
    .as('post.unlike').validator('Post/Unlike');
  Route.get('post/:page/yours', 'PostController.getYourPosts')
    .as('post.your');
  Route.get('post/:page/shop/:shopId', 'PostController.getShopPosts')
    .as('post.shop');
  Route.get('post/:id/relative', 'PostController.getRelativePost')
    .as('post.relative');

  Route.post('post/create', 'PostController.create')
    .as('post.create').validator('Post/Create');

  Route.put('post/:id/edit-your-post', 'PostController.editYourPost')
    .as('post.edit').validator('Post/EditPost');
  Route.put('post/:id/edit/:shopId/shop', 'PostController.editShopPost')
    .as('post.editSP').validator('Post/EditPost');

  Route.delete('post/:id/delete-your-post', 'PostController.deleteYourPost')
    .as('post.delete-your-post');
  Route.delete('post/:id/delete/:shopId/shop', 'PostController.deleteShopPost')
    .as('post.deleteSP');
  /**
   * ============================================================
   *                        Comment routes                      *
   * ============================================================
   */
  Route.post('post/comment/:postId/add', 'CommentController.addComment')
    .as('comment.add').validator('Comment/Create');

  Route.put('post/comment/:id/edit', 'CommentController.editComment')
    .as('comment.edit').validator('Comment/Edit');

  Route.post('post/comments', 'CommentController.getComments')
    .as('comment.get').validator('Comment/Get');
  /**
   * ============================================================
   *                         Search routes                      *
   * ============================================================
   */
  Route.post('search/shop', 'SearchController.searchShop')
    .as('search.shop').validator('Search/Shop');
  Route.post('search/user', 'SearchController.searchUser')
    .as('search.user').validator('Search/User');
  Route.post('search/post', 'SearchController.searchPost')
    .as('search.post').validator('Search/Post');

  /**
   * ============================================================
   *                            NewsFeed                        *
   * ============================================================
   */
  Route.post('/newsfeed/following', 'HomeController.getNewsFeedFollowing')
    .as('newsfeed.follow').validator('NewsFeed/Get');
  Route.post('/newsfeed/not-following', 'HomeController.getNewsFeedNotFollowing')
    .as('newsfeed.not-follow').validator('NewsFeed/Get');

  /**
   * ============================================================
   *                            Feedback                        *
   * ============================================================
   */
  Route.post('feedback/send', 'FeedbackController.send')
    .as('feedback.send').validator('Feedback/Send');
})
  .prefix(apiPrefix)
  .middleware('auth:jwt');
