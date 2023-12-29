const message = 'JavaScript is fun'
const result = message.slice(0, 10) // slice the substring from index 0 to 10
console.log(result)
const message2 = "hello bangladesh.good morning"
const result2 = message2.slice(15, 25)
console.log(result2)

const str = "JavaScript is a very absurd programing language"
const result3 = str.slice(-9) // from 9th to last element till end
console.log(result3)

const numbers = [1,2,3,4,5,6,7,8,]
const sliceReverse = numbers.slice().reverse()
console.log(sliceReverse)

const array = [1,2,3,4,5,6,7,8,9,10]
const newArray = array.concat(array.slice(-3))
console.log(newArray)

const array2 = [1,2,3,4,5,6]
const newArray2 = array2.slice(0,3).concat([7,8,9])
console.log(newArray2)