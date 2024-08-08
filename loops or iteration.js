


for (let i = 0; i <= 4 ; i++) {
    const element = i
    if (i % 2 == 0){
    console.log(i);
    }     
}

for (let i = 0; i < 10 ; i++) {
    console.log(`outer loop value : ${i}`);

       for (let j = 1; j < 10 ; j++) {
        console.log(`i times j = ${i*j}`);        
    }
    
}

let myArray = ["dhruv" , "vatsal" , "dinesh"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(myArray[index]);
    
}


for (let i = 0; i < 10 ; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue
    }

    console.log(`value of i : ${i}`);
}   

//--------------------------------------------------------------------------------------------------------


let arr = 0

while (myArray.length>arr) {
    console.log(myArray[arr]);
    arr++ ;
}

do {
    arr++ ;
    console.log(myArray[arr]);
    

} while (myArray.length>arr);