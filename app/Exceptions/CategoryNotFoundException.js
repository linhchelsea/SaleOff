'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const { categoryNotFound } = Config.get('error');
class CategoryNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: categoryNotFound.message,
      error: categoryNotFound.error,
    });
  }
}

module.exports = CategoryNotFoundException;
