
const desc = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(desc);

const chai = {
    name: "masala chai",
    price: 340,
    isAvailable : true,

    orderChai : function(){
        console.log("not available");
          }

}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai , 'price' , {
    writable : false ,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,'price'));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key} : ${value}`);
    }
}