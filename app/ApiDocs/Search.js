/**
 * @api {GET} http://localhost:3333/api/v1/search/shop Search shop
 * @apiName Search shop
 * @apiGroup Search
 *
 * @apiParam {Integer} page Page
 * @apiParam {Integer} category_id Shop Category Id
 * @apiParam {Boolean} type Type search <br><code>Followed</code>: true.<br><code>Not Follow</code>: false
 * @apiParam {String} text Text
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *       "shops": [
 *           {
 *               "id": 2,
 *               "owner_id": 2,
 *               "shop_cat_id": 2,
 *               "name": "69 Shop",
 *               "phone": "123456789",
 *               "address": "81 quang trung, hai chau, da nang",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "cover": null,
 *               "web": null,
 *               "description": "shop dau tien",
 *               "is_active": 0,
 *               "rate": 0,
 *               "total_rate": 0,
 *               "created_at": "2018-03-19 21:37:39",
 *               "updated_at": "2018-03-21 21:45:29",
 *               "follows": 3
 *           },
 *           {
 *               "id": 3,
 *               "owner_id": 11,
 *               "shop_cat_id": 2,
 *               "name": "69 Shop",
 *               "phone": "123456789",
 *               "address": "82 quang trung, hai chau, da nang",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "cover": null,
 *               "web": null,
 *               "description": "shop thu hai",
 *               "is_active": 0,
 *               "rate": 0,
 *               "total_rate": 0,
 *               "created_at": "2018-03-19 21:38:28",
 *               "updated_at": "2018-03-21 21:38:50",
 *               "follows": 2
 *           },
 *           {
 *               "id": 4,
 *               "owner_id": 11,
 *               "shop_cat_id": 3,
 *               "name": "69 Shop",
 *               "phone": "123456789",
 *               "address": "83 quang trung, hai chau, da nang",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "cover": null,
 *               "web": null,
 *               "description": "Shop thu ba",
 *               "is_active": 0,
 *               "rate": 0,
 *               "total_rate": 0,
 *               "created_at": "2018-03-19 21:40:52",
 *               "updated_at": "2018-03-21 21:45:32",
 *               "follows": 3
 *           },
 *           {
 *               "id": 5,
 *               "owner_id": 11,
 *               "shop_cat_id": 3,
 *               "name": "69 Shop",
 *               "phone": "123456789",
 *               "address": "81 quang trung, hai chau, da nang",
 *               "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *               "cover": null,
 *               "web": null,
 *               "description": "shop thu tu",
 *               "is_active": 0,
 *               "rate": 0,
 *               "total_rate": 0,
 *               "created_at": "2018-03-19 21:43:10",
 *               "updated_at": "2018-03-21 21:38:58",
 *               "follows": 2
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError ShopCategoryNotFound Shop category not found
 * @apiErrorExample Shop category not found
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "shop_category_not_found",
 *   "error": 4
 *}
 * @apiError Validation Something wrong
 * @apiErrorExample Something wrong
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "category_id_is_invalid",
 *   "error": 400
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/search/user Search user
 * @apiName Search user
 * @apiGroup Search
 *
 * @apiParam {Integer} page Page
 * @apiParam {Boolean} type Type search <br><code>Followed</code>: true.<br><code>Not Follow</code>: false
 * @apiParam {String} text Text
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *        "users": [
 *           {
 *               "id": 2,
 *               "user_id": "X209h95Jg8PzPU09L9cGGrJKKo12",
 *               "email": "linhchelseatoeic95@gmail.com",
 *               "username": "Linh Nguyen",
 *               "full_name": "Linh Nguyen",
 *               "address": null,
 *               "avatar": "https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg",
 *               "gender": 0,
 *               "birthday": "2017-12-31T17:00:00.000Z",
 *               "phone": null,
 *               "is_notify": 1,
 *               "created_at": "2018-03-19 20:00:09",
 *               "updated_at": "2018-03-28 23:17:16",
 *               "follows": 0
 *           },
 *           {
 *               "id": 9,
 *               "user_id": "CpWFlIyiKKSaSXeeMyvkmJgBrVz1",
 *               "email": "nhoxjio_a10_vn@yahoo.com",
 *               "username": "Linh Chelsea",
 *               "full_name": "Linh Chelsea",
 *               "address": null,
 *               "avatar": "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4",
 *               "gender": 0,
 *               "birthday": null,
 *               "phone": null,
 *               "is_notify": 1,
 *               "created_at": "2018-03-19 20:37:05",
 *               "updated_at": "2018-04-06 10:43:25",
 *               "follows": 1
 *           },
 *           {
 *               "id": 11,
 *               "user_id": "QHVbyf8aTMUvlMdTAS8gfJ8UcH72",
 *               "email": "f4cmpro@gmail.com",
 *               "username": "Tú Đoàn",
 *               "full_name": "Tú Đoàn",
 *               "address": null,
 *               "avatar": "https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg",
 *               "gender": 0,
 *               "birthday": null,
 *               "phone": null,
 *               "is_notify": 1,
 *               "created_at": "2018-03-19 20:45:18",
 *               "updated_at": "2018-04-06 10:17:58",
 *               "follows": 1
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError Validation Something wrong
 * @apiErrorExample Something wrong
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "type_is_invalid",
 *   "error": 400
 *}
 */
/**
 * @api {GET} http://localhost:3333/api/v1/search/post Search post
 * @apiName Search post
 * @apiGroup Search
 *
 * @apiParam {Integer} page Page
 * @apiParam {String} type Type search <br><code>User</code>: "user".<br><code>Shop</code>: "shop"
 * @apiParam {Boolean} follow Type search <br><code>Following</code>: true.<br><code>Not follow</code>: false
 * @apiParam {String} text Text
 * @apiParam {Integer} category_id Category Id
 * @apiParam {Integer} sub_category_id Sub Category Id
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
 *               "id": 25,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Dolorem aute reprehenderit facilis provident ea qui et harum est fugiat Nam vel libero atque quasi mollit et nostrud voluptate",
 *               "sale_percent": 23,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 359,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 4,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           },
 *           {
 *               "id": 22,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Laudantium est et architecto do qui pariatur Nobis proident ut eu nulla error aut irure",
 *               "sale_percent": 53,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 420,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 3,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           },
 *           {
 *               "id": 19,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Deleniti id ad harum culpa quia duis anim cupiditate possimus soluta voluptate et voluptatibus eu quo debitis irure nisi dolore",
 *               "sale_percent": 55,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 366,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 3,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           },
 *           {
 *               "id": 16,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Nostrum vitae sunt ea cupidatat sint et cillum similique doloribus aut",
 *               "sale_percent": 51,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 170,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 7,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           },
 *           {
 *               "id": 14,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Sunt laudantium ex sunt doloremque praesentium tenetur sit quibusdam incidunt maiores suscipit esse eum ad aperiam",
 *               "sale_percent": 100,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 402,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 5,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           },
 *           {
 *               "id": 4,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Ea dolorum pariatur Ipsum mollitia enim adipisicing cillum exercitationem facere reprehenderit expedita illo sit quos et velit",
 *               "sale_percent": 45,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 24,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 4,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           },
 *           {
 *               "id": 3,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Cupiditate est sed quas et",
 *               "sale_percent": 34,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 643,
 *               "comment": 0,
 *               "shop_id": 2,
 *               "user_id": 7,
 *               "shop": {
 *                   "id": 2,
 *                   "avatar": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3",
 *                   "name": "Shop ABC"
 *               }
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": {
 *        "posts": [
 *           {
 *               "id": 28,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Dignissimos nostrud sed dolore qui et sit ut",
 *               "sale_percent": 83,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 978,
 *               "comment": 0,
 *               "shop_id": null,
 *               "user_id": 1,
 *               "user": {
 *                   "id": 1,
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=197348940881692&height=100&width=100&ext=1523349386&hash=AeTA7DYqz-3xEb2f",
 *                   "username": "Linh Chelsea"
 *               }
 *           },
 *           {
 *               "id": 20,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Accusantium eaque itaque assumenda proident ut asperiores qui iste tempor quidem ut consectetur culpa tempor a veniam ut elit",
 *               "sale_percent": 67,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 272,
 *               "comment": 0,
 *               "shop_id": null,
 *               "user_id": 3,
 *               "user": {
 *                   "id": 3,
 *                   "avatar": "https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg",
 *                   "username": "linh nguyen"
 *               }
 *           },
 *           {
 *               "id": 18,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Ex possimus quibusdam ex totam provident",
 *               "sale_percent": 66,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 517,
 *               "comment": 0,
 *               "shop_id": null,
 *               "user_id": 1,
 *               "user": {
 *                   "id": 1,
 *                   "avatar": "https://lookaside.facebook.com/platform/profilepic/?asid=197348940881692&height=100&width=100&ext=1523349386&hash=AeTA7DYqz-3xEb2f",
 *                   "username": "Linh Chelsea"
 *               }
 *           },
 *           {
 *               "id": 17,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Corrupti aliquam reprehenderit voluptate earum enim anim accusantium exercitationem sit voluptatem cupiditate earum soluta est odit sunt culpa",
 *               "sale_percent": 27,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 406,
 *               "comment": 0,
 *               "shop_id": null,
 *               "user_id": 3,
 *               "user": {
 *                   "id": 3,
 *                   "avatar": "https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg",
 *                   "username": "linh nguyen"
 *               }
 *           },
 *           {
 *               "id": 7,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Ab eum ut possimus totam aut temporibus elit qui occaecat beatae voluptatum vel laboris vitae voluptatem aliqua Esse in",
 *               "sale_percent": 12,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 201,
 *               "comment": 0,
 *               "shop_id": null,
 *               "user_id": 3,
 *               "user": {
 *                   "id": 3,
 *                   "avatar": "https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg",
 *                   "username": "linh nguyen"
 *               }
 *           },
 *           {
 *               "id": 2,
 *               "cover": "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5",
 *               "title": "Mollit do est ea doloremque ad blanditiis velit esse consequuntur nemo et id",
 *               "sale_percent": 69,
 *               "start_date": "2018-03-21T17:00:00.000Z",
 *               "end_date": "2018-03-24T17:00:00.000Z",
 *               "like": 399,
 *               "comment": 0,
 *               "shop_id": null,
 *               "user_id": 3,
 *               "user": {
 *                   "id": 3,
 *                   "avatar": "https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg",
 *                   "username": "linh nguyen"
 *               }
 *           }
 *       ]
 *   },
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError Validation Something wrong
 * @apiErrorExample Something wrong
 *{
 *   "status": 401,
 *   "data": null,
 *   "message": "type_is_invalid",
 *   "error": 400
 *}
 */
