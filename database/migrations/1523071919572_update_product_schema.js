'use strict';

const Schema = use('Schema');

class UpdateProductSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table.dropColumn('description');
      table.dropColumn('image');
      table.dropColumn('is_active');
    });
  }

  down () {
    this.table('products', (table) => {
      table.text('description');
      table.string('image');
      table.string('is_active');
    });
  }
}

module.exports = UpdateProductSchema;
