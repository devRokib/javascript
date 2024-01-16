const num = [1,2,3,4,5]
const resultOne = num.includes(4)
console.log(resultOne)

const color = ['red', 'green','blue','yellow','purple']
const resultTwo = color.includes('pink')
console.log(resultTwo)

const numString = [NaN,5,'apple',3,'orange',undefined]
console.log(numString.includes(NaN))
console.log(numString.includes(5))
console.log(numString.includes('apple'))
console.log(numString.includes(3))
console.log(numString.includes('orange'))
console.log(numString.includes(undefined))
console.log(numString.includes(null))
console.log(numString.includes(3,3)) // find a element with index number .first element is value and second value is index number
console.log(numString.includes(undefined,5))

const nestedArray = [['one','two'],['three','four'],['six,seven'],['eight,nine']]
const nestedResult = nestedArray.includes(arr => 'one' === arr[0] &&  arr[1] ==='two') // includes nested string array are can not accessable
console.log(nestedResult)

const nestedarrTwo = [[1,2],[3,4],[5,6],[7,8]]
const nestedResultTwo = nestedarrTwo.includes([3,4])// nested array number also not  accessable in includes methods
console.log(nestedResultTwo)

const nestedArrays = [[1, 2], [3, 4], [5, 6]];

console.log(nestedArrays.includes([3, 4]));  
console.log(nestedArrays.includes([7, 8]));