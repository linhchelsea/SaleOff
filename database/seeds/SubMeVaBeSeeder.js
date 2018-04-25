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
class SubMeVaBeSeeder {
  async run () {
    const names = [
      'Sữa, thực phẩm cho bé',
      'Đồ dùng ăn uống cho bé',
      'Vệ sinh và sức khỏe',
      'Nôi, giường',
      'Đồ chơi',
      'Thời trang cho bé',
      'Thời trang cho mẹ',
      'Phụ kiện',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 6).getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Product.findOrCreate({
            name: names[i],
            category_id: 6,
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

module.exports = SubMeVaBeSeeder;
