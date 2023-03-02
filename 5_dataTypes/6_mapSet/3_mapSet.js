'use strict'

let map = new Map()

map.set('name', 'John')

let keys = Array.from(map.keys()) // Теперь map.keys возвращает массив и мы можем обращаться к методу push

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more')
