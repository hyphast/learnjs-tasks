'use strict'

let user = {
  name: 'John',
  years: 30,
}

let { name, years: age, isAdmin = false } = user // Деструктурирующее присваивание

alert(name) // John
alert(age) // 30
alert(isAdmin) // false
