'use strict'


const Redis = use('Redis');
const User = use('App/Models/User');

class UserController {

  async index({request, response, view}) {
    const cachedUsers = await Redis.get('users');
    // console.log(cachedUsers, 11)

    // return view.render('welcome');
  }

}

module.exports = UserController
