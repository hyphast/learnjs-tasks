'use strict'

function getSecondsToday() {
  const curDate = new Date()
  const startDate = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate()
  )

  return Math.round((curDate.getTime() - startDate.getTime()) / 1000)
}
