'use strict'

let date = new Date(2012, 0, 3) // 3 января 2012 года
alert(getWeekDay(date)) // нужно вывести "ВТ"

function getWeekDay(date) {
  return ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()]
}
