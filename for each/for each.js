const numbers = [1,2,3,4,5,6,7,8]
numbers.forEach(function(number){
    console.log(number)
})

const colors = (["red","green","blue"])
colors.forEach(function(color){
    console.log(color)
})

const person = new Map([
    ["name","Alice"],
    ['age', 30]
])
person.forEach(function([key,value]){
    console.log(`${key}: ${value}`)
})