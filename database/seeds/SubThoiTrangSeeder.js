'use strict';

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Product = use('App/Models/Product');
const Database = use('Database');
class SubThoiTrangSeeder {
  async run () {
    const names = [
      'Quần áo',
      'Giày dép',
      'Túi xách',
      'Thắt lưng',
      'Nước hoa',
      'Trang sức',
      'Mắt kính',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 10).getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Product.findOrCreate({
            name: names[i],
            category_id: 10,
          });
        }
        db.commit();
      } catch (err) {
        db.rollback();
        throw err;
      }
    }
  }
}

module.exports = SubThoiTrangSeeder;
