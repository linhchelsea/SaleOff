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

const Category = use('App/Models/Category');
const Database = use('Database');
class CategorySeeder {
  async run () {
    const names = [
      'Tất cả',
      'Ẩm thực',
      'Thiết bị điện tử',
      'Xe cộ',
      'Thể thao',
      'Mẹ và bé',
      'Sách, tạp chí',
      'Điện gia dụng, điện lạnh',
      'Nhà cửa, đời sống',
      'Thời trang, phụ kiện',
      'Làm đẹp, sức khỏe',
      'Giải trí',
      'Khác',
    ];
    const total = await Category.getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < names.length; i += 1) {
          await Category.findOrCreate({
            name: names[i],
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

module.exports = CategorySeeder;
