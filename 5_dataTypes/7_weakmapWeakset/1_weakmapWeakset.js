'use strict'

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
]

/**
 * В данном случае нужно использовать структуру данных WeakSet,
 * так как для существует взаимнооднозначное соответствие между сообщением и информацией о том прочитано оно или нет.
 *
 * Также при удалении из массива messages сообщения, оно удалится и в WeakSet
 *
 */