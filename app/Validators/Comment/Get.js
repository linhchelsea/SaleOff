'use strict';

const Api = use('App/Validators/Api');
class Get extends Api {
  get rules () {
    return {
      id: 'required|integer',
      last_id: 'required|integer',
    };
  }

  get messages () {
    return {
      'id.required': 'id_is_required',
      'id.integer': 'id_is_invalid',
      'last_id.required': 'last_id_is_required',
      'last_id.integer': 'last_id_is_invalid',
    };
  }
}

module.exports = Get;
