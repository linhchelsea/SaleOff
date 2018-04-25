'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const { notShopMember } = Config.get('error');
class NotEmployeeException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: notShopMember.message,
      error: notShopMember.error,
    });
  }
}

module.exports = NotEmployeeException;
