// const personInfo = {
//     name: 'jonh doe',
//     age: 20,
//     address:{
//         dist:'narsigndi',
//         thana: 'shibpur',
//         contact:{
//             mobile: 1746278199,
//             houseNo: 512,
//         }
//     }
// }

// console.log(personInfo.age)
// console.log(personInfo.name)
// console.log(personInfo.address)
// console.log(personInfo.address.contact.houseNo)
// console.log(personInfo.address.contact.mobile)

// let person = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Exampleville",
//         zip: "12345"
//     }
// };

// console.log(person.name);
// console.log(person.address.city);


// const person2 = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         let surname = 'Doe';
//         console.log('The name is' + ' ' + person2.name + ' ' + surname); }
// };

// person2.greet();

// constructor function
function Person3 () {
    this.nam = 'John',
    this.age = 23
}

// create an object
const person3 = new Person3('hello');
console.log(person3.nam)