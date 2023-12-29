let numbers = [1,2,3,4,5]
if(numbers.length >= 5){
    console.log("the array has five or more number ")
}
let names = []
if(names.length === 0){
    console.log("the names list is empty.")
}

let items = ["books" , "pen",'notebook']
for (let i = items.length - 1 ; i >= 0; i--){
    items.pop();
}
console.log(items)

let city = ["California", "Barcelona","Paris","Khathmandu","Dhaka"]
let lengthCheck = city.length;
console.log(lengthCheck)

const companyList = ["Apple","Google","Facebook","Amazon","Twitter","Instragram"]
const checkLength = companyList.length;
console.log(checkLength)

const languages = ["JavaScript" , "Python" ,"C++","Java","Lua"]
for( let i = 0; i < languages.length;i++){
    console.log(languages[i])
}