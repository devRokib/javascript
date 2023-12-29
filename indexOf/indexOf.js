const message = "JavaScript is not Java"
// returns index of 'v' in first occurrence of "va"
const index = message.indexOf("va")
console.log(index)

const message2 = 'Programize JavaScript'
const index2 = message2.indexOf("" , 0) // returns 0
console.log(index2) 

const message3 = 'hello Bangldesh .Good morning'
const index3 = message3.indexOf("" , 5) // return 5
console.log(index3)

//indesOf() returns the first occirance
const message4 = "JavaScript is the world's most misunderstood programming language"
const index4 = message4.indexOf("language") // return 57
console.log(index4)

const index5 = message4.indexOf("e") // return 21

console.log(index5)

const index6 = message4.indexOf("e" , 22) // return 37
console.log(index6)

const index7 = message4.indexOf('hello')
console.log(index7)

//finding all the occurrences of an element

function findAllIndex(string,value){
    indices = []
    let currentIndex = string.indexOf(value)
    while(currentIndex != -1){
        indices.push(currentIndex);
        currentIndex = string.indexOf(value , currentIndex + value.length)
    }
    return indices;
}
const str = "JavaScript is as related to Java as Carpenter is to Carpet";
const occurrence2 = findAllIndex(str , "J")
console.log(occurrence2)


