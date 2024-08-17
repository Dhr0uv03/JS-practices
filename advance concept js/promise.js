
// const promiseOne =  new Promise(function(resolve,reject){
//                                                                        // Do an async task
//                                                                       // DB calls , cryptography , network
//     setTimeout(function(){
//         console.log(`Async task is complete`);
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise is completed");
    
// })

// new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("promise resolved 2");   
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//                 resolve({username:"chai" , email : "vadherdhruv003@gmail.com"})
//     },3000)
// })

// promiseThree.then(function(user){
//     console.log(user);   
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"dhruv" , password : "123"})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
          
//     },1500)
// })

// promiseFour.then( (user) => {
//     console.log(user);
//     return user.username   
// })
// .then( (userName) => {
//     console.log(userName);    
// })
// .catch(function(error){
//     console.log("error");
// })
// .finally( () => {console.log("promise is either resolved or rejected");
// })




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"dhruv" , password:"1234"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1500)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
         console.log(response);
        }
        
    catch (error) {
        console.log(error);
        
    } 
}

consumePromiseFive()

// async function getAllUsers() {
//     try {const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);}
//     catch(error){
//         console.log(error);
//     }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then( (data) => {
//     console.log(data);
// })
// .catch((error) => {console.log(error);
// })
