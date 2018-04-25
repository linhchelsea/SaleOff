/**
 * @api {POST} http://localhost:3333/api/v1/newsfeed/following Following Newsfeed
 * @apiName Following Newsfeed
 * @apiGroup Newsfeed
 *
 * @apiParam {Integer} last_id Post ID. </br><code>Default: 0</code>
 * @apiParam {Integer} category Category ID. </br><code>Default: 1</code>
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *        "posts": [
 *           {
 *               "id": 21,
 *               "title": "Rerum consectetur rem commodo in officia ea cumque et ea et inventore eveniet",
 *               "sale_percent": 71,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 249,
 *               "comment": 0,
 *               "created_at": "2018-04-11 15:25:44",
 *               "shop_id": 1,
 *               "user_id": 7,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 7,
 *                   "username": "LAI TRAN",
 *                   "avatar": "https://lh5.googleusercontent.com/-0xCD07m7XsQ/AAAAAAAAAAI/AAAAAAAAAFI/9vUkutq4I4g/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 1,
 *               "title": "Laboris accusamus voluptas eaque consequat Expedita amet sit quo temporibus aut est",
 *               "sale_percent": 39,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 448,
 *               "comment": 0,
 *               "created_at": "2018-04-11 15:25:31",
 *               "shop_id": 1,
 *               "user_id": 5,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 5,
 *                   "username": "Linh Nguyen",
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM"
 *               }
 *           },
 *           {
 *               "id": 26,
 *               "title": "Nostrum qui nulla accusamus quis modi nostrum nisi dolore alias odit sed quis animi nisi inventore",
 *               "sale_percent": 43,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 337,
 *               "comment": 0,
 *               "created_at": "2018-04-10 15:25:47",
 *               "shop_id": 1,
 *               "user_id": 6,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 6,
 *                   "username": "Vũ Trần",
 *                   "avatar": "https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 2,
 *               "title": "Mollit do est ea doloremque ad blanditiis velit esse consequuntur nemo et id",
 *               "sale_percent": 69,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 399,
 *               "comment": 0,
 *               "created_at": "2018-04-10 15:25:32",
 *               "shop_id": null,
 *               "user_id": 3,
 *               "shop": null,
 *               "user": {
 *                   "id": 3,
 *                   "username": "linh nguyen",
 *                   "avatar": "https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 27,
 *               "title": "Dolor nulla vel repellendus Consectetur ullamco saepe tenetur ea exercitation optio",
 *               "sale_percent": 44,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 598,
 *               "comment": 0,
 *               "created_at": "2018-04-09 15:25:48",
 *               "shop_id": 1,
 *               "user_id": 4,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 4,
 *                   "username": "Linh Nguyễn",
 *                   "avatar": "https://lh6.googleusercontent.com/-6vKlFbVspzs/AAAAAAAAAAI/AAAAAAAAAPA/VZXOFh4hrvI/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 30,
 *               "title": "Dolorem dignissimos culpa ex aut tempora",
 *               "sale_percent": 12,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 600,
 *               "comment": 0,
 *               "created_at": "2018-04-06 15:25:49",
 *               "shop_id": 1,
 *               "user_id": 1,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 1,
 *                   "username": "Linh Chelsea",
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=197348940881692&height=100&width=100&ext=1523349386&hash=AeTA7DYqz-3xEb2f"
 *               }
 *           }
 *       ],
 *       "last_id": 7,
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError LastIdInvalid Last Id is not a number
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "last_id_is_invalid",
 *   "error": 400
 *}
 */
/**
 * @api {POST} http://localhost:3333/api/v1/newsfeed/not-following Not Following Newsfeed
 * @apiName Not Following Newsfeed
 * @apiGroup Newsfeed
 *
 * @apiParam {Integer} last_id Post ID. </br><code>Default: 0</code>
 * @apiParam {Integer} category Category ID. </br><code>Default: 1</code>
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *        "posts": [
 *           {
 *               "id": 21,
 *               "title": "Rerum consectetur rem commodo in officia ea cumque et ea et inventore eveniet",
 *               "sale_percent": 71,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 249,
 *               "comment": 0,
 *               "created_at": "2018-04-11 15:25:44",
 *               "shop_id": 1,
 *               "user_id": 7,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 7,
 *                   "username": "LAI TRAN",
 *                   "avatar": "https://lh5.googleusercontent.com/-0xCD07m7XsQ/AAAAAAAAAAI/AAAAAAAAAFI/9vUkutq4I4g/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 1,
 *               "title": "Laboris accusamus voluptas eaque consequat Expedita amet sit quo temporibus aut est",
 *               "sale_percent": 39,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 448,
 *               "comment": 0,
 *               "created_at": "2018-04-11 15:25:31",
 *               "shop_id": 1,
 *               "user_id": 5,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 5,
 *                   "username": "Linh Nguyen",
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM"
 *               }
 *           },
 *           {
 *               "id": 26,
 *               "title": "Nostrum qui nulla accusamus quis modi nostrum nisi dolore alias odit sed quis animi nisi inventore",
 *               "sale_percent": 43,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 337,
 *               "comment": 0,
 *               "created_at": "2018-04-10 15:25:47",
 *               "shop_id": 1,
 *               "user_id": 6,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 6,
 *                   "username": "Vũ Trần",
 *                   "avatar": "https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 2,
 *               "title": "Mollit do est ea doloremque ad blanditiis velit esse consequuntur nemo et id",
 *               "sale_percent": 69,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 399,
 *               "comment": 0,
 *               "created_at": "2018-04-10 15:25:32",
 *               "shop_id": null,
 *               "user_id": 3,
 *               "shop": null,
 *               "user": {
 *                   "id": 3,
 *                   "username": "linh nguyen",
 *                   "avatar": "https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 27,
 *               "title": "Dolor nulla vel repellendus Consectetur ullamco saepe tenetur ea exercitation optio",
 *               "sale_percent": 44,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 598,
 *               "comment": 0,
 *               "created_at": "2018-04-09 15:25:48",
 *               "shop_id": 1,
 *               "user_id": 4,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 4,
 *                   "username": "Linh Nguyễn",
 *                   "avatar": "https://lh6.googleusercontent.com/-6vKlFbVspzs/AAAAAAAAAAI/AAAAAAAAAPA/VZXOFh4hrvI/s96-c/photo.jpg"
 *               }
 *           },
 *           {
 *               "id": 30,
 *               "title": "Dolorem dignissimos culpa ex aut tempora",
 *               "sale_percent": 12,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 600,
 *               "comment": 0,
 *               "created_at": "2018-04-06 15:25:49",
 *               "shop_id": 1,
 *               "user_id": 1,
 *               "shop": {
 *                   "id": 1,
 *                   "name": "Fm Style",
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3"
 *               },
 *               "user": {
 *                   "id": 1,
 *                   "username": "Linh Chelsea",
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=197348940881692&height=100&width=100&ext=1523349386&hash=AeTA7DYqz-3xEb2f"
 *               }
 *           }
 *       ],
 *       "last_id": 7,
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError LastIdInvalid Last Id is not a number
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "last_id_is_invalid",
 *   "error": 400
 *}
 */
