/* =============================== Primitive ====================== */


//while calling the variable,the copy come made it is know as call by value.
//7      Number, boolean, string, null , undefined, BigInt,symbol.


/* =============================== reference ====================== */

//while calling the variable the actual memory location is come and it is know as call by reference.
// array , object ,function.

const bignuber= 1344323n;
const heros = ["ironman","captial america","thor"];

let Myobj ={
    name:"Gaurav",
    age:"19",
}
const myfunction= function(){
    console.log("hello! world");
}

console.log(typeof undefined);
console.log(typeof null);       // exception.
console.log(typeof true);
console.log(typeof 123);
console.log(typeof "string");
console.log(typeof bignuber);

// reference typeof is gerenally Object.
console.log(typeof heros);
console.log(typeof Myobj);    
console.log(typeof myfunction);
