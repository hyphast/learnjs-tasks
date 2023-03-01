'use strict'

alert(extractCurrencyValue('$120') === 120) // true

function extractCurrencyValue(str) {
  return Number(str.slice(1))
}
