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
      'Sách giáo khoa',
      'Tiểu thuyết',
      'Truyện tranh',
      'Tạp chí',
      'Sách ngoại ngữ',
      'Sách tham khảo',
      'Sách kỹ năng sống',
      'Sách nuôi dạy con',
      'Sách kinh tế',
      'eBook',
      'Khác',
    ];
    const total = await Product.query().where('category_id', 7).getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Product.findOrCreate({
            name: names[i],
            category_id: 7,
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
