'use strict'

let calculator = new Calculator()
calculator.read()

alert('Sum=' + calculator.sum())
alert('Mul=' + calculator.mul())

function Calculator() {
  this.read = function () {
    this.firstOperand = Number(prompt('Первый операнд:', 0))
    this.secondOperand = Number(prompt('Второй операнд:', 0))
  }
  this.sum = function () {
    return this.firstOperand + this.secondOperand
  }
  this.mul = function () {
    return this.firstOperand * this.secondOperand
  }
}
