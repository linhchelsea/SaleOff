/**
 * @api {GET} http://localhost:3333/api/v1/category/get get list
 * @apiName get list
 * @apiGroup Category
 *
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       ""categories": [
 *           {
 *               "id": 1,
 *               "name": "milk tea",
 *               "created_at": "2018-03-17 10:34:15",
 *               "updated_at": "2018-03-17 10:34:15",
 *               "products": []
 *           },
 *           {
 *               "id": 2,
 *               "name": "television",
 *               "created_at": "2018-03-17 11:08:59",
 *               "updated_at": "2018-03-17 11:08:59",
 *               "products": [
 *                   {
 *                       "id": 2,
 *                       "name": "Samsung",
 *                       "description": "Ti vi samsung ahihi",
 *                       "image": "https://www.facebook.com/profile.php?id=100008033802330",
 *                       "is_active": null,
 *                       "category_id": 2,
 *                       "created_at": "2018-03-17 13:17:31",
 *                       "updated_at": "2018-03-17 13:17:31"
 *                   }
 *               ]
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */
/**
 * @api {GET} http://localhost:3333/api/v1/category/get-for-create Get list for create shop
 * @apiName Get list for create shop
 * @apiGroup Category
 *
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       ""categories": [
 *           {
 *               "id": 2,
 *               "name": "television",
 *               "created_at": "2018-03-17 11:08:59",
 *               "updated_at": "2018-03-17 11:08:59",
 *           },
 *           {
 *               "id": 3,
 *               "name": "Thiết bị điện tử",
 *               "created_at": "2018-04-07 22:48:06",
 *               "updated_at": "2018-04-07 22:48:06"
 *           },
 *           {
 *               "id": 4,
 *               "name": "Xe cộ",
 *               "created_at": "2018-04-07 22:48:11",
 *               "updated_at": "2018-04-07 22:48:11"
 *           },
 *           {
 *               "id": 5,
 *               "name": "Thể thao",
 *               "created_at": "2018-04-07 22:48:54",
 *               "updated_at": "2018-04-07 22:48:54"
 *           },
 *           {
 *               "id": 6,
 *               "name": "Mẹ và bé",
 *               "created_at": "2018-04-07 22:49:04",
 *               "updated_at": "2018-04-07 22:49:04"
 *           },
 *           {
 *               "id": 7,
 *               "name": "Sách, tạp chí",
 *               "created_at": "2018-04-07 22:49:48",
 *               "updated_at": "2018-04-07 22:49:48"
 *           },
 *           {
 *               "id": 8,
 *               "name": "Điện gia dụng, điện lạnh",
 *               "created_at": "2018-04-07 22:49:53",
 *               "updated_at": "2018-04-07 22:49:53"
 *           },
 *           {
 *               "id": 9,
 *               "name": "Nhà cửa, đời sống",
 *               "created_at": "2018-04-07 22:50:03",
 *               "updated_at": "2018-04-07 22:50:03"
 *           },
 *           {
 *               "id": 10,
 *               "name": "Thời trang, phụ kiện",
 *               "created_at": "2018-04-07 22:50:42",
 *               "updated_at": "2018-04-07 22:50:42"
 *           },
 *           {
 *               "id": 11,
 *               "name": "Làm đẹp, sức khỏe",
 *               "created_at": "2018-04-08 11:50:08",
 *               "updated_at": "2018-04-08 11:50:08"
 *           },
 *           {
 *               "id": 12,
 *               "name": "Giải trí",
 *               "created_at": "2018-04-08 11:57:02",
 *               "updated_at": "2018-04-08 11:57:02"
 *           },
 *           {
 *               "id": 13,
 *               "name": "Khác",
 *               "created_at": "2018-04-08 11:57:16",
 *               "updated_at": "2018-04-08 11:57:16"
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 */


/**
 * @api {POST} http://localhost:3333/api/v1/category/create Create new category
 * @apiName Create new category
 * @apiGroup Category
 *
 * @apiParam {String} name Category name
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       category": {
 *           "name": "milk tea",
 *           "created_at": "2018-03-17 10:34:15",
 *           "updated_at": "2018-03-17 10:34:15",
 *           "id": 1
 *       },
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError ValidationError Somethings are wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "name_is_required",
 *   "error": 1
 *}
 * @apiError System Error Connection is bad
 * @apiErrorExample Error-Response:
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "system_error",
 *   "error": 2
 *}
 */
