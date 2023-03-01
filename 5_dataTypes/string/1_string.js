'use strict'

function ucFirst(str) {
  if (!str.length) return ''

  return str[0].toUpperCase() + str.slice(1)
}
