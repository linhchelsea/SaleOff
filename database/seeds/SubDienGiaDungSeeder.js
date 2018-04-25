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
class SubDienGiaDungSeeder {
  async run () {
    const names = [
      'Nồi điện',
      'Tủ lạnh',
      'Máy giặt',
      'Lò vi sóng',
      'Máy sấy',
      'Bếp điện',
      'Quạt',
      'Bàn ủi',
      'Máy hút bụi',
      'Điều hòa không khí',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 8).getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Product.findOrCreate({
            name: names[i],
            category_id: 8,
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

module.exports = SubDienGiaDungSeeder;
