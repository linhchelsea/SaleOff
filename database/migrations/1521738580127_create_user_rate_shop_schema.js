'use strict';

const Schema = use('Schema');

class CreateUserRateShopSchema extends Schema {
  up () {
    this.create('user_rate_shop', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.bigInteger('shop_id').unsigned().references('id').inTable('shops');
      table.integer('rate');
      table.unique(['user_id', 'shop_id']);
      table.timestamps();
    });
  }

  down () {
    this.drop('user_rate_product');
  }
}

module.exports = CreateUserRateShopSchema;
