/**
 * При присваивании значения переменной name в области видимости всего скрипта, переменная помечается как deprecated.
 *
 * Это происходит из-за того, что у глобального объекта windows есть свойство name
 *  (https://developer.mozilla.org/en-US/docs/Web/API/Window/name).
 *
 * Чтобы этого избежать можно использовать самовызывающуюся функцию (IIFE - https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
 *
 */
;(function () {
  'use strict'

  let admin
  let name

  name = 'Джон'
  admin = name

  alert(admin)
})()
