'use strict'

/**
 * Это происходит из-за потери точности
 * Чтобы это исправить можно умножить 6.35 на 10,
 * затем округлить число 63.5 и затем результат разделить на 10
 */
alert(Math.round(6.35 * 10) / 10)