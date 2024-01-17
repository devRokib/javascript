const myarr = [1,3,4,5,7]
// console.log(myarr)
// const hello = myarr.entries(5,2)
// console.log(myarr[2])
// console.log(typeof myarr)
const newArr = ['a','b','c','e']
// console.log(typeof newArr)
// console.log(newArr.push('Rakib'))
// console.log(newArr)
const arrayOne = [1,2,3,5,6,7,8]
const result = arrayOne.push(10) // push method pushed a new element in a array and return just pushed values/ 
// console.log(result)
const arrayTwo = [2,4,6,9,21,22,12]
const resultTwo = arrayTwo.join('') // join method covert to string and join the all emlment
const resultThree = arrayTwo.join()
// console.log(resultTwo)
// console.log( typeof resultThree)

const arrayThree = ['A','B','C','D','E']
const resultFour = arrayThree.pop() /// pop method remove the last item and return the remove item
// console.log(resultFour)

const arraySeven = ['A','B','C','D','E']
const result7 = arraySeven.shift() // remove the first item and remove item returns
// console.log(result7)
// console.log(arraySeven)
const arr8 = [1,2,3,4,5,6,8,9]
const res8 = arr8.unshift(10) // add item at first and return new length value
// console.log(res8)
// console.log(arr8)

const arr9 = [1,2,3,4,5,6,7]
const res9 = arr9.includes(7) // return a boolean value
// console.log(res9)


const arr10 = [1,2,3,4,5,6,7] 
const res10 = arr10.slice(2,-2)  // return a copy section of array and it's first element seclet where will be start and last element while will be end . if first first element are not define it will be start 0 index . it's also starts end of element .suppose -2.
// console.log(res10)
 const res11 = arr10.splice(1,4) // remove element in an array 
 const res12 = arr10.splice(1,7) // remove element in an array 
 console.log(res11)
 console.log(res12)
 console.log(arr10)
