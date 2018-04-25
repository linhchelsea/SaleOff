'use strict';

const Api = use('App/Validators/Api');
class Create extends Api {
  get rules () {
    return {
      name: 'max:100',
      phone: 'max:20|alpha_numeric',
      avatar: 'url',
      cover: 'url',
      web: 'url',
    };
  }

  get messages () {
    return {
      'name.max': 'name_is_too_long',
      'phone.max': 'phone_is_invalid',
      'phone.alpha_numeric': 'phone_is_invalid',
      'avatar.url': 'avatar_is_not_url',
      'cover.url': 'cover_is_not_url',
      'web.url': 'web_is_not_url',
    };
  }
}

module.exports = Create;
