/**
 * @api {POST} http://localhost:3333/api/v1/post/create Create new post
 * @apiName Create new post
 * @apiGroup Post
 *
 * @apiParam {String} title Title
 * @apiParam {String} description Description
 * @apiParam {Integer} sale_percent Sale percent [0,100]
 * @apiParam {URL} cover Cover image
 * @apiParam {Array[url]} images list images(5 images)
 * @apiParam {Date} start_date Start date
 * @apiParam {Date} end_date End date
 * @apiParam {String} address Address
 * @apiParam {Integer} product_id Product ID
 * @apiParam {Integer} shop_id Shop ID
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "title_is_required",
 *   "error": 400
 *}
 * @apiError System Error Connection is bad
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 * @apiError Product not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "product_not_found",
 *   "error": 19
 *}
 * @apiError Not shop member
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_shop_member",
 *   "error": 21
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/get Get post detail
 * @apiName Get post detail
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "post": {
 *           "id": 1,
 *           "title": "Bai viet so 1",
 *           "description": "Mo ra so 1",
 *           "sale_percent": 33,
 *           "is_trust": 0,
 *           "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *           "start_date": "2018-03-21T17:00:00.000Z",
 *           "end_date": "2018-03-24T17:00:00.000Z",
 *           "address": "81 Quang Trung",
 *           "view": 0,
 *           "like": 0,
 *           "product_id": 1,
 *           "shop_id": 2,
 *           "user_id": 9,
 *           "admin_id": null,
 *           "is_checked": 0,
 *           "created_at": "2018-03-24 15:34:39",
 *           "updated_at": "2018-03-24 15:34:39",
 *           "images": [
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *           "user": {
 *               "id": 9,
 *               "username": "Linh Chelsea",
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4",
 *               "follows": 1,
 *               "posts": 2
 *           },
 *           "product": {
 *               "id": 1,
 *               "name": "Fila",
 *           },
 *           "shop": {
 *               "id": 2,
 *               "name": "69 Shop",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "rate": 4,
 *               "follows": 1,
 *               "posts": 13
 *           }
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError Post not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/like Like post
 * @apiName Like post
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError PostLiked Post liked
 * @apiErrorExample Post liked:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_liked",
 *   "error": 23
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/unlike Unlike post
 * @apiName Unlike post
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError PostUnliked Post unliked
 * @apiErrorExample Post unliked:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_unliked",
 *   "error": 24
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/post/:id/relative Get relative posts
 * @apiName Get relative posts
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *      "posts": [
 *           {
 *               "id": 2,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Bai viet so 1"
 *           },
 *           {
 *               "id": 1,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Bai viet so 1"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/post/:page/yours Get your posts
 * @apiName Get your posts
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *      "posts": [
 *           {
 *               "id": 2,
 *               "title": "Bai viet so 1",
 *               "description": "Mo ra so 1",
 *               "sale_percent": 33,
 *               "is_trust": 1,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "address": "81 Quang Trung",
 *               "view": 0,
 *               "like": 0,
 *               "comment": 0,
 *               "product_id": 1,
 *               "shop_id": null,
 *               "user_id": 2,
 *               "admin_id": null,
 *               "is_checked": 0,
 *               "created_at": "2018-03-24 15:51:04",
 *               "updated_at": "2018-03-24 15:51:04",
 *               "images": [
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *               ],
 *               "product": {
 *                   "id": 1,
 *                   "name": "Nước giải khát"
 *               }
 *           },
 *           {
 *               "id": 1,
 *               "title": "Bai viet so 1",
 *               "description": "Mo ra so 1",
 *               "sale_percent": 33,
 *               "is_trust": 1,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "address": "81 Quang Trung",
 *               "view": 17,
 *               "like": 0,
 *               "comment": 4,
 *               "product_id": 1,
 *               "shop_id": null,
 *               "user_id": 2,
 *               "admin_id": null,
 *               "is_checked": 0,
 *               "created_at": "2018-03-24 15:34:39",
 *               "updated_at": "2018-03-27 22:58:18",
 *               "images": [
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *               ],
 *               "product": {
 *                   "id": 1,
 *                   "name": "Nước giải khát"
 *               }
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */

/**
 * @api {GET} http://localhost:3333/api/v1/post/:page/shop/:shopId Get shop posts
 * @apiName Get shop posts
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *      "posts": [
 *           {
 *               "id": 2,
 *               "title": "Bai viet so 1",
 *               "description": "Mo ra so 1",
 *               "sale_percent": 33,
 *               "is_trust": 1,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "address": "81 Quang Trung",
 *               "view": 0,
 *               "like": 0,
 *               "comment": 0,
 *               "product_id": 1,
 *               "shop_id": 1,
 *               "user_id": 2,
 *               "admin_id": null,
 *               "is_checked": 0,
 *               "created_at": "2018-03-24 15:51:04",
 *               "updated_at": "2018-03-24 15:51:04",
 *               "images": [
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *               ],
 *               "user": {
 *                   "id": 2,
 *                   "user_id": "X209h95Jg8PzPU09L9cGGrJKKo12",
 *                   "email": "linhchelseatoeic95@gmail.com",
 *                   "username": "Linh Nguyen",
 *                   "full_name": "Linh Nguyen",
 *                   "address": null,
 *                   "avatar": "https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg",
 *                   "gender": 0,
 *                   "birthday": "2017-12-31T17:00:00.000Z",
 *                   "phone": null,
 *                   "is_notify": 1,
 *                   "created_at": "2018-03-19 20:00:09",
 *                   "updated_at": "2018-03-28 23:17:16",
 *                   "follows": 0
 *               }
 *           },
 *           {
 *               "id": 1,
 *               "title": "Bai viet so 1",
 *               "description": "Mo ra so 1",
 *               "sale_percent": 33,
 *               "is_trust": 1,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "address": "81 Quang Trung",
 *               "view": 17,
 *               "like": 0,
 *               "comment": 4,
 *               "product_id": 1,
 *               "shop_id": 1,
 *               "user_id": 2,
 *               "admin_id": null,
 *               "is_checked": 0,
 *               "created_at": "2018-03-24 15:34:39",
 *               "updated_at": "2018-03-27 22:58:18",
 *               "images": [
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *                   "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5"
 *               ],
 *               "user": {
 *                   "id": 2,
 *                   "user_id": "X209h95Jg8PzPU09L9cGGrJKKo12",
 *                   "email": "linhchelseatoeic95@gmail.com",
 *                   "username": "Linh Nguyen",
 *                   "full_name": "Linh Nguyen",
 *                   "address": null,
 *                   "avatar": "https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg",
 *                   "gender": 0,
 *                   "birthday": "2017-12-31T17:00:00.000Z",
 *                   "phone": null,
 *                   "is_notify": 1,
 *                   "created_at": "2018-03-19 20:00:09",
 *                   "updated_at": "2018-03-28 23:17:16",
 *                   "follows": 0
 *               }
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 */
/**
 * @api {PUT} http://localhost:3333/api/v1/post/:id/edit-your-post Edit Your Post
 * @apiName Edit Your Post
 * @apiGroup Post
 *
 * @apiParam {String} title Title [optional]
 * @apiParam {String} description Description [optional]
 * @apiParam {Integer} sale_percent Sale percent [0,100] [optional]
 * @apiParam {URL} cover Cover image [optional]
 * @apiParam {Array[url]} images list images(5 images) [optional]
 * @apiParam {Date} start_date Start date [optional]
 * @apiParam {Date} end_date End date [optional]
 * @apiParam {String} address Address [optional]
 * @apiParam {Integer} product_id Product ID [optional]
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError NotYourPost Not your post
 * @apiErrorExample Not your post
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_your_post",
 *   "error": 27
 *}
 */
/**
 * @api {PUT} http://localhost:3333/api/v1/post/:id/edit/:shopId/shop Edit shop Post
 * @apiName Edit shop Post
 * @apiGroup Post
 *
 * @apiParam {String} title Title [optional]
 * @apiParam {String} description Description [optional]
 * @apiParam {Integer} sale_percent Sale percent [0,100] [optional]
 * @apiParam {URL} cover Cover image [optional]
 * @apiParam {Array[url]} images list images(5 images) [optional]
 * @apiParam {Date} start_date Start date [optional]
 * @apiParam {Date} end_date End date [optional]
 * @apiParam {String} address Address [optional]
 * @apiParam {Integer} product_id Product ID [optional]
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError NotYourPost Not your post
 * @apiErrorExample Not your post
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_your_post",
 *   "error": 27
 *}
 * @apiError ShopNotFound Shop not found
 * @apiErrorExample Shop not found
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 * @apiError NotShopMember Not shop member
 * @apiErrorExample Not shop member
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_shop_member",
 *   "error": 21
 *}
 */
/**
 * @api {DELETE} http://localhost:3333/api/v1/post/:id/delete-your-post Delete your post
 * @apiName Delete your post
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError NotYourPost Not your post
 * @apiErrorExample Not your post
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_your_post",
 *   "error": 27
 *}
 */
/**
 * @api {DELETE} http://localhost:3333/api/v1/post/:id/delete/:shopId/shop Delete shop post
 * @apiName Delete shop post
 * @apiGroup Post
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 *}
 * @apiError PostNotFound Post not found
 * @apiErrorExample Post not found:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 * @apiError NotYourPost Not your post
 * @apiErrorExample Not your post
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_your_post",
 *   "error": 27
 *}
 * @apiError ShopNotFound Shop Not Found
 * @apiErrorExample Shop Not Found
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_not_found",
 *   "error": 5
 *}
 */
