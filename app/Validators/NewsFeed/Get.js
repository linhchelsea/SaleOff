'use strict';

const Api = use('App/Validators/Api');
class Get extends Api {
  get rules () {
    return {
      category: 'required|integer',
      last_id: 'integer',
    };
  }

  get messages () {
    return {
      'category.required': 'category_is_required',
      'category.integer': 'category_is_invalid',
      'last_id.integer': 'last_id_is_invalid',
    };
  }
}

module.exports = Get;
