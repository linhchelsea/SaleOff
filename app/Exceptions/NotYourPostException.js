'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const { notYourPost } = Config.get('error');
class NotYourPostException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: notYourPost.message,
      error: notYourPost.error,
    });
  }
}

module.exports = NotYourPostException;
