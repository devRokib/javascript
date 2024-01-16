const numbers = [1,2,3,4,5,6,7,8,9,10]
const indexofResultOne = numbers.indexOf(8)
console.log(indexofResultOne)

const stringIndex = ['apple','orange','mango','junk-fruits']
const indexResultTwo = stringIndex.indexOf('mango')
console.log(indexResultTwo) /// find the element with indexOf method

const colors = ['red','green','blue','brown']
const indexResultThree = colors.indexOf('green',0) // if index number is not match it's return -1// it's rebember that if index number is smaller then current element position it's return current element index
console.log(indexResultThree)