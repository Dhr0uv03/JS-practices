
// singleton 
// object.create
// object literals

const mysym = Symbol("key1")

const JsUser ={
    name : "Dhruv" ,
    age : 20 ,
    location : "amdavad" ,
    lastLoginDays : ["Monday","friday"],
    [mysym] : "mykey1"
}

// console.log(JsUser.name)
// console.log(JsUser["location"])
// console.log(JsUser[mysym])

// JsUser.age = 19
// console.log(JsUser.age)

// Object.freeze(JsUser)          //after use user cannot make changes.
// JsUser.age = 49
// console.log(JsUser.age)

JsUser.greetings = function(){
    console.log(`welcome my freind`)
}

console.log(JsUser.greetings)
console.log(JsUser.greetings())

JsUser.greetings2 = function(){
    console.log(`hello my freind ${this.name}`)
}

console.log(JsUser.greetings2())

// -------------------------------------------------------------------------------------------------------


const tinderUser1 = new Object()          //singleton user object
const tinderUser2 = { }                  //non-singleton object

const tinderUser = {
    id : 1224 , 
    username : "dhruv32" , 
    isLoggedIn : "false"
}

console.log(tinderUser)

const regularUser = {
    email : "hfakdhasjdh@gmail.com",
    fullname : {
        firstname : "dhruv" ,
        lastnaame : "vadher"
    }
}

console.log(regularUser)

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {obj1 , obj2 }
console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)      // (taregt,sorce,sources...)  {}means empty object is target and other objects are added in it.
console.log(obj4)

const obj5 = {...obj1,...obj2}            // spread object just like array
console.log(obj5)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('age'))


// ----------------------------------      JSON & destructuring        ---------------------------------


const course1 = {
    course_name : "js in hindi" ,
    price : 999 ,
    instructor : "Hiteshsir"
}

const{course_name} = course1
console.log(course_name)

const{course_name :name} = course1
console.log(name)

// json is object without name , key-value bothnare strings\
//     json used while fetching data with the help of APIs.

// {
//     "name1" : "yoyoyo"
//     "course1" : "JS eng"
//     "price" : "free"
// }



