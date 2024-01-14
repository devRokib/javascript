// 'use strick'
// function myFunc(){
//     console.log('hello bangladesh')
// }
// myFunc()
// console.log(this)
const myObj = {
    name:'rakib',
    roll:105,
     myFunc() {
        // console.log(this)
    }
}
myObj.myFunc()

const newObj = {
    name:'abdur rahman',
    roll:110,
    outter(){
        console.log(this) 
        function inner(){
            // console.log(this)
        }
        inner()
    }
}
newObj.outter()