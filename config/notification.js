module.exports = {
  type: {
    user_follow_user: 1,
    user_follow_new_post: 2,
    shop_follow_new_post: 3,
    user_comment_your_post: 4,
    user_like_your_post: 5,
    user_become_employee: 6,
    user_remove_employee: 7,
    my_shop_accepted: 8,
    my_shop_rejected: 9,
    my_post_accepted: 10,
    my_post_rejected: 11,
  },
  sender: {
    user: 'user',
    shop: 'shop',
    system: 'system',
  },
  target: {
    user: 'user',
    post: 'post',
    shop: 'shop'
  },
};
