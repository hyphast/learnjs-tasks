'use strict'

function getSecondsToTomorrow() {
  const curDate = new Date()
  const tomorrow = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    curDate.getDate() + 1
  )

  return Math.round((tomorrow.getTime() - curDate.getTime()) / 1000)
}
