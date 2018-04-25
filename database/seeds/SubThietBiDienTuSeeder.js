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
class SubThietBiDienTuSeeder {
  async run () {
    const names = [
      'Điện thoại',
      'Máy tính bảng',
      'Laptop',
      'Máy tính để bàn',
      'Máy ảnh, máy quay',
      'Tivi, loa, amply',
      'Màn hình, phụ kiện',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 3).getCount();
    if (total === 0) {
      if (parseInt(total, 0) === 0) {
        const db = await Database.beginTransaction();
        try {
          for (let i = 0; i < names.length; i += 1) {
            await Product.findOrCreate({
              name: names[i],
              category_id: 3,
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
}

module.exports = SubThietBiDienTuSeeder;
