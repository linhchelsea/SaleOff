'use strict';

const Api = use('App/Validators/Api');
const ShopCategoryRepository = use('App/Repositories/ShopCategoryRepository');
const Config = use('Config');
const { shopCatNotFound } = Config.get('error');
class Shop extends Api {
  constructor() {
    super();
    this.shopCatRepo = new ShopCategoryRepository();
  }

  async authorize() {
    const categoryId = this.ctx.request.only(['category_id']);
    const shopCat = await this.shopCatRepo.getById(categoryId.category_id);
    if (!shopCat) {
      this.authorizeFails(shopCatNotFound);
      return false;
    }
    return true;
  }

  get rules () {
    return {
      page: 'integer',
      text: 'required',
      category_id: 'required|integer',
      type: 'required|boolean',
    };
  }

  get messages () {
    return {
      'page.integer': 'page_is_invalid',
      'text.required': 'text_is_required',
      'type.required': 'type_is_required',
      'type.boolean': 'type_is_invalid',
      'caterogy_id.required': 'category_id_is_required',
      'caterogy_id.integer': 'category_id_is_invalid',
    };
  }
}

module.exports = Shop;
