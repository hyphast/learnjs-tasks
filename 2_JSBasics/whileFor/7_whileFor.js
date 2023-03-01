'use strict'

const N = 20
let i = 0

for (let i = 2; i < N; i++) {
  let j

  for (j = 2; j < i; j++) {
    if (i % j === 0) break
  }

  if (j === i) {
    alert(i)
  }
}
