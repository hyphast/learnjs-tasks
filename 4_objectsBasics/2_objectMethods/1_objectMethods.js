'use strict'

function makeUser() {
  return {
    name: 'John',
    ref: this,
  }
}

let user = makeUser()

alert(user.ref.name) // будет undefined. this относится к функции makeUser, поэтому user.ref = undefined
