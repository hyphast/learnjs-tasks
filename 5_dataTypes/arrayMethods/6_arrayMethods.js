'use strict'

function Calculator() {
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }

  this.calculate = function (str) {
    const exc = str.split(' ')

    const operator = exc[1]
    const firstOperand = Number(exc[0])
    const secondOperand = Number(exc[2])
    if (
      !(operator in this.operations) ||
      isNaN(firstOperand) ||
      isNaN(secondOperand)
    ) {
      return NaN
    }

    return this.operations[operator](firstOperand, secondOperand)
  }

  this.addMethod = function (name, func) {
    this.operations[name] = func
  }
}

let calc = new Calculator()

alert(calc.calculate('3 + 7')) // 10

let powerCalc = new Calculator()
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

let result = powerCalc.calculate('2 ** 3')
alert(result) // 8
