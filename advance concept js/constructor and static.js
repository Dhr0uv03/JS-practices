

// class User {
//     constructor(username , email , password) 
//     {
//        this.username = username
//        this.email = email
//        this.password = password 
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai","chai@gmail.com","1234")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// function User1(username , email , password){
//        this.username = username
//        this.email = email
//        this.password = password 
// }

// User1.prototype.encryptPassword = function(){
//     return `${this.password}abcd`
// }

// User1.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const dhruv = new User1("dhruv","dfd@gmail.com","1234")
// console.log(dhruv);
// console.log(dhruv.encryptPassword());

//-------------------------------------------------------------------------------------------------------------

class User {
    constructor(username) {
        this.username = username
    }
   
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const dhruv = new User("dhruv")
// console.log(dhruv.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const vatsal = new Teacher("vatsal","saskjd@gmail.com")
console.log(vatsal);

console.log(vatsal.createId());
