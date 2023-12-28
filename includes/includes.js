const message = 'avaScript is fun';
let result = message.includes('fun')
console.log(result)

const sentence = "Java is to JavaScript what car is to Carpet"
let check = sentence.includes('Java')
console.log(check)

// case sensitive 
let message2 = 'hello Bangladesh'
let check2 = message2.includes('bangladesh')
console.log(check2)

// second argument specifies position to start at
let message3 = 'Java is programming languages'
let check3 = message3.includes('Java' , 30)
console.log(check3)

let message4 = 'hello message check'
let check4 = message4.includes('whose')
console.log(check4)

let message5 = 'he is a inteligent boy'
let check5 = message5.includes("")
console.log(check5)