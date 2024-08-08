
// stack and heap

// primitive data type uses stack
// non-primitive data type uses heap

// let ytname = "Dhruv's channel"

// let extraname = ytname
// extraname = "My channel"

// console.log(extraname);
// console.log(ytname);          // no changes in ytname as extraname is stored as a copy in stack so no changes is applied to it.

let user1 = {
                email: "hihi@gmail.com",
                password:"dsjdhsdh"
}

console.log(user1.email)

let user2 = user1 ;
console.log(user2.email)

user2.email = "hahahaha@gmail.com"

console.log(user2.email)
console.log(user1.email)


/* 
     summary : in heap , copy is not used like stack instead
               it makes a reference to the original value an so
               change in references makes changes in original value too.


*/

