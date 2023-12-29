const message = ["JavaScript "," is"," fun"]
function joinStrings(acc,curr){
    return acc + curr
}
const result = message.reduce(joinStrings)
console.log(result)

const numbers = [1,2,3,4,5,6,7,8,9,10]
function sumReducer (acc,curr){
 return acc + curr
}
const summetion = numbers.reduce(sumReducer)
console.log(summetion)


const numbers2 = [1500,250,300,28,100]
const difference =  numbers2.reduce((acc,curr) => acc - curr );
console.log(difference)

const expense = [1800,2000,3000,5000,500]
const salary = 15000
let remaining = expense.reduce((acc,curr)=>acc - curr,salary)
console.log(remaining)

const ageGroup = [18,21,1,1,51,18,21,5,18,7,10]
let uniqueAgeGrope = ageGroup.reduce(function(acc,curr){
    if(acc.indexOf(curr)=== -1){
        acc.push(curr)
    }
    return acc
},[])
console.log(uniqueAgeGrope)
