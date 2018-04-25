'use strict';

const Api = use('App/Validators/Api');
class Send extends Api {
  get rules () {
    return {
      content: 'required',
    };
  }

  get messages () {
    return {
      'content.required': 'content_is_required',
    };
  }
}

module.exports = Send;
