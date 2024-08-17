
// function multiplyBy5(num) {
//     return num*5
// }

// multiplyBy5.power =2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


// function createUser(username,score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }

// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
//     }

// const chai = new createUser("chai",25)
// const tea = new createUser("tea",250)

// chai.printMe()

//--------------------------------------------     PROTOTYPE      ----------------------------------------------


// let myHeroes = [ "thor" , "spiderman"]

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling" ,

//     getSpiderPower: function(){
//         console.log(`spidey power is {this.spiderman}`)
//     }
// }
// Array.prototype.Heydhruv = function(){
//     console.log(`dhruv says hello`);
    
// }

// Object.prototype.dhruv = function(){
//     console.log(`dhruv is present in all objects`);
// }

// heroPower.dhruv()
// // heroPower.Heydhruv()
// myHeroes.Heydhruv()

// const user = {
//     name:"chai",
//     email:"chai@gmail.com"
// }

// const Teacher = {
//     makeVideos : true
// }

// const Teachingsupport = {
//     isAvailable:false
// }

// const TAsupport = {
//     makeAssignment:"js assignment" , 
//     fullTime: true,
//     __proto__ : Teachingsupport        // to give refe of other objects
// }

// Teacher.__proto__ = user
// console.log(Teacher);

// // new way
// Object.setPrototypeOf(Teachingsupport,Teacher)

// console.log(Teachingsupport);

let anotherUsername = "yoyo    "

String.prototype.truelength = function(){
    console.log(`${this}`);

    console.log(`truelength is ${this.trim().length}`);
}

anotherUsername.truelength()

"dhruv   ".truelength()