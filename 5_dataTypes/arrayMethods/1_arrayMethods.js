'use strict'

camelize('background-color') == 'backgroundColor'
camelize('list-style-image') == 'listStyleImage'
camelize('-webkit-transition') == 'WebkitTransition'

function camelize(str) {
  let arr = str.split('-')

  arr = arr.map((item, i) => {
    if (i === 0) return item

    return item[0].toUpperCase() + item.slice(1)
  })

  return arr.join('')
}
