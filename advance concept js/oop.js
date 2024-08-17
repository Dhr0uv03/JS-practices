/*
        javascript and classes
        technically it is a prototype based language but it does have classes but its not entirely true
        
        object : collection of properties nd methods
               - toLowerClass

        why use oop
        object literal,
        constructor fn,
        prototypes,
        classes,
        instance.

        Abstraction , Encapsulation , Inheritance , Polymorphism
        
*/

// const user = {
//     username : "dhruv" ,
//     loginCount : 6 ,
//     signedIn : true,

//     getUserDetails: function(){
//         console.log(`Username : ${this.username}`);
//         // return `Username : ${this.username}`
//         }
// }

// console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const UserOne =new User("Dhruv",5,true)
const UserTwo =new User("Bro",8,false)

console.log(UserOne.constructor);                          // when new keyword is used , it creates new empty object , an empty parenthsis nd it runs constructor
console.log(UserTwo);                          

