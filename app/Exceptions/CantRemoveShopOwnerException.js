'use strict';

const { LogicalException } = require('@adonisjs/generic-exceptions');

const Config = use('Config');
const { cantRemoveShopOwner } = Config.get('error');
class CantRemoveShopOwnerException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    response.status(401).send({
      status: 401,
      data: null,
      message: cantRemoveShopOwner.message,
      error: cantRemoveShopOwner.error,
    });
  }
}

module.exports = CantRemoveShopOwnerException;
