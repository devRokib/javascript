const numbers= 300;
// console.log(numbers) 
const newNum = new Number(200)
// console.log(numbers.toString().length)
// console.log(numbers.toFixed(2))
const balance = 23.53
// console.log(balance.toPrecision(3))
// console.log(numbers.toExponential())
// console.log(newNum)

const score = 1000000
// console.log(score.toLocaleString('en-IN'))
const score2 = 500;
// console.log(score2.toExponential(2))


//maths//========================

// console.log(Math.abs(-3))
// console.log(Math.round(5.3))
// console.log(Math.round(5.6))
// console.log(Math.ceil(7.2))
// console.log(Math.floor(7.9))
// console.log(Math.sqrt(7.9))
// const arrNum = [2,43,23,6,1, 32, 62, 72, 9]
// const maxResult = Math.max(...arrNum)
// console.log(maxResult)
// const arrNum2 = [2,4, 2, 73,1, 23, 54,83, 9, 32]
// const minResult = Math.min(...arrNum2)
// console.log(minResult)
console.log(Math.random())
console.log(Math.ceil(Math.random()*10)+1)
const min = 5;
const max = 40;
const randomResult =Math.floor( Math.random()*(max - min + 1)) + min 
console.log(randomResult)