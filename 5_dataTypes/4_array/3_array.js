'use strict'

let arr = ['a', 'b']

arr.push(function () {
  alert(this)
})

arr[2]() // Выведется массив, так как arr[2] можно рассматривать как обращение к методу 2 объекта arr
