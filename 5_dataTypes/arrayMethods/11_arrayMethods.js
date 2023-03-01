'use strict'

function unique(arr) {
  return arr.filter((item, i, array) => array.indexOf(item) === i)
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
]

alert(unique(strings)) // кришна, харе, :-O
