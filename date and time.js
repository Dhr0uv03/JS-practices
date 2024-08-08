

let myDate = new Date()

console.log(myDate);

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate =new Date(2022, 11, 18, 23, 0, 0)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString());

console.log((myCreatedDate.getTime()).toLocaleString());

console.log(Math.floor((myCreatedDate.getTime())/1000000));


let NewDate = new Date()

console.log(NewDate.getMonth())       // +1 for month example for july it's 6 or

console.log(NewDate.getMonth() + 1)      

console.log(`month rightnow is ${NewDate.getMonth()+1}`)

console.log( NewDate.toLocaleString('default',{     weekday:"long"     }) )



