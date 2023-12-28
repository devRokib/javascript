
function modifyBy2(arr){
    let output = []
    for(let i = 0; i < arr.length; i++){
        output.push(arr[i] * 2)
    }
    return output
}
const newarr = modifyBy2([1,2,3,4,5,8,9])
console.table(newarr)

function modifyArr(arr,cb){
    let output2=[]
    for(let i = 0 ; i< arr.length; i++){
        output2.push(cb(arr[i]))
    }
    return output2
}
 function addBy10(element){
    return element + 10
}
function minuesBy2(element){
    return element - 2
}
 function multyfyBy3(element){
    return element * 3
}

 const add = modifyArr([1,3,4,6,8] ,addBy10 )
 const minuse = modifyArr([1,3,4,6,8] ,minuesBy2 )
 const multify = modifyArr([1,3,4,6,8] ,multyfyBy3 )
console.log(add,minuse,multify)
//=================//

function areaCalculate(arrayWidth, callback) {
    const area = arrayWidth.map((x) => callback(x));
    return area;
}
 
function circleArea(radius) {
    return Math.PI * radius * radius;
}
 
function squareArea(side) {
    return side * side;
}
 
const array = [2, 6, 7, 8, 3, 1, 5];
 
var circleAreaArray = areaCalculate(array, circleArea);
// console.log(circleAreaArray);
 
var squareAreaArray = areaCalculate(array, squareArea);
// console.log(squareAreaArray);
 
// console.log(array);
console.log(radius)