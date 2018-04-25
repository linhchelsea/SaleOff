'use strict';

const ProductRepository = use('App/Repositories/ProductRepository');
const CategoryRepository = use('App/Repositories/CategoryRepository');
const CategoryNotFoundException = use('App/Exceptions/CategoryNotFoundException');
class ProductService {
  constructor() {
    this.productRepo = new ProductRepository();
    this.catRepo = new CategoryRepository();
  }

  /**
   * get all
   * @return {Promise.<Array>}
   */
  async getAll() {
    const products = await this.productRepo.get();
    return products;
  }
  /**
   * create
   * @param categoryId
   * @param params
   * @return {Promise.<*>}
   */
  async create(categoryId, params) {
    const product = await this.productRepo.create(categoryId, params);
    return product;
  }

  async getListProductByCategory(categoryId) {
    const category = await this.catRepo.getCategoryById(categoryId);
    if (!category) {
      throw new CategoryNotFoundException();
    }
    const products = await this.productRepo.getListProductByCategory(categoryId);
    return products;
  }
}

module.exports = ProductService;
