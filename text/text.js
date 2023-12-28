// function f (a,b){
//     const sum =  a * b
//     return sum
// }
// const res = f(2,8)
// console.log(res)

// var r = function (a,b) {
//     const sum = a + b
//     return sum
// }
// const res2 = r(5,6)
// console.log(res2)

// const result = (function(a,b){
//     const sum = a + b;
//     return sum
// })
// (5,8)
// console.log(result)

// const fn2 = (function(a,b){
//     const sum = a + b;
//     return sum
// })(5,18)
// console.log(fn2)

// function createfunction (){
//     function fn3 (a, b){
//         const sum = a+ b
//         return sum
//     }
//     return fn3
// }
// const fn3 = createfunction()
// const final = fn3(20,20)
// console.log(final)

function createfunction2 (){
    return f2;
    
        function f2 ( a , b){
            const sum = a + b
            return sum
        }
    }
const f2 = createfunction2() ;
console.log(f2(16 ,13))
// console.log(resFinal)
// function createFunction() {
//     return f;
//     function f(a, b) {
//         const sum = a + b;
//         return sum;
//     }
// }
// const f = createFunction();
// console.log(f(3, 4)); // 7

function createFunction3 (){
    return f3
    function f3(a,b){
        const sum = a + b ;
        return sum
    }
}
const f3 = createFunction3()
const finalRes = f3(10,3)
console.log(finalRes)