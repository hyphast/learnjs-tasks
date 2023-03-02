'use strict'

alert(formatDate(new Date(new Date() - 1))) // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))) // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))) // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)))

function formatDate(date) {
  const diff = new Date() - date

  if (diff < 1000) {
    return 'прямо сейчас'
  }

  const secs = Math.floor(diff / 1000)
  if (secs < 60) {
    return secs + ' сек. назад'
  }

  const mins = Math.floor(diff / 60000)
  if (mins < 60) {
    return mins + ' мин. назад'
  }

  const d = format(date.getDate())
  const month = format(date.getMonth())
  const year = date.getFullYear()
  const hours = format(date.getHours())
  const minutes = format(date.getMinutes())
  return `${d}.${month}.${year}, ${hours}:${minutes}`
}

function format(str) {
  return ('0' + str).slice(-2)
}
