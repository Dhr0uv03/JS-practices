
function MyName(){
console.log("D")
console.log("H")
console.log("R")
console.log("U")
console.log("V")
}

MyName()

function addNumber(num1,num2){                   // function fname (parameters){   }
    console.log(num1+num2);
}

addNumber(3,4)
const result = addNumber(4,5)
console.log(result)


function addNumber(num1,num2){
    return  num1 +num2
     ;
}

console.log(addNumber(6,7))


function LoginUserMessage (username){
    if(username!=null){
    return `${username} has just logged in ...`
    }
    else{
        return `enter a username..`
    }
}

console.log(LoginUserMessage("Dhruv"))
console.log(LoginUserMessage())

// FOR DEFAULT 

function LoginUserMessage2 (username="Dhruv"){

    return `${username} has just logged in ...`
   
}


///// -------------------------------------------------------------------------------------------

// where you dont kniw number of parameters to use example shopping cart ... using REST and SPREAD


function CartPrice (...num1){
                                 return num1;
}

console.log(CartPrice(200,300,400))          // stores all value in an array 

const user = {
    username:"Dhruv",
    price:299
}

function handleObject(object){
    console.log(`username is ${object.username} and price is ${object.price}`);      // if object is already declared
}

handleObject(user)

handleObject({
               username:"sam",                   // if object is declared within the function , array too
               price:400
})


let array1 =[1,3,5,7,9]

function returns2(arr){
                              return arr[2];
}

console.log(returns2(array1));




// ------------------------------------        SCOPE         -----------------------------------



