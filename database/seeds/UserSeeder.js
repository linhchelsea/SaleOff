'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User');
const Database = use('Database');
const listUsers = [
  {
    user_id: 'tSn6AP1CKphkvvq3iINAdiM82Hv2',
    username: 'Linh Chelsea',
    full_name: 'Linh Chelsea',
    address: '81 quang trung',
    avatar: 'https://lookaside.facebook.com/platform/profilepic/?asid=197348940881692&height=100&width=100&ext=1523349386&hash=AeTA7DYqz-3xEb2f',
    gender: 1,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
  {
    user_id: 'CpWFlIyiKKSaSXeeMyvkmJgBrVz1',
    email: 'nhoxjio_a10_vn@yahoo.com',
    username: 'nguyen manh linh',
    full_name: 'nguyen manh linh',
    address: '81 quang trung',
    avatar: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
    gender: 1,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
  {
    user_id: 'xpP1aAkTBSNfARHN8Hs84dyGYQg2',
    email: 'linhabcdefg@gmail.com',
    username: 'linh nguyen',
    full_name: 'linh nguyen',
    address: '81 quang trung',
    avatar: 'https://lh4.googleusercontent.com/-tb6cfjgbjDQ/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfyZQ7WeNFGQDPKDVWmmbRVaGB99Qw/s96-c/photo.jpg',
    gender: 1,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
  {
    user_id: 'Lg9XFMEymjNw8jin3V0ZLvor4vz2',
    email: 'manhlinha10dn@gmail.com',
    username: 'Linh Nguyễn',
    full_name: 'Linh Nguyễn',
    address: '81 quang trung',
    avatar: 'https://lh6.googleusercontent.com/-6vKlFbVspzs/AAAAAAAAAAI/AAAAAAAAAPA/VZXOFh4hrvI/s96-c/photo.jpg',
    gender: 1,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
  {
    user_id: 'X209h95Jg8PzPU09L9cGGrJKKo12',
    email: 'linhchelseatoeic95@gmail.com',
    username: 'Linh Nguyen',
    full_name: 'Linh Nguyen',
    address: '81 quang trung',
    avatar: 'https://lookaside.facebook.com/platform/profilepic/?asid=238408120038392&height=100&width=100&ext=1523360775&hash=AeTrH5hLtfPnBjGM',
    gender: 1,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
  {
    user_id: 'zXQrLj5d2Nf282LI3rfvLtRG0wt2',
    email: 'tranvu2002h@gmail.com',
    username: 'Vũ Trần',
    full_name: 'Vũ Trần',
    address: '81 quang trung',
    avatar: 'https://lh5.googleusercontent.com/-Z1JD_dstN60/AAAAAAAAAAI/AAAAAAAAAAs/2ybLEfIooPE/s96-c/photo.jpg',
    gender: 1,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
  {
    user_id: 'f8lgbfITGKhJ0lGolxHuHwubIT62',
    email: 'honglaitran92@gmail.com',
    username: 'LAI TRAN',
    full_name: 'LAI TRAN',
    address: '81 quang trung',
    avatar: 'https://lh5.googleusercontent.com/-0xCD07m7XsQ/AAAAAAAAAAI/AAAAAAAAAFI/9vUkutq4I4g/s96-c/photo.jpg',
    gender: 0,
    birthday: '1995-10-21',
    phone: '0935679844',
    cover: 'https://images.unsplash.com/photo-1496072298559-ee7eacbd1b39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7187f42114410b39d3fb69541267b13&auto=format&fit=crop&w=1050&q=80',
  },
];
class UserSeeder {
  async run () {
    const total = await User.getCount();
    if (parseInt(total, 0) === 0) {
      const db = await Database.beginTransaction();
      try {
        for (let i = 0; i < listUsers.length; i += 1) {
          await User.findOrCreate(listUsers[i]);
        }
        db.commit();
      } catch (err) {
        db.rollback();
        throw err;
      }
    }
  }
}

module.exports = UserSeeder;
