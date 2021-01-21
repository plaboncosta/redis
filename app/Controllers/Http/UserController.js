'use strict'


const Redis = use('Redis');
const User = use('App/Models/User');

class UserController {

  async index({request, response, view}) {
    const cachedUsers = await Redis.get('users');

    if (cachedUsers){
      return JSON.parse(cachedUsers);
    }

    const users = await User.all();
    await Redis.set('users', JSON.stringify(users));
    return users;

    // return view.render('welcome');
  }

}

module.exports = UserController
