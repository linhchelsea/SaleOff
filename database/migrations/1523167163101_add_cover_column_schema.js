'use strict';

const Schema = use('Schema');

class AddCoverColumnSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('cover').default(null);
    });
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('cover');
    });
  }
}

module.exports = AddCoverColumnSchema;
