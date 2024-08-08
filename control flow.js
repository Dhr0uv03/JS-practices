

if( 2 === "2"){
       console.log(`hiii`)
}


const month = 3

switch (month) {
    case 1:
        console.log(`its january`);
        break;

    case 2:
        console.log(`its february`);
        break;
        
    case 3:
        console.log(`its march`);
        break;
        

    default:
        console.log(`oops error`);
        break;

}

/*

falsy values : false, 0 , -0 , BigInt 0n,"" ,null,undefined,NaN,

truthy values : "0" , "false" , " " , [ ] , { } , function(){}

*/

let val = 5 ?? 50 ?? 89

console.log(val);

val < 4 ? console.log("less than 5") : console.log("greater than 5");

