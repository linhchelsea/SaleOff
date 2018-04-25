'use strict';

const Api = use('App/Validators/Api');

class UpdateProfile extends Api {
  get rules () {
    return {
      username: 'required|max:255',
      gender: 'in:0,1,2',
      birthday: 'date',
      phone: 'alpha_numeric|max:20',
      avatar: 'url',
      cover: 'url',
    };
  }

  get messages() {
    return {
      'username.required': 'username_is_required',
      'username.max': 'username_is_too_long',
      'gender.in': 'gender_is_invalid',
      'birthday.date': 'birthday_is_not_date_time',
      'phone.alpha_number': 'phone_is_invalid',
      'phone.max': 'phone_too_long',
      'avatar.url': 'avatar_is_invalid',
      'cover.url': 'cover_is_invalid',
    };
  }
}

module.exports = UpdateProfile;

