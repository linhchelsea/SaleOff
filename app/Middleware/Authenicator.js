'use strict';

const UserRepository = use('App/Repositories/UserRepository');
const Config = use('Config');
const { authen } = Config.get('error');
class Authenicator {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async handle({ auth, response }, next) {
    try {
      await auth.getUser();
      return await next();
    } catch (err) {
      console.log('err: ', err);
      return response.status(401).send({
        status: 401,
        data: null,
        message: authen.message,
        error: authen.error,
      });
    }
  }
}

module.exports = Authenicator;
