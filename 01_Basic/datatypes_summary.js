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

// reference typeof is gerenally   o b j e c t.
console.log(typeof heros);
console.log(typeof Myobj);    
console.log(typeof myfunction);



/*================================ memory ============================*/

//               Stack (primitive)        Heap (Reference) 




/*=========== Stack memory =============*/
let myname = "Gaurav bora"
let mynewname = myname;
mynewname = "Gaurav singh bora"

console.log(mynewname);
console.log(myname);


/* =========== heap memory=============*/
const myContact = {
    Phone_no:9837139020,
    Email:"Gauravbora2273@gmail.com"
}

const myNewContact = myContact;
myNewContact.Phone_no= 6395096944;

//both Phone number will get changes
console.log(myContact.Phone_no);
console.log(myNewContact.Phone_no);