const mySym = Symbol()
const mySym1 = Symbol()
// console.log(typeof mySym)
// console.log(mySym === mySym1)
const myObj =  {
    name:'rakib',
    'full name':'rakib ahmed',
    [mySym]:'hello bangladesh',
     [mySym1]:'hello bangladesh',
    age:22,
    email:'rakibahmedra971162@gmail.com',
    location:'Narsigndi',
    isLoggedIn:false,
    lastLoggedIn:['monday','sunday']
}
myObj.email = 'rakib@google.com'
// Object.freeze(myObj)
myObj.email = 'rakib@microsoft.com'
myObj.greeting = function(){
    console.log('hello user')
}
myObj.greetingTwo = function(){
    return (`hello user ${this['full name']}`)
}
myObj.greeting()
console.log(myObj.greetingTwo())
// console.log(myObj)
// console.log(myObj[mySym] === myObj[mySym1])
// console.log(myObj[mySym])
// console.log(typeof myObj[mySym])
// console.log(myObj['email'])
// console.log(myObj.lastLoggedIn[1])
// console.log(myObj.isLoggedIn)
// console.log(myObj["full name"])
// console.log(myObj["full name"])

// var ab ="var variable  print";
// function abc(){
//   return  ('print function')
// }
// console.log(abc())