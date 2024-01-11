// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Ayush';
//     var age = 21;
//   }
  
//   sayHi();
//   function getAge() {
    
//     age = 21;
//     console.log(age);
//   }
  
//   getAge();

// console.log(Boolean(!'Ayush'))
// !'Ayush';

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function sum(a ,b){
//     return a + b
// }
// const add = sum(1,"2")
// console.log(add)
// for(let i = 1; i<5; i++){
//     if(i===3)continue;
//     console.log(i)
// }

// function sayHi(){
//     return (()=>0)()
// }
// console.log(typeof sayHi())
// console.log(typeof typeof 1)

// var a = 10;
// var b = a
//   b= 20
// console.log(a)
// console.log(b)

// function sum(){
//     return arguments.reduce((a, b) => a + b);
//   }
  
//   console.log(sum(1,2,3)); (1)
  
//   function sum(...arguments){
//     return arguments.reduce((a, b) => a + b);
//   }
  
//   console.log(sum(1,2,3)); (2)

console.log(true == '1');
console.log('1' == '01');
console.log(10 == 5 + 5);
console.log('1' - - '1'); 
console.log('1' + - '1'); 


let lang = 'javascript';
(function(){
   let lang = 'java';
   console.log(lang);
})();


(function(){
    var lang2 = 'java';
    console.log(lang2);
})();

(function(){
    console.log(typeof this);
}).call(10)

let a = 3;
let b = new Number (3)
let c = 3;
console.log(a==b)
console.log(a===b)
console.log(b===c)
console.log(a===c)

function getAge(...args){
    console.log(typeof args)
}
getAge(21)

let greeting ;
greeting = {};
console.log(greeting)

function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 }); 