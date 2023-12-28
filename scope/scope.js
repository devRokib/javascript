// var lang = 'bangla'
// function learn(topic){
//      lang = topic
//     console.log(`i learn ${topic}`)
// }
// learn('javaScript')
// console.log(`i know ${lang}`)

// const test = (true === false)
// console.log(test)


// var x = 15
// function myfunc(){
//    {
//      x = 10
//     console.log(x)
//    }
// }
// myfunc()
// console.log(x)

// function myfunc2(){
//     var y = 20
//     console.log(y)
// }
// myfunc2()
// console.log(y)

// var a = 10
// function check(){
//     console.log(a + b)  // NaN
// }
// check()
// var b = 20

// function scope (){
//    if(true){
//     var a = 'this is global scope'
//     let b = 'this is block scope'
//    }
//    console.log(a)
// //    console.log(b) // b is not define
// }
// scope()


// ============== Hoisting =================

// Variable Hoisting ================

// var HoistingCheck = undefined
// console.log(HoistingCheck)
// var HoistingCheck = 'hello there ,i am here'

// function hoisting ==================

// hostTest()
// function hostTest (){
//     console.log('hello bangladesh')
// }

// fExpression() // not hoisted
// var fExpression = function(){
//     console.log('hello muslim')
// }

// var hoistedIntro = 'hi there , i am string one'
// function hoistedFunc (){
//     console.log(hoistedIntro)
//     var hoistedTwo = 'hi there, i am string two'
//     console.log(hoistedTwo)
// }
// hoistedFunc()
// console.log(hoistedIntro)
// console.log(hoistedTwo)

// console.log(x)
// var x = 20 
// console.log(x)

// let x = 20 // can not access before initialization
// console.log(x)
//const x = 20 // can not access before initialization

// hoistedSuccess()
// function hoistedSuccess (){
//     console.log('hello bangladesh')
// }

// function add(a){
//     return function(b){
//         return a + b
//     }
// }
// const addTen = add(10)
// const addNine = addTen(15)
// console.log(addNine)

// function closurefunc(){
//     for(var i = 0; i <= 5; i++){
//         setTimeout(()=>
//         console.log(i) ,2000
//         )
//     }
// }
// closurefunc()

// function iife (){
//     for (var i = 1 ; i <= 5; i++){
//         (function(){
//             var val = i ;
//             setTimeout(()=> console.log(val) ,1000)
//         })()
//     }
// }
// iife()

// (function myfunc(){
//     for(var i = 1 ; i <= 5; i++){
//         (function(val){
//             setTimeout(()=>console.log(val),2000)
//         })(i)
//     }
// })()

// for(let i = 0; i <= 5; i++){
//     setTimeout(()=>console.log(i),1000)
// }

