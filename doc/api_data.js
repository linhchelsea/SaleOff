define({ "api": [
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_token",
            "description": "<p>IdToken from Firebase.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>Device token to send notification.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p><code>required</code> <br><code>IOS:</code>ios<br><code>Android:</code>android.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"token\": \"eyJhbGciOiJSUzI1NiIsImtpZCI6IjQzZTFiMGIyOTllNDIxZjU2ZWI1YTQ2NjhkMWNmMjNmNGFjNjk2NGMifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2FsZW9mZi01Yjk2MSIsIm5hbWUiOiJUw7ogxJBvw6BuIiwicGljdHVyZSI6Imh0dHBzOi8vbGg2Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tTS1tNll6ZWxXeTgvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQ0EvQUZvUGY2eU1veGsvczk2LWMvcGhvdG8uanBnIiwiYXVkIjoic2FsZW9mZi01Yjk2MSIsImF1dGhfdGltZSI6MTUyMDk1MzIxOSwidXNlcl9pZCI6IlFIVmJ5ZjhhVE1VdmxNZFRBUzhnZko4VWNINzIiLCJzdWIiOiJRSFZi\n      eWY4YVRNVXZsTWRUQVM4Z2ZKOFVjSDcyIiwiaWF0IjoxNTIwOTUzMjIxLCJleHAiOjE1MjA5NTY4MjEsImVtYWlsIjoiZjRjbXByb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDA3OTkzMjcxNzc2MDI1MjEwMyJdLCJlbWFpbCI6WyJmNGNtcHJvQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.R47dC36LU0DKOGoDE9F7rqoAMSXAIQoS1QxRtHscvmwwligzXZfNyytWzNkRJ1Fqgg5VD8r_F_Ml0ynBnHgFGCIXIUgNJ9UHDFlB-QfC-m-kRA4bTc188wjH8anYqClDM31ttombBd5NJfkAQ9qwFS8m_u5Iz7a4mUOg25z2sdnEUYDyULmjyDp2GSU0coiL3x0wndqTvG81Hyfg84S-AKuAHOoN-37ofEilgLAbmYedgzXdv7rh2tOSCX8CFX_d-i42ceswOeO-76nfR9ystZywl44_ddDV2uZZmjkQtQhhsY3nYKwVk7yBqfFZUHYw348rcR27-FwiFtCuYY9LhA\"\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"invalid_token\",\n  \"error\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/category/create",
    "title": "Create new category",
    "name": "Create_new_category",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      category\": {\n          \"name\": \"milk tea\",\n          \"created_at\": \"2018-03-17 10:34:15\",\n          \"updated_at\": \"2018-03-17 10:34:15\",\n          \"id\": 1\n      },\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error Connection is bad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"name_is_required\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"system_error\",\n  \"error\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Category.js",
    "groupTitle": "Category"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/category/get",
    "title": "get list",
    "name": "get_list",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"\"categories\": [\n          {\n              \"id\": 1,\n              \"name\": \"milk tea\",\n              \"created_at\": \"2018-03-17 10:34:15\",\n              \"updated_at\": \"2018-03-17 10:34:15\",\n              \"products\": []\n          },\n          {\n              \"id\": 2,\n              \"name\": \"television\",\n              \"created_at\": \"2018-03-17 11:08:59\",\n              \"updated_at\": \"2018-03-17 11:08:59\",\n              \"products\": [\n                  {\n                      \"id\": 2,\n                      \"name\": \"Samsung\",\n                      \"description\": \"Ti vi samsung ahihi\",\n                      \"image\": \"https://www.facebook.com/profile.php?id=100008033802330\",\n                      \"is_active\": null,\n                      \"category_id\": 2,\n                      \"created_at\": \"2018-03-17 13:17:31\",\n                      \"updated_at\": \"2018-03-17 13:17:31\"\n                  }\n              ]\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Category.js",
    "groupTitle": "Category"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/post/comment/:postId/add",
    "title": "Add comment",
    "name": "Add_comment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"comment\": {\n          \"user_id\": 9,\n          \"post_id\": \"1\",\n          \"type\": \"shop\",\n          \"comment\": \"Bai viet hay qua\",\n          \"created_at\": \"2018-03-25 17:06:51\",\n          \"updated_at\": \"2018-03-25 17:06:51\",\n          \"id\": 4,\n          \"author\": {\n              \"id\": 2,\n              \"name\": \"69 Shop\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\"\n          }\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error Connection is bad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"comment_is_required\",\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "PUT",
    "url": "http://localhost:3333/api/v1/post/comment/:id/edit",
    "title": "Edit comment",
    "name": "Edit_comment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Content</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Comment not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotYourComment",
            "description": "<p>Not your comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"comment_is_required\",\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"comment_not_found\",\n  \"error\": 25\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_your_comment\",\n  \"error\": 26\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/shop/:shopId/add-employee",
    "title": "Add Employee",
    "name": "Add_Employee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array[Integer]",
            "optional": false,
            "field": "ids",
            "description": "<p>list userIds</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Invalid list user id is not number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"ids_is_not_array\",\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"user_invalid\",\n  \"error\": 6\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/shop/:shopId/employee",
    "title": "Get list shop's employee",
    "name": "Get_list_shop_s_employee",
    "group": "Employee",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"users\": [\n          {\n              \"id\": 2,\n              \"user_id\": \"X209h95Jg8PzPU09L9cGGrJKKo12\",\n              \"email\": \"linhchelseatoeic95@gmail.com\",\n              \"username\": \"Linh Nguyen\",\n              \"full_name\": \"Linh Nguyen\",\n              \"address\": null,\n              \"avatar\": \"https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg\",\n              \"gender\": 0,\n              \"birthday\": null,\n              \"phone\": null,\n              \"is_notify\": 1,\n              \"created_at\": \"2018-03-19 20:00:09\",\n              \"updated_at\": \"2018-03-19 20:00:09\"\n          },\n          {\n              \"id\": 9,\n              \"user_id\": \"CpWFlIyiKKSaSXeeMyvkmJgBrVz1\",\n              \"email\": \"nhoxjio_a10_vn@yahoo.com\",\n              \"username\": \"Linh Chelsea\",\n              \"full_name\": \"Linh Chelsea\",\n              \"address\": null,\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4\",\n              \"gender\": 0,\n              \"birthday\": null,\n              \"phone\": null,\n              \"is_notify\": 1,\n              \"created_at\": \"2018-03-19 20:37:05\",\n              \"updated_at\": \"2018-03-19 20:37:05\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/shop/:shopId/employee/find",
    "title": "find users to become employee",
    "name": "find_users_to_become_employee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>hint text</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      users\": [\n          {\n              \"id\": 1,\n              \"username\": \"Tú Đoàn Lê\",\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20770143_1338432356254074_2133242196461463326_n.jpg?oh=ee72a54396ef80c460721a35a7209836&oe=5B081C49\"\n          },\n          {\n              \"id\": 11,\n              \"username\": \"Tú Đoàn\",\n              \"avatar\": \"https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ShopNotFound",
            "description": "<p>Can not find shop by id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"text_is_required\",\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Employee.js",
    "groupTitle": "Employee"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/post/create",
    "title": "Create new post",
    "name": "Create_new_post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sale_percent",
            "description": "<p>Sale percent [0,100]</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "cover",
            "description": "<p>Cover image</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[url]",
            "optional": false,
            "field": "images",
            "description": "<p>list images(5 images)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "shop_id",
            "description": "<p>Shop ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error Connection is bad</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Product",
            "description": "<p>not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Not",
            "description": "<p>shop member</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"title_is_required\",\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"product_not_found\",\n  \"error\": 19\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_shop_member\",\n  \"error\": 21\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "DELETE",
    "url": "http://localhost:3333/api/v1/post/:id/delete/:shopId/shop",
    "title": "Delete shop post",
    "name": "Delete_shop_post",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotYourPost",
            "description": "<p>Not your post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ShopNotFound",
            "description": "<p>Shop Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        },
        {
          "title": "Not your post",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_your_post\",\n  \"error\": 27\n}",
          "type": "json"
        },
        {
          "title": "Shop Not Found",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "DELETE",
    "url": "http://localhost:3333/api/v1/post/:id/delete-your-post",
    "title": "Delete your post",
    "name": "Delete_your_post",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotYourPost",
            "description": "<p>Not your post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        },
        {
          "title": "Not your post",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_your_post\",\n  \"error\": 27\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "PUT",
    "url": "http://localhost:3333/api/v1/post/:id/edit-your-post",
    "title": "Edit Your Post",
    "name": "Edit_Your_Post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sale_percent",
            "description": "<p>Sale percent [0,100] [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "cover",
            "description": "<p>Cover image [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[url]",
            "optional": false,
            "field": "images",
            "description": "<p>list images(5 images) [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start date [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End date [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID [optional]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotYourPost",
            "description": "<p>Not your post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        },
        {
          "title": "Not your post",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_your_post\",\n  \"error\": 27\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "PUT",
    "url": "http://localhost:3333/api/v1/post/:id/edit/:shopId/shop",
    "title": "Edit shop Post",
    "name": "Edit_shop_Post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sale_percent",
            "description": "<p>Sale percent [0,100] [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "cover",
            "description": "<p>Cover image [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array[url]",
            "optional": false,
            "field": "images",
            "description": "<p>list images(5 images) [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Start date [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>End date [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address [optional]</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID [optional]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotYourPost",
            "description": "<p>Not your post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ShopNotFound",
            "description": "<p>Shop not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotShopMember",
            "description": "<p>Not shop member</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        },
        {
          "title": "Not your post",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_your_post\",\n  \"error\": 27\n}",
          "type": "json"
        },
        {
          "title": "Shop not found",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        },
        {
          "title": "Not shop member",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"not_shop_member\",\n  \"error\": 21\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/post/:id/get",
    "title": "Get post detail",
    "name": "Get_post_detail",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"post\": {\n          \"id\": 1,\n          \"title\": \"Bai viet so 1\",\n          \"description\": \"Mo ra so 1\",\n          \"sale_percent\": 33,\n          \"is_trust\": 0,\n          \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n          \"start_date\": \"2018-03-21T17:00:00.000Z\",\n          \"end_date\": \"2018-03-24T17:00:00.000Z\",\n          \"address\": \"81 Quang Trung\",\n          \"view\": 0,\n          \"like\": 0,\n          \"product_id\": 1,\n          \"shop_id\": 2,\n          \"user_id\": 9,\n          \"admin_id\": null,\n          \"is_checked\": 0,\n          \"created_at\": \"2018-03-24 15:34:39\",\n          \"updated_at\": \"2018-03-24 15:34:39\",\n          \"images\": [\n              \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\"\n          ],\n          \"user\": {\n              \"id\": 9,\n              \"user_id\": \"CpWFlIyiKKSaSXeeMyvkmJgBrVz1\",\n              \"email\": \"nhoxjio_a10_vn@yahoo.com\",\n              \"username\": \"Linh Chelsea\",\n              \"full_name\": \"Linh Chelsea\",\n              \"address\": null,\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4\",\n              \"gender\": 0,\n              \"birthday\": null,\n              \"phone\": null,\n              \"is_notify\": 1,\n              \"created_at\": \"2018-03-19 20:37:05\",\n              \"updated_at\": \"2018-03-22 22:50:06\",\n              \"follows\": 0\n          },\n          \"product\": {\n              \"id\": 1,\n              \"name\": \"Fila\",\n              \"description\": \"description\",\n              \"image\": \"https://www.facebook.com/profile.php?id=100008033802330\",\n              \"is_active\": null,\n              \"category_id\": 1,\n              \"created_at\": \"2018-03-19 20:46:09\",\n              \"updated_at\": \"2018-03-19 20:46:09\",\n              \"category\": {\n                  \"id\": 1,\n                  \"name\": \"Clothes\",\n                  \"created_at\": \"2018-03-19 20:44:40\",\n                  \"updated_at\": \"2018-03-19 20:44:40\"\n              }\n          },\n          \"shop\": {\n              \"id\": 2,\n              \"name\": \"69 Shop\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\"\n          }\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Post",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/post/:id/relative",
    "title": "Get relative posts",
    "name": "Get_relative_posts",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n     \"posts\": [\n          {\n              \"id\": 2,\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"title\": \"Bai viet so 1\"\n          },\n          {\n              \"id\": 1,\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"title\": \"Bai viet so 1\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/post/:page/shop/:shopId",
    "title": "Get shop posts",
    "name": "Get_shop_posts",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n     \"posts\": [\n          {\n              \"id\": 2,\n              \"title\": \"Bai viet so 1\",\n              \"description\": \"Mo ra so 1\",\n              \"sale_percent\": 33,\n              \"is_trust\": 1,\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"start_date\": \"2018-03-21T17:00:00.000Z\",\n              \"end_date\": \"2018-03-24T17:00:00.000Z\",\n              \"address\": \"81 Quang Trung\",\n              \"view\": 0,\n              \"like\": 0,\n              \"comment\": 0,\n              \"product_id\": 1,\n              \"shop_id\": 1,\n              \"user_id\": 2,\n              \"admin_id\": null,\n              \"is_checked\": 0,\n              \"created_at\": \"2018-03-24 15:51:04\",\n              \"updated_at\": \"2018-03-24 15:51:04\",\n              \"images\": [\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\"\n              ],\n              \"user\": {\n                  \"id\": 2,\n                  \"user_id\": \"X209h95Jg8PzPU09L9cGGrJKKo12\",\n                  \"email\": \"linhchelseatoeic95@gmail.com\",\n                  \"username\": \"Linh Nguyen\",\n                  \"full_name\": \"Linh Nguyen\",\n                  \"address\": null,\n                  \"avatar\": \"https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg\",\n                  \"gender\": 0,\n                  \"birthday\": \"2017-12-31T17:00:00.000Z\",\n                  \"phone\": null,\n                  \"is_notify\": 1,\n                  \"created_at\": \"2018-03-19 20:00:09\",\n                  \"updated_at\": \"2018-03-28 23:17:16\",\n                  \"follows\": 0\n              }\n          },\n          {\n              \"id\": 1,\n              \"title\": \"Bai viet so 1\",\n              \"description\": \"Mo ra so 1\",\n              \"sale_percent\": 33,\n              \"is_trust\": 1,\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"start_date\": \"2018-03-21T17:00:00.000Z\",\n              \"end_date\": \"2018-03-24T17:00:00.000Z\",\n              \"address\": \"81 Quang Trung\",\n              \"view\": 17,\n              \"like\": 0,\n              \"comment\": 4,\n              \"product_id\": 1,\n              \"shop_id\": 1,\n              \"user_id\": 2,\n              \"admin_id\": null,\n              \"is_checked\": 0,\n              \"created_at\": \"2018-03-24 15:34:39\",\n              \"updated_at\": \"2018-03-27 22:58:18\",\n              \"images\": [\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\"\n              ],\n              \"user\": {\n                  \"id\": 2,\n                  \"user_id\": \"X209h95Jg8PzPU09L9cGGrJKKo12\",\n                  \"email\": \"linhchelseatoeic95@gmail.com\",\n                  \"username\": \"Linh Nguyen\",\n                  \"full_name\": \"Linh Nguyen\",\n                  \"address\": null,\n                  \"avatar\": \"https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg\",\n                  \"gender\": 0,\n                  \"birthday\": \"2017-12-31T17:00:00.000Z\",\n                  \"phone\": null,\n                  \"is_notify\": 1,\n                  \"created_at\": \"2018-03-19 20:00:09\",\n                  \"updated_at\": \"2018-03-28 23:17:16\",\n                  \"follows\": 0\n              }\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/post/:page/yours",
    "title": "Get your posts",
    "name": "Get_your_posts",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n     \"posts\": [\n          {\n              \"id\": 2,\n              \"title\": \"Bai viet so 1\",\n              \"description\": \"Mo ra so 1\",\n              \"sale_percent\": 33,\n              \"is_trust\": 1,\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"start_date\": \"2018-03-21T17:00:00.000Z\",\n              \"end_date\": \"2018-03-24T17:00:00.000Z\",\n              \"address\": \"81 Quang Trung\",\n              \"view\": 0,\n              \"like\": 0,\n              \"comment\": 0,\n              \"product_id\": 1,\n              \"shop_id\": null,\n              \"user_id\": 2,\n              \"admin_id\": null,\n              \"is_checked\": 0,\n              \"created_at\": \"2018-03-24 15:51:04\",\n              \"updated_at\": \"2018-03-24 15:51:04\",\n              \"images\": [\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\"\n              ]\n          },\n          {\n              \"id\": 1,\n              \"title\": \"Bai viet so 1\",\n              \"description\": \"Mo ra so 1\",\n              \"sale_percent\": 33,\n              \"is_trust\": 1,\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n              \"start_date\": \"2018-03-21T17:00:00.000Z\",\n              \"end_date\": \"2018-03-24T17:00:00.000Z\",\n              \"address\": \"81 Quang Trung\",\n              \"view\": 17,\n              \"like\": 0,\n              \"comment\": 4,\n              \"product_id\": 1,\n              \"shop_id\": null,\n              \"user_id\": 2,\n              \"admin_id\": null,\n              \"is_checked\": 0,\n              \"created_at\": \"2018-03-24 15:34:39\",\n              \"updated_at\": \"2018-03-27 22:58:18\",\n              \"images\": [\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\",\n                  \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29357003_2081966722058348_3420295775945490432_n.png?_nc_cat=0&_nc_eui2=v1%3AAeGk59hg2P2OCvQjDw9Gx64HxxLiAcrSUKlzdeih9qGVYALlFkO9BI2_Erw9PdN57hivyT_OLgUCFP38D54hT4orO-tfXSUxGTVdEV1yDvGlRA&oh=eed3ea72f9dd2e262321a4ef8caacf72&oe=5B711EC5\"\n              ]\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/post/:id/like",
    "title": "Like post",
    "name": "Like_post",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostLiked",
            "description": "<p>Post liked</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        },
        {
          "title": "Post liked:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_liked\",\n  \"error\": 23\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/post/:id/unlike",
    "title": "Unlike post",
    "name": "Unlike_post",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>Post not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostUnliked",
            "description": "<p>Post unliked</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_not_found\",\n  \"error\": 22\n}",
          "type": "json"
        },
        {
          "title": "Post unliked:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"post_unliked\",\n  \"error\": 24\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Post.js",
    "groupTitle": "Post"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/product/create/:categoryId",
    "title": "Create new product",
    "name": "Create_new_product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>link image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"product\": {\n          \"name\": \"Samsung\",\n          \"category_id\": \"2\",\n          \"created_at\": \"2018-03-17 13:17:31\",\n          \"updated_at\": \"2018-03-17 13:17:31\",\n          \"id\": 2\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error Connection is bad</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Category",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"name_is_required\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"system_error\",\n  \"error\": 2\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"category_not_found\",\n  \"error\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Product.js",
    "groupTitle": "Product"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/product/get",
    "title": "Get all products",
    "name": "Get_all_products",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"products\": [\n          {\n              \"id\": 2,\n              \"name\": \"Samsung\",\n              \"category_id\": 2,\n              \"created_at\": \"2018-03-17 13:17:31\",\n              \"updated_at\": \"2018-03-17 13:17:31\",\n              \"category\": {\n                  \"id\": 2,\n                  \"name\": \"television\",\n                  \"created_at\": \"2018-03-17 11:08:59\",\n                  \"updated_at\": \"2018-03-17 11:08:59\"\n              }\n          },\n          {\n              \"id\": 3,\n              \"name\": \"Gongcha\",\n              \"category_id\": 1,\n              \"created_at\": \"2018-03-17 13:54:41\",\n              \"updated_at\": \"2018-03-17 13:54:41\",\n              \"category\": {\n                  \"id\": 1,\n                  \"name\": \"milk tea\",\n                  \"created_at\": \"2018-03-17 10:34:15\",\n                  \"updated_at\": \"2018-03-17 10:34:15\"\n              }\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Product.js",
    "groupTitle": "Product"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/product/:categoryId/category",
    "title": "Get products by category",
    "name": "Get_products_by_category",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"products\": [\n          {\n              \"id\": 1,\n              \"name\": \"Fila\",\n              \"category_id\": 1,\n              \"created_at\": \"2018-03-19 20:46:09\",\n              \"updated_at\": \"2018-03-19 20:46:09\"\n          },\n          {\n              \"id\": 2,\n              \"name\": \"Nike\",\n              \"category_id\": 1,\n              \"created_at\": \"2018-03-19 20:46:12\",\n              \"updated_at\": \"2018-03-19 20:46:12\"\n          },\n          {\n              \"id\": 3,\n              \"name\": \"Adiddas\",\n              \"category_id\": 1,\n              \"created_at\": \"2018-03-19 20:46:16\",\n              \"updated_at\": \"2018-03-19 20:46:16\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Category",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"category_not_found\",\n  \"error\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Product.js",
    "groupTitle": "Product"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/search/shop",
    "title": "Search shop",
    "name": "Search_shop",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Page</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "category_id",
            "description": "<p>Shop Category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "type",
            "description": "<p>Type search <br><code>Followed</code>: true.<br><code>Not Follow</code>: false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shops\": [\n          {\n              \"id\": 2,\n              \"owner_id\": 2,\n              \"shop_cat_id\": 2,\n              \"name\": \"69 Shop\",\n              \"phone\": \"123456789\",\n              \"address\": \"81 quang trung, hai chau, da nang\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"cover\": null,\n              \"web\": null,\n              \"description\": \"shop dau tien\",\n              \"is_active\": 0,\n              \"rate\": 0,\n              \"total_rate\": 0,\n              \"created_at\": \"2018-03-19 21:37:39\",\n              \"updated_at\": \"2018-03-21 21:45:29\",\n              \"follows\": 3\n          },\n          {\n              \"id\": 3,\n              \"owner_id\": 11,\n              \"shop_cat_id\": 2,\n              \"name\": \"69 Shop\",\n              \"phone\": \"123456789\",\n              \"address\": \"82 quang trung, hai chau, da nang\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"cover\": null,\n              \"web\": null,\n              \"description\": \"shop thu hai\",\n              \"is_active\": 0,\n              \"rate\": 0,\n              \"total_rate\": 0,\n              \"created_at\": \"2018-03-19 21:38:28\",\n              \"updated_at\": \"2018-03-21 21:38:50\",\n              \"follows\": 2\n          },\n          {\n              \"id\": 4,\n              \"owner_id\": 11,\n              \"shop_cat_id\": 3,\n              \"name\": \"69 Shop\",\n              \"phone\": \"123456789\",\n              \"address\": \"83 quang trung, hai chau, da nang\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"cover\": null,\n              \"web\": null,\n              \"description\": \"Shop thu ba\",\n              \"is_active\": 0,\n              \"rate\": 0,\n              \"total_rate\": 0,\n              \"created_at\": \"2018-03-19 21:40:52\",\n              \"updated_at\": \"2018-03-21 21:45:32\",\n              \"follows\": 3\n          },\n          {\n              \"id\": 5,\n              \"owner_id\": 11,\n              \"shop_cat_id\": 3,\n              \"name\": \"69 Shop\",\n              \"phone\": \"123456789\",\n              \"address\": \"81 quang trung, hai chau, da nang\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"cover\": null,\n              \"web\": null,\n              \"description\": \"shop thu tu\",\n              \"is_active\": 0,\n              \"rate\": 0,\n              \"total_rate\": 0,\n              \"created_at\": \"2018-03-19 21:43:10\",\n              \"updated_at\": \"2018-03-21 21:38:58\",\n              \"follows\": 2\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ShopCategoryNotFound",
            "description": "<p>Shop category not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Validation",
            "description": "<p>Something wrong</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Shop category not found",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_category_not_found\",\n  \"error\": 4\n}",
          "type": "json"
        },
        {
          "title": "Something wrong",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"category_id_is_invalid\",\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Search.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/search/user",
    "title": "Search user",
    "name": "Search_user",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Page</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "type",
            "description": "<p>Type search <br><code>Followed</code>: true.<br><code>Not Follow</code>: false</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n       \"users\": [\n          {\n              \"id\": 2,\n              \"user_id\": \"X209h95Jg8PzPU09L9cGGrJKKo12\",\n              \"email\": \"linhchelseatoeic95@gmail.com\",\n              \"username\": \"Linh Nguyen\",\n              \"full_name\": \"Linh Nguyen\",\n              \"address\": null,\n              \"avatar\": \"https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg\",\n              \"gender\": 0,\n              \"birthday\": \"2017-12-31T17:00:00.000Z\",\n              \"phone\": null,\n              \"is_notify\": 1,\n              \"created_at\": \"2018-03-19 20:00:09\",\n              \"updated_at\": \"2018-03-28 23:17:16\",\n              \"follows\": 0\n          },\n          {\n              \"id\": 9,\n              \"user_id\": \"CpWFlIyiKKSaSXeeMyvkmJgBrVz1\",\n              \"email\": \"nhoxjio_a10_vn@yahoo.com\",\n              \"username\": \"Linh Chelsea\",\n              \"full_name\": \"Linh Chelsea\",\n              \"address\": null,\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4\",\n              \"gender\": 0,\n              \"birthday\": null,\n              \"phone\": null,\n              \"is_notify\": 1,\n              \"created_at\": \"2018-03-19 20:37:05\",\n              \"updated_at\": \"2018-04-06 10:43:25\",\n              \"follows\": 1\n          },\n          {\n              \"id\": 11,\n              \"user_id\": \"QHVbyf8aTMUvlMdTAS8gfJ8UcH72\",\n              \"email\": \"f4cmpro@gmail.com\",\n              \"username\": \"Tú Đoàn\",\n              \"full_name\": \"Tú Đoàn\",\n              \"address\": null,\n              \"avatar\": \"https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg\",\n              \"gender\": 0,\n              \"birthday\": null,\n              \"phone\": null,\n              \"is_notify\": 1,\n              \"created_at\": \"2018-03-19 20:45:18\",\n              \"updated_at\": \"2018-04-06 10:17:58\",\n              \"follows\": 1\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Validation",
            "description": "<p>Something wrong</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Something wrong",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"type_is_invalid\",\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Search.js",
    "groupTitle": "Search"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/shop/create",
    "title": "Create new shop",
    "name": "Create_new_shop",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "shop_cat_id",
            "description": "<p>Shop category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Shop name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Shop address</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "avatar",
            "description": "<p>Shop avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "cover",
            "description": "<p>Shop cover</p>"
          },
          {
            "group": "Parameter",
            "type": "URL",
            "optional": false,
            "field": "web",
            "description": "<p>Website</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shop\": {\n          \"id\": 6,\n          \"owner_id\": 1,\n          \"shop_cat_id\": 1,\n          \"name\": \"asdasd\",\n          \"address\": \"sdfsdfsdfsd\",\n          \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n          \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n          \"is_active\": 0,\n          \"rate\": 0,\n          \"created_at\": \"2018-03-18 11:39:29\",\n          \"updated_at\": \"2018-03-18 11:39:29\",\n          \"total_rate\": 0,\n          \"category\": \"Fashion\",\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error Connection is bad</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shop",
            "description": "<p>category not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"name_is_required\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"system_error\",\n  \"error\": 2\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_category_not_found\",\n  \"error\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop/:id/follow",
    "title": "Follow shop",
    "name": "Follow_shop",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shop",
            "description": "<p>not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Can",
            "description": "<p>not follow your shop</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "You",
            "description": "<p>follwed that shop</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"cant_follow_your_shop\",\n  \"error\": 8\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_followed\",\n  \"error\": 7\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop/followed",
    "title": "Get list shop followed",
    "name": "Get_list_shop_followed",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shops\": [\n          {\n              \"id\": 5,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"123 Shop\"\n          },\n          {\n              \"id\": 4,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"ABC Shop\"\n          },\n          {\n              \"id\": 2,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"AHIHI Shop\"\n          },\n          {\n              \"id\": 1,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"Nice Shop\"\n          },\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop/follow/search",
    "title": "Get list shop to follow",
    "name": "Get_list_shop_to_follow",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shops\": [\n          {\n              \"id\": 1,\n              \"owner_id\": 1,\n              \"shop_cat_id\": 1,\n              \"name\": \"Fm Style\",\n              \"phone\": \"0905246357\",\n              \"address\": \"Le Duan, Da Nang\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"web\": null,\n              \"description\": \"this is description\",\n              \"is_active\": 0,\n              \"rate\": 0,\n              \"total_rate\": 0,\n              \"created_at\": \"2018-03-19 20:48:01\",\n              \"updated_at\": \"2018-03-21 21:38:46\",\n              \"follows\": 11\n          },\n          {\n              \"id\": 2,\n              \"owner_id\": 2,\n              \"shop_cat_id\": 2,\n              \"name\": \"ABC shop\",\n              \"phone\": \"0905246357\",\n              \"address\": \"Le Duan, Da Nang\",\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"web\": null,\n              \"description\": \"this is description\",\n              \"is_active\": 0,\n              \"rate\": 0,\n              \"total_rate\": 0,\n              \"created_at\": \"2018-03-19 20:48:01\",\n              \"updated_at\": \"2018-03-21 21:38:46\",\n              \"follows\": 7\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop/:shopId/info",
    "title": "Get shop detail",
    "name": "Get_shop_detail",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shop\": {\n          \"id\": 6,\n          \"owner_id\": 1,\n          \"shop_cat_id\": 1,\n          \"name\": \"asdasd\",\n          \"address\": \"sdfsdfsdfsd\",\n          \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n          \"cover\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n          \"is_active\": 0,\n          \"rate\": 0,\n          \"created_at\": \"2018-03-18 11:39:29\",\n          \"updated_at\": \"2018-03-18 11:39:29\",\n          \"total_rate\": 0,\n          \"category\": \"Fashion\",\n          \"owner\": \"Tú Đoàn Lê\"\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shops/working",
    "title": "Get shops you're working at",
    "name": "Get_shops_you_re_working_at",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shops\": [\n          {\n              \"id\": 2,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"69 Shop\"\n          },\n          {\n              \"id\": 4,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"69 Shop\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shops",
    "title": "Get your shops",
    "name": "Get_your_shops",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"shops\": [\n          {\n              \"id\": 2,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"69 Shop\"\n          },\n          {\n              \"id\": 4,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"69 Shop\"\n          },\n          {\n              \"id\": 3,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"69 Shop\"\n          },\n          {\n              \"id\": 5,\n              \"avatar\": \"https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/29261911_500147840383143_4317207633091100672_n.jpg?_nc_cat=0&oh=597a9b97c67dd86eb607110f6c3fe657&oe=5B327FC3\",\n              \"name\": \"69 Shop\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/shop/:id/rate",
    "title": "Rate shop",
    "name": "Rate_shop",
    "group": "Shop",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "point",
            "description": "<p>Point range [1,5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "You",
            "description": "<p>rated that shop</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shop",
            "description": "<p>not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_rated\",\n  \"error\": 16\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"point_is_invalid\",\n  \"error\": 400\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop/:id/unfollow",
    "title": "Unfollow shop",
    "name": "Unfollow_shop",
    "group": "Shop",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Shop",
            "description": "<p>not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Can",
            "description": "<p>not unfollow your shop</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "You",
            "description": "<p>unfollowed that shop</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_not_found\",\n  \"error\": 5\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"cant_unfollow_your_shop\",\n  \"error\": 10\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"shop_unfollowed\",\n  \"error\": 9\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop"
  },
  {
    "type": "POST",
    "url": "http://localhost:3333/api/v1/shop-cat/create",
    "title": "Create new shop category",
    "name": "Create_new_shop_category",
    "group": "Shop_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      category\": {\n          \"name\": \"Fashion\",\n          \"created_at\": \"2018-03-17 14:17:35\",\n          \"updated_at\": \"2018-03-17 14:17:35\",\n          \"id\": 1\n      },\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Somethings are wrong</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error Connection is bad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"name_is_required\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"system_error\",\n  \"error\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/ShopCategory.js",
    "groupTitle": "Shop_Category"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop-cat/get",
    "title": "get list",
    "name": "get_list",
    "group": "Shop_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"\"categories\": [\n          {\n              \"id\": 1,\n              \"name\": \"Fashion\",\n              \"created_at\": \"2018-03-17 10:34:15\",\n              \"updated_at\": \"2018-03-17 10:34:15\",\n          },\n          {\n              \"id\": 2,\n              \"name\": \"Electronic\",\n              \"created_at\": \"2018-03-17 11:08:59\",\n              \"updated_at\": \"2018-03-17 11:08:59\",\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/ShopCategory.js",
    "groupTitle": "Shop_Category"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/shop-cat/get",
    "title": "get list",
    "name": "get_list",
    "group": "Shop_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"\"categories\": [\n          {\n              \"id\": 1,\n              \"name\": \"Fashion\",\n              \"created_at\": \"2018-03-17 10:34:15\",\n              \"updated_at\": \"2018-03-17 10:34:15\",\n          },\n          {\n              \"id\": 2,\n              \"name\": \"Electronic\",\n              \"created_at\": \"2018-03-17 11:08:59\",\n              \"updated_at\": \"2018-03-17 11:08:59\",\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/Shop.js",
    "groupTitle": "Shop_Category"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/user/:id/follow",
    "title": "Follow user",
    "name": "Follow_user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalid",
            "description": "<p>The token is has expired or incorrect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserFollowed",
            "description": "<p>User followed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CantFollowYourSelf",
            "description": "<p>Cant follow your self.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"invalid_token\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "User not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"user_not_found\",\n  \"error\": 11\n}",
          "type": "json"
        },
        {
          "title": "User followed:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"user_followed\",\n  \"error\": 13\n}",
          "type": "json"
        },
        {
          "title": "Cant follow your self.:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"cant_follow_yourself\",\n  \"error\": 12\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/user-followed",
    "title": "Get list user followed",
    "name": "Get_list_user_followed",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"users\": [\n          {\n              \"id\": 1,\n              \"username\": \"Tú Đoàn Lê\",\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20770143_1338432356254074_2133242196461463326_n.jpg?oh=ee72a54396ef80c460721a35a7209836&oe=5B081C49\"\n          },\n          {\n              \"id\": 9,\n              \"username\": \"Linh Chelsea\",\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/user/follow/search",
    "title": "Get list user to follow",
    "name": "Get_list_user_to_follow",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"users\": [\n          {\n              \"id\": 1,\n              \"username\": \"Tú Đoàn Lê\",\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/20770143_1338432356254074_2133242196461463326_n.jpg?oh=ee72a54396ef80c460721a35a7209836&oe=5B081C49\"\n          },\n          {\n              \"id\": 9,\n              \"username\": \"Linh Chelsea\",\n              \"avatar\": \"https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/28059334_1309561222477961_4123395601608504062_n.jpg?oh=48b02099356a93835f8ba37d80b9236b&oe=5B4180D4\"\n          }\n      ]\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/user/profile",
    "title": "Get profile",
    "name": "Get_profile",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"status\": 200,\n  \"data\": {\n      \"user\": {\n          \"id\": 1,\n          \"user_id\": \"QHVbyf8aTMUvlMdTAS8gfJ8UcH72\",\n          \"email\": \"f4cmpro@gmail.com\",\n          \"username\": \"Tú Đoàn\",\n          \"full_name\": \"Tú Đoàn\",\n          \"address\": null,\n          \"avatar\": \"https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg\",\n          \"gender\": 0,\n          \"birthday\": null,\n          \"phone\": null,\n          \"is_notify\": 1,\n          \"created_at\": \"2018-03-15 23:44:57\",\n          \"updated_at\": \"2018-03-15 23:44:57\"\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalid",
            "description": "<p>The token is has expired or incorrect.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"invalid_token\",\n  \"error\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "http://localhost:3333/api/v1/user/:id/unfollow",
    "title": "Unfollow user",
    "name": "Unfollow_user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"status\": 200,\n  \"data\": null,\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalid",
            "description": "<p>The token is has expired or incorrect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User not found .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserFollowed",
            "description": "<p>User followed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CantFollowYourSelf",
            "description": "<p>Cant follow your self.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"invalid_token\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "User not found:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"user_not_found\",\n  \"error\": 11\n}",
          "type": "json"
        },
        {
          "title": "User unfollowed:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"user_unfollowed\",\n  \"error\": 15\n}",
          "type": "json"
        },
        {
          "title": "Cant unfollow your self.:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,un\n  \"message\": \"cant_follow_yourself\",\n  \"error\": 14\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/User.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "http://localhost:3333/api/v1/user/update-profile",
    "title": "Update profile",
    "name": "Update_profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>avatar (URL)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender.unknow: 0, male: 1, female: 2</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>birthday</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "error",
            "defaultValue": "0",
            "description": "<p>error code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "defaultValue": "success",
            "description": "<p>response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>data response</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "status",
            "defaultValue": "200",
            "description": "<p>status response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n   \"status\": 200,\n   \"data\": {\n      \"user\": {\n          \"id\": 1,\n          \"user_id\": \"QHVbyf8aTMUvlMdTAS8gfJ8UcH72\",\n          \"email\": \"f4cmpro@gmail.com\",\n          \"username\": \"Tú Đoàn\",\n          \"full_name\": \"Tú Đoàn\",\n          \"address\": null,\n          \"avatar\": \"https://lh6.googleusercontent.com/-M-m6YzelWy8/AAAAAAAAAAI/AAAAAAAAACA/AFoPf6yMoxk/s96-c/photo.jpg\",\n          \"gender\": 0,\n          \"birthday\": null,\n          \"phone\": null,\n          \"is_notify\": 1,\n          \"created_at\": \"2018-03-15 23:44:57\",\n          \"updated_at\": \"2018-03-15 23:44:57\"\n      }\n  },\n  \"message\": \"success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TokenInvalid",
            "description": "<p>The token is has expired or incorrect.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 401,\n  \"data\": null,\n  \"message\": \"invalid_token\",\n  \"error\": 1\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n  \"status\": 400,\n  \"data\": null,\n  \"message\": \"phone_too_long\",\n  \"error\": 400\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/ApiDocs/User.js",
    "groupTitle": "User"
  }
] });
