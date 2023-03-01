'use strict'

let arr = ['HTML', 'JavaScript', 'CSS']

let sorted = copySorted(arr)

alert(sorted) // CSS, HTML, JavaScript
alert(arr) // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  return [...arr].sort((a, b) => a.localeCompare(b))
}
