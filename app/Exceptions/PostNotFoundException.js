'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const { postNotFound } = Config.get('error');
class PostNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: postNotFound.message,
      error: postNotFound.error,
    });
  }
}

module.exports = PostNotFoundException;
