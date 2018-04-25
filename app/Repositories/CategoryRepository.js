'use strict';

const Category = use('App/Models/Category');
const Database = use('Database');
const SystemException = use('App/Exceptions/SystemException');
class CategoryRepository {
  constructor () {
    this.cat = Category;
  }

  /**
   * get
   * @return {Promise.<Array>}
   */
  async get () {
    const categories = await this.cat
      .query()
      .fetch();
    return categories ? categories.toJSON() : [];
  }

  /**
   * getForCreate
   * @return {Promise.<Array>}
   */
  async getForCreate () {
    const categories = await this.cat
      .query()
      .whereNot('id', 1)
      .fetch();
    return categories ? categories.toJSON() : [];
  }
  /**
   * create
   * @param params
   * @return {Promise.<*>}
   */
  async create (params) {
    const db = await Database.beginTransaction();
    try {
      const category = new Category();
      category.name = params.name;
      await category.save();
      db.commit();
      return category;
    } catch (error) {
      db.rollback();
      throw new SystemException();
    }
  }

  /**
   * get category by id
   * @param id
   * @return {Promise.<Object>}
   */
  async getCategoryById (id) {
    const category = await this.cat.find(id);
    return category ? category.toJSON() : null;
  }
}

module.exports = CategoryRepository;
