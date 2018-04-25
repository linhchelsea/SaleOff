'use strict';

const Model = use('Model');

class Feedback extends Model {
  user () {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Feedback;
