'use strict'

let schedule = {}

alert(isEmpty(schedule)) // true

schedule['8:30'] = 'get up'

alert(isEmpty(schedule)) // false

function isEmpty(obj) {
  let propNum = 0

  for (let key in obj) {
    propNum++
  }

  return !(propNum > 0)
}
