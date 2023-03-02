'use strict'

function checkSpam(str) {
  const suspect = str.toLowerCase()

  return suspect.includes('viagra') || suspect.includes('xxx')
}

checkSpam('buy ViAgRA now') // true
checkSpam('free xxxxx') // true
checkSpam('innocent rabbit') // false
