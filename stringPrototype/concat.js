const greeting = 'Assalamu Alaikum';
const name = 'Rakib Ahmed '
const describetion = 'i hope everything is ok . and keep hard working '
console.log(greeting.concat(` ${name}. ${describetion}`))

const arrayOne = ['Rakib','nounobi','ashik','sarkar','majba','sabbir']
const arrayTwo = [ 'nayem','shipon','shopon','somon']
console.log(arrayOne.concat(arrayTwo))

const arrayThree = ['one','two','three','four','five']
const arrayFour = ['six','seven','eight','nine','ten']
const arrayFive = ['eleven','tweleve','thirteen','fourteen','fifthteen']
const arrayResultOne = arrayThree.concat(arrayFour,arrayFive)
console.log(arrayResultOne)

const arraySix = ['twentyOne','twentyTwo','twentyThree','twentyFour','twentyFive'];
const arraySenven = ['twentySix','twentySeven',['twentyEight','twentyNine','thirty']]
const arrayResultTwo = arraySix.concat(arraySenven.flat())
console.log(arrayResultTwo)