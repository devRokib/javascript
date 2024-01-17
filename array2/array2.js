const array = [2,3,5, 5,8, 8]
const arr2 = [1,8,39,0,2,0]
const res = array.push(arr2)
// console.log(res)
// console.log(array)
const arr3 = ['A','B','C','D','E']
const arr4 = ['F','G','H','I',"J"]
const arr5 = ['K','L','H','I',"J"]
const spreedRes = [...arr3,...arr4,...arr5] //spreed operator
// console.log(spreedRes)
const res2 = arr3.concat(arr4) // combines two or more array and return a new array without modifing any existing arrays
// console.log(res2)
const newarr = [1,3,4,[3,83,5],[3,8,0,[9,3,0]]]
const newRes = newarr.flat(Infinity)  // return a new array with all sub array elements .
// console.log(newRes)
// console.log(newarr)

const isArr = [2,3,5,6,8]
const res3 = Array.isArray(isArr)
// console.log(res3)

const newIsArr = 'Hello Bangladesh'
const resNewIsArr = Array.isArray(newIsArr) // return a boolean value .
const resNewIsArr2 = Array.from(newIsArr) // convert an array
// console.log(resNewIsArr) 
// console.log(resNewIsArr2)
const arr6 = 'hello world'
const res6 = Array.from({arr6}) // return a empty array
// console.log(res6)

const arr7 = 'Alhamdulliah'
const res7 = Array.of(arr7); // return a new array . 
const res8 = Array.from(arr7); // return a new array.because string element  work at of or from method but number didn't work 
console.log(res8)
// console.log(res7);

const num1  = 200; 
const num2  = 400; 
const num3  = 600; 
const numArr = Array.of(num1,num2,num3) // return  a new array
const numArr2 = Array.from (num1,num2,num3) // thorow an type  error. because from is anonymous function . 
// console.log(numArr)
// console.log(numArr2)