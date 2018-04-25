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
      'Chăm sóc da mặt',
      'Chăm sóc cơ thể',
      'Trang điểm',
      'Chăm sóc tóc, da đầu',
      'Thiết bị chăm sóc sức khỏe',
      'Thực phẩm chức năng',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 11).getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Product.findOrCreate({
            name: names[i],
            category_id: 11,
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
