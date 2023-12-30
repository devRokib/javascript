const numbers = [1,3,4,5,7,8]
for(let number of numbers){
    console.log(number)
}

const sentence = "Hello World"
for(let character of sentence){
    console.log(character)
}

const colors = new Set(["red","green","blue"])
for(let color of colors){
    console.log(color)
}

const person3 = new Map([
    ["name","Alice"],
    ["age",30]
])
for (let [key,value] of person3){
    console.log(`${key}:${value}`)
}