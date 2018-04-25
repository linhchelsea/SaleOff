const Event = use('Event');

// user follows user
Event.on('notification:user_follow_user', 'Notification.userFollowUser');

// user likes your post
Event.on('notification:user_like_your_post', 'Notification.userLikeYourPost');

// user comments your post
Event.on('notification:user_comment_your_post', 'Notification.userCommentYourPost');

// accept your post
Event.on('notification:accept_your_post', 'Notification.acceptYourPost');

// reject your post
Event.on('notification:reject_your_post', 'Notification.rejectYourPost');

// accept your post
Event.on('notification:accept_your_shop', 'Notification.acceptYourShop');

// reject your post
Event.on('notification:reject_your_shop', 'Notification.rejectYourShop');

// user follow new post
Event.on('notification:user_follow_new_post', 'NotificationFollow.userFollowNewPost');

// shop follow new post
Event.on('notification:shop_follow_new_post', 'NotificationFollow.shopFollowNewPost');

// user become employee
Event.on('notification:user_become_employee', 'NotificationEmployee.userBecomeEmployee');

// user remove employee
Event.on('notification:user_remove_employee', 'NotificationEmployee.userRemoveEmployee');
