'use strict'

// Здесь лучше использовать describe, внутри которого будут три теста it
it('Возводит x в степень n', function () {
  let x = 5

  let result = x
  assert.equal(pow(x, 1), result)

  result *= x
  assert.equal(pow(x, 2), result)

  result *= x
  assert.equal(pow(x, 3), result)
})

// Пример:
describe('Возводит x в степень n', function () {
  it('5 в 1-й степени', function () {
    assert.equal(pow(5, 1), 5)
  })

  it('5 во 2-й степени', function () {
    assert.equal(pow(5, 2), 25)
  })

  it('5 в 3-й степени', function () {
    assert.equal(pow(5, 3), 125)
  })
})
