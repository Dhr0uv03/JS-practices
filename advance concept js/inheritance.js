class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(name){
        console.log(`A new course ${name} is added by ${this.username}`);
    }

}

const dhruv = new Teacher("dhruv","dhfjf@gmail.com","1234")
console.log(dhruv.logMe());
console.log(dhruv.addCourse("JS")); 

const chai = new User("chai")
console.log(chai.logMe());

console.log(dhruv instanceof Teacher);
