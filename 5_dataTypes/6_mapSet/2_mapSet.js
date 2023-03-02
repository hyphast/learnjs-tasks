'use strict'

function aclean(arr) {
  let used = new Set()
  let result = []

  for (let item of arr) {
    const word = item
      .toLowerCase()
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')

    if (!used.has(word)) {
      result.push(item)
    }

    used.add(word)
  }

  return result
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

alert(aclean(arr)) // "nap,teachers,ear" или "PAN,cheaters,era"
