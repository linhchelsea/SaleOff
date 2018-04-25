/**
 * @api {POST} http://localhost:3333/api/v1/post/comment/:postId/add Add comment
 * @apiName Add comment
 * @apiGroup Comment
 *
 * @apiParam {String} comment Content
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "comment": {
 *           "user_id": 9,
 *           "post_id": "1",
 *           "type": "shop",
 *           "comment": "Bai viet hay qua",
 *           "created_at": "2018-03-25 17:06:51",
 *           "updated_at": "2018-03-25 17:06:51",
 *           "id": 4,
 *           "author": {
 *               "id": 2,
 *               "name": "69 Shop",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "type": "user"
 *           }
 *       }
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "comment_is_required",
 *   "error": 400
 *}
 * @apiError System Error Connection is bad
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */
/**
 * @api {PUT} http://localhost:3333/api/v1/post/comment/:id/edit Edit comment
 * @apiName Edit comment
 * @apiGroup Comment
 *
 * @apiParam {String} comment Content
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
 *   "message": "comment_is_required",
 *   "error": 400
 *}
 * @apiError NotFound Comment not found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "comment_not_found",
 *   "error": 25
 *}
 * @apiError NotYourComment Not your comment
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "not_your_comment",
 *   "error": 26
 *}
 */

/**
 * @api {POST} http://localhost:3333/api/v1/post/comments Get post's comments
 * @apiName Get post's comments
 * @apiGroup Comment
 *
 * @apiParam {Integer} id Post Id
 * @apiParam {Integer} last_id Last ID.</br><code>Default: 0</code>
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "comments": [
 *           {
 *               "id": 16,
 *               "post_id": 31,
 *               "user_id": 2,
 *               "type": "shop",
 *               "comment": "2343tgxdfgbxcbtdh",
 *               "created_at": "2018-04-20 14:21:00",
 *               "updated_at": "2018-04-20 14:21:00",
 *               "author": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "type": "shop"
 *               }
 *           },
 *           {
 *               "id": 14,
 *               "post_id": 31,
 *               "user_id": 2,
 *               "type": "shop",
 *               "comment": "2343tgxdfgbxcbtdh",
 *               "created_at": "2018-04-20 14:00:43",
 *               "updated_at": "2018-04-20 14:00:43",
 *               "author": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "type": "shop"
 *               }
 *           },
 *           {
 *               "id": 13,
 *               "post_id": 31,
 *               "user_id": 8,
 *               "type": "user",
 *               "comment": "2343tgxdfgbxcbtdh",
 *               "created_at": "2018-04-20 14:00:26",
 *               "updated_at": "2018-04-20 14:00:26",
 *               "author": {
 *                   "id": 8,
 *                   "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg",
 *                   "name": "Tú Đoàn",
 *                   "type": "user"
 *               }
 *           },
 *           {
 *               "id": 12,
 *               "post_id": 31,
 *               "user_id": 5,
 *               "type": "user",
 *               "comment": "2343tgxdfgbxcbtdh",
 *               "created_at": "2018-04-20 14:00:11",
 *               "updated_at": "2018-04-20 14:00:11",
 *               "author": {
 *                   "id": 5,
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM",
 *                   "name": "Linh Nguyen",
 *                   "type": "user"
 *               }
 *           },
 *           {
 *               "id": 11,
 *               "post_id": 31,
 *               "user_id": 5,
 *               "type": "user",
 *               "comment": "2343tgxdfgbxcbtdh",
 *               "created_at": "2018-04-20 14:00:09",
 *               "updated_at": "2018-04-20 14:00:09",
 *               "author": {
 *                   "id": 5,
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM",
 *                   "name": "Linh Nguyen",
 *                   "type": "user"
 *               }
 *           },
 *           {
 *               "id": 10,
 *               "post_id": 31,
 *               "user_id": 5,
 *               "type": "user",
 *               "comment": "234tdgg45yget",
 *               "created_at": "2018-04-20 14:00:04",
 *               "updated_at": "2018-04-20 14:00:04",
 *               "author": {
 *                   "id": 5,
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM",
 *                   "name": "Linh Nguyen",
 *                   "type": "user"
 *               }
 *           },
 *           {
 *               "id": 9,
 *               "post_id": 31,
 *               "user_id": 5,
 *               "type": "user",
 *               "comment": "4234ergqfg",
 *               "created_at": "2018-04-20 14:00:00",
 *               "updated_at": "2018-04-20 14:00:00",
 *               "author": {
 *                   "id": 5,
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM",
 *                   "name": "Linh Nguyen",
 *                   "type": "user"
 *               }
 *           },
 *           {
 *               "id": 8,
 *               "post_id": 31,
 *               "user_id": 2,
 *               "type": "shop",
 *               "comment": "ahihi",
 *               "created_at": "2018-04-20 13:58:03",
 *               "updated_at": "2018-04-20 13:58:03",
 *               "author": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "type": "shop"
 *               }
 *           },
 *           {
 *               "id": 7,
 *               "post_id": 31,
 *               "user_id": 8,
 *               "type": "user",
 *               "comment": "ahihi",
 *               "created_at": "2018-04-20 13:57:07",
 *               "updated_at": "2018-04-20 13:57:07",
 *               "author": {
 *                   "id": 8,
 *                   "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg",
 *                   "name": "Tú Đoàn",
 *                   "type": "user"
 *               }
 *           },
 *           {
 *               "id": 6,
 *               "post_id": 31,
 *               "user_id": 8,
 *               "type": "user",
 *               "comment": "ahihi",
 *               "created_at": "2018-04-20 13:54:45",
 *               "updated_at": "2018-04-20 13:54:45",
 *               "author": {
 *                   "id": 8,
 *                   "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg",
 *                   "name": "Tú Đoàn",
 *                   "type": "user"
 *               }
 *           }
 *       ],
 *       "last_id": 6
 *   },
 *   "message": "success",
 *   "error": 0
 *}
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "id_is_required",
 *   "error": 400
 *}
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "last_id_is_required",
 *   "error": 400
 *}
 * @apiError PostNotFound Post Not Found
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "post_not_found",
 *   "error": 22
 *}
 */
