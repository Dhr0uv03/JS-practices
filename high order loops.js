

// const arr = [1,2,3,45,6]

// for (const i of arr) {
//     console.log(i);
// }

// const hii = "hello everyone"

// for (const iterator of hii) {
//     console.log(iterator);
// }

// const map = new Map()
// map.set('in',"india")
// map.set('us',"united states")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key,value);
    
// }

// const names = {
//     name1 : "dhruv",
//     name2 : "vatsal",
//     name3 : "yoyo"
// }


// for (const keys in names) {

//     console.log(keys + " is : "+ names[keys]);
    
// }

// for (const key in arr) {

//     console.log(key);
   
// }

// const coding = ["js" , "c" , "python" ,"java"]

// coding.forEach( (item) => {console.log(item)} )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
    {
        langName : "js" ,
        fileName : "jsprojects"
    },
    {
        langName : "c" ,
        fileName : "dsa in c"
    },
    {
        langName : "python" ,
        fileName : "ML learning"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )

 