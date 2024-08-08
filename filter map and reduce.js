
const coding = ["js" , "ruby" , "java" , "python"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})


const myNum = [1,2,34,4,56]

// const newNums = myNum.filter( (num) => { return num > 4} )

const newNums = []

myNum.forEach( (num) => {
    if (num>4){
        newNums.push(num)
    }
});

console.log(newNums);

const books = [
    {
        bookname:"book one" , genre :"fiction", publish :1982 , edition :2002
    },
    {
        bookname:"book two" , genre : "non-fiction" , publish :1978 , edition :2004
    },
    {
        bookname:"book three" , genre : "mystery" , publish :1979 , edition :2008
    },
    {
        bookname:"book four" , genre : "adventure" , publish :1987 , edition :2006
    },
    {
        bookname:"book five" , genre : "fiction" , publish :1989 , edition :2010
    },
    {
        bookname:"book six" , genre : "mystery" , publish :1980 , edition :2006
    },
    {
        bookname:"book seven" , genre : "non-fiction" , publish :1988 , edition :2003
    },
    {
        bookname:"book two" , genre : "non-fiction" , publish :1979 , edition :2007
    }
]


const booksafter = books.filter((bk) => bk.edition >= 2008 )

console.log(booksafter);

const bookssame = books.filter((bk) => {
    return bk.genre === "non-fiction"} )

console.log(bookssame);


const myNumber = [3,13,33,4,5,9,90]

console.log( myNumber.map( (num) => num+10 ) )

const numbers = myNumber
                        .map( (num) => num*10 )
                        .map( (num) => num + 2 )
                        .filter( (num) => num > 100 )
console.log(numbers);


// ----------------------------------      REDUCE       ----------------------------------------

// const myNumber = [3,13,33,4,5,9,90]

const myTotal = myNumber.reduce(function (acc,currval) {
    console.log(`accumulator: ${acc} and currval : ${currval}` );
    return acc + currval
},0 )

console.log(myTotal);

const total = myNumber.reduce( (acc,val) => acc+val,0 )
console.log(total);

