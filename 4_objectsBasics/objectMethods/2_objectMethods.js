'use strict'

let calculator = {
  read() {
    this.firstOperand = Number(prompt('Первый операнд:', 0))
    this.secondOperand = Number(prompt('Второй операнд:', 0))
  },
  sum() {
    return this.firstOperand + this.secondOperand
  },
  mul() {
    return this.firstOperand * this.secondOperand
  },
}

calculator.read()
alert(calculator.sum())
alert(calculator.mul())
