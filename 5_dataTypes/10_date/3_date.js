'use strict'

let date = new Date(2012, 0, 3) // 3 января 2012 года
alert(getLocalDay(date)) // вторник, нужно показать 2

function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay()
}
