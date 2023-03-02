'use strict'

let user = {
  name: 'Василий Иванович',
  age: 35,
}

const userJSON = JSON.stringify(user)
const newUser = JSON.parse(userJSON)
