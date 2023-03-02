'use strict'

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

function topSalary(salaries) {
  if (!Object.keys(salaries).length) return null

  let maxEmp = { name: '', salary: 0 }

  Object.entries(salaries).forEach(([key, value]) => {
    if (value > maxEmp.salary) {
      maxEmp.salary = value
      maxEmp.name = key
    }
  })

  return maxEmp.name
}
