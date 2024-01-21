const myObj = new Object('hello bangladesh')
myObj.name = 'rakib'
myObj.email ='rakib@gmail.com'
myObj.isLoggedIn = false
// console.log(myObj)
// console.log(myObj)
const myanotherObj = {}
myanotherObj.id = 20
myanotherObj.address = {
    dist:'narsingdi',
    house:{
        thana:'shibpur',
        number:{
            houseNo:548
        }
    }
}

// console.log(myanotherObj.id)
// console.log(myanotherObj.address)
// console.log(myanotherObj.address.dist)
// console.log(myanotherObj.address.house)
// console.log(myanotherObj.address.house.thana)
// console.log(myanotherObj.address.house.number)

const newObj = {a:'A',b:'B',c:"C"};
const newObj2 = {d:"D",e:"E",f:"F"}
const resObj = Object.assign({},newObj,newObj2)
// console.log(resObj)
// console.log(newObj, newObj2)
const newObj3 ={a:'A',b:'B',c:"C"};
const newObj4 = {d:"kds",e:"ksjdjf",f:"ui"}
const newObj5 = {d:"i",e:"j",f:"k"}
const resObj2 = {...newObj3,...newObj4,...newObj5}
console.log(resObj2)
console.log('hello world')