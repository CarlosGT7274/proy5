const bcrypt = require('bcrypt')

const authService = class{
  constructor(userService){
    console.log(userService)
    this.UserService = userService
  }

  async login(email, password){
    const user = await this.UserService.getByEmail(email)
    console.log(user)

    if(!user){
      throw new Error(`Este usuario no existe`)
    } else if(await bcrypt.compare(password, user.password) || !user){
      return user.toObject();
    } else {
        throw new Error('Inautorizado')  
    }
  }
}

module.exports = authService
