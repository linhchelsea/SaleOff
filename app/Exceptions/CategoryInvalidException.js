'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const { categoryInvalid } = Config.get('error');
class ShopCategoryNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: categoryInvalid.message,
      error: categoryInvalid.error,
    });
  }
}

module.exports = ShopCategoryNotFoundException;
