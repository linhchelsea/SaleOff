'use strict';

const Api = use('App/Validators/Api');
class User extends Api {
  get rules () {
    return {
      page: 'integer',
      text: 'required',
      type: 'required|boolean',
    };
  }

  get messages () {
    return {
      'page.integer': 'page_is_invalid',
      'text.required': 'text_is_required',
      'type.required': 'type_is_required',
      'type.boolean': 'type_is_invalid',
    };
  }
}

module.exports = User;
