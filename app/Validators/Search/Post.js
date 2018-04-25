'use strict';

const Api = use('App/Validators/Api');
const CategoryRepository = use('App/Repositories/CategoryRepository');
const ProductRepository = use('App/Repositories/ProductRepository');
const Config = use('Config');
const { categoryNotFound, productNotFound, productNotBelongCat } = Config.get('error');
class Post extends Api {
  constructor() {
    super();
    this.catRepo = new CategoryRepository();
    this.productRepo = new ProductRepository();
  }

  async authorize() {
    const data = this.ctx.request.only(['category_id', 'sub_category_id']);
    const category = await this.catRepo.getCategoryById(data.category_id);
    if (!category) {
      this.authorizeFails(categoryNotFound);
      return false;
    }
    if (data.category_id !== 1) {
      const product = await this.productRepo.getProductById(data.sub_category_id);
      if (!product) {
        this.authorizeFails(productNotFound);
        return false;
      }
      if (product.category_id !== data.category_id) {
        this.authorizeFails(productNotBelongCat);
        return false;
      }
    }
    return true;
  }

  get rules () {
    return {
      page: 'integer',
      text: 'required',
      category_id: 'required|integer',
      sub_category_id: 'integer',
      follow: 'required|boolean',
      type: 'required|in:user,shop',
    };
  }

  get messages () {
    return {
      'page.integer': 'page_is_invalid',
      'text.required': 'text_is_required',
      'caterogy_id.required': 'category_id_is_required',
      'caterogy_id.integer': 'category_id_is_invalid',
      'sub_category_id.integer': 'sub_category_id_is_invalid',
      'type.required': 'type_is_required',
      'type.in': 'type_is_invalid',
      'follow.required': 'follow_is_required',
      'follow.boolean': 'follow_is_invalid',
    };
  }
}

module.exports = Post;
