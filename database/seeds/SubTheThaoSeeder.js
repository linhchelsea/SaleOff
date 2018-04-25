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
class SubTheThaoSeeder {
  async run () {
    const names = [
      'Bóng đá',
      'Bóng rổ',
      'Cầu lông',
      'Tennis',
      'Bóng chuyền',
      'Golf',
      'Billiard',
      'Gymnastics',
      'Đồ phượt',
      'Bơi lội',
      'Câu cá',
      'Phụ kiện',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 5).getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Product.findOrCreate({
            name: names[i],
            category_id: 5,
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

module.exports = SubTheThaoSeeder;
