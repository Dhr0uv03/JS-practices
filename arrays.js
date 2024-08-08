
const myArr = [1,2,2,3,4,5,6,88,54,22,28]

console.log(myArr[1])

const myHeroes = ["ironman","cap america","hulk","thor"]

myArr.push(100)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(8)      ,    //adds at start in array and changes others endex so it is not efficient.
console.log(myArr)         //shift does same as pop but from start

console.log(myArr.includes(54))

console.log(myArr.indexOf(3))

console.log(myArr.indexOf(-3))       // returns -1 if it is not present


const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)



// slice and splice       : slice doesn't manipulate original aaray whereas splice does

console.log(myArr.slice(1,3))
console.log("A:" + myArr)

console.log(myArr.splice(1,3))
console.log("B:" + myArr)

const yourHeroes = ["ben10" , "redakai" , "yoyo"]

myHeroes.push(yourHeroes)
console.log(myHeroes)                 //pushes whole array as a single element

myHeroes.concat(yourHeroes)
console.log(myHeroes)                 // it is not doing its job as we have store it in new element

const allHeroes = myHeroes.concat(yourHeroes)
console.log(allHeroes);

const Heroes2 = [...myHeroes,...yourHeroes]           // spreads whole array and makes every element as an individual
console.log(Heroes2)

const array2 = [1,2,3,[344,433],7,8,9,23,[23,56,78,[22,67,7]]]
console.log(array2)

const array3 = array2.flat(Infinity)
console.log(array3)


console.log(Array.isArray("dshkasd"))          // checks is array or not
console.log(Array.from("dshkasd"))             // converts to array

console.log(Array.from({name : "dshkasd"}))      //in case of key-pair is return empty value if not mentioned
 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))