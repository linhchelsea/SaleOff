'use strict';

const Model = use('Model');

class Comment extends Model {
  author () {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Comment;
