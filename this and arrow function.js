
const user = {
    username : "Dhruv",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to our website ..! `)
        console.log(this)}
  
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)

function chai (){
    let username = "Dhruv"
    console.log(this);
}

chai()

const chai2 = () => {
    let username = "Dhruv"
    console.log(this);
}

chai2()

const add = (num1,num2) => {
    return num1+num2                            // if used {} then we have to use return
}

console.log(add(4,5))

const add2 = (num1,num2) => ( num1+num2 )
                                                        // if used () then we dont have to use return
console.log(add2(8,5))


