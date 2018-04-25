'use strict';

class EditYourPost {
  get rules () {
    return {
      title: 'min:6|max:255',
      description: 'min:6',
      sale_percent: 'integer|range:0,100',
      cover: 'url',
      images: 'array',
      start_date: 'date',
      end_date: 'date',
      address: 'min:6',
      product_id: 'number',
    };
  }

  get messages () {
    return {
      'title.min': 'title_is_too_short',
      'title.max': 'title_is_too_long',
      'description.min': 'description_is_too_short',
      'sale_percent.integer': 'sale_percent_is_invalid',
      'sale_percent.range': 'sale_percent_is_invalid',
      'cover.url': 'cover_is_not_url',
      'images.array': 'images_is_not_array',
      'start_date.date': 'start_date_is_invalid',
      'end_date.date': 'end_date_is_invalid',
      'address.min': 'address_is_too_short',
      'product_id.number': 'product_id_is_invalid',
    };
  }
}

module.exports = EditYourPost;
