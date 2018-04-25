'use strict';

const Schema = use('Schema');

class CreateFeedbackSchema extends Schema {
  up () {
    this.create('feedbacks', (table) => {
      table.bigIncrements();
      table.bigInteger('user_id').unsigned().references('id').inTable('users');
      table.text('content');
      table.timestamps();
    });
  }

  down () {
    this.drop('feedbacks');
  }
}

module.exports = CreateFeedbackSchema;
