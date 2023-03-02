'use strict'

function sumInput() {
  const arr = []

  do {
    const value = prompt('Введите число:', '')

    const num = Number(value)
    const isNum = Number.isInteger(num)
    if (isNum) {
      arr.push(num)
    }

    if (value === null || value === '' || !isNum) {
      return arr.reduce((acc, prev) => acc + prev)
    }
  } while (true)
}
