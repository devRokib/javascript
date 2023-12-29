const message = " JavaScript::Is::fun"
let result = message.split("::") // divides the message string at ::
console.log(result)
const message2 = "ABCDEF"
const result2 = message2.split("")
console.log(result2)
const text = "Java is awesome. Java is fun"
let pattern = "."
const newText = text.split(pattern)
console.log(newText)

const text2 = "Java is awesome.Java is fun"
let pattern2 = "."
const newText2 = text2.split("",10)
console.log(newText2)

const myString = "i am fine ,how are you"
const myArray = myString.split("",3)
console.log(myArray)

const  text3 = "JavaScript ; Python ; C; C++"
const pattern3 = ";" 
const newText3 = text3.split(pattern3)
console.log(newText3)