let person = {
    name:'anik',
    age:25,
    city:'dhaka'
}
for(let info in person){
    console.log(info + ":" + person[info])
}

let person2 = {
    name:"joh",
    age:30,
    city:"New York"
}

for(let property in person2){
    console.log(`${property}:${person2[property]}`)
}

const prices = {
    apple : 1.50,
    banana:0.80,
    arange:1.20
}
for(let fruit in prices){
    prices[fruit] *= 1.1
}
console.log(prices)

let student = {
    name: "Alice",
    grade:'A'
}
if( 'grade' in student){
    console.log("Student has a grade ")
}

let numbers = [1,3,5,8,9]
for(let index in numbers){
    console.log(numbers[index])
}