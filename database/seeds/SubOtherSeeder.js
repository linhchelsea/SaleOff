'use strict';

const Product = use('App/Models/Product');
class SubOtherSeeder {
  async run () {
    const total = await Product.query().where('category_id', 13).getCount();
    if (parseInt(total, 0) === 0) {
      try {
        await Product.findOrCreate({
          name: 'Khác',
          category_id: 13,
        });
      } catch (err) {
        throw err;
      }
    }
  }
}

module.exports = SubOtherSeeder;
