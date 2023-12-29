const array = [2,3,45,6,7,8,9,]
const newArray = array.map(arr => arr * 2)
console.log(newArray)

const names = ['rakib',"nurNobi", 'ashik']
const nameList = names.map(name => `${name}`)
console.log(nameList)


function square (number){
    return number *number
}
let numbers = [1,3,5,7,9]
const result = numbers.map(square)
console.log(result)

const employees = [
    {name:"Adom",salary:5000,bonus:500,tax:1000},
    {name:"Noah",salary:8000,bonus:1500,tax:2500},
    {name:"Fabiano",salary:1500,bonus:500,tax:200},
    {name:"Alireza",salary:4500,bonus:1000,tax:900},
]

const calcAmt = (obj) =>{
    newObj = {}
    newObj.name= obj.name ;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj ;
}
let newArr = employees.map(calcAmt);
console.log(newArr)

const names2 = ["Alice","Bab","charlie"]
let upperCaseNames = names2.map(name => name.toUpperCase())
console.log(upperCaseNames)

let people = [
    {name:"Jhon" , age:30},
    {name:"Jone" , age:25},
    {name:"bob" , age:40},
]
const namesOnly = people.map(person =>person.name)
console.log(namesOnly)

let numbers2 = [1,2,"hello",4,5]
let doubleNumver = numbers2.map(x =>{
    try{
        return x * 2
    }catch(error){
        return null // handle non numeric volues
    }
})
console.log(doubleNumver)