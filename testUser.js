class User {
  constructor(email, userName) {
    this.email = email
    this.userName = userName
    this.logged = false
  }

  login() {
    console.log(`✅ - User ${this.userName} logged in`)
    this.logged = true
    return this // to be used in the chain method
  }

  logout() {
    if (this.logged) {
      console.log(`☑️ - User ${this.userName} logged out`)
      this.logged = false
    } else console.log(`❌ - User ${this.userName} is not logged!`)
    return this // to be used in the chain method
  }
}

let userOne = new User('lucianoSimoni@gmail.com', 'Luciano')
let userTwo = new User('robertJohnson@gmail.com', 'Robert');

// console.log(`Users:\nFirst user: ${userOne}\nSecond user: ${userTwo}`)

userOne.login().logout().logout().login().logout() // chain method
userTwo.login()
