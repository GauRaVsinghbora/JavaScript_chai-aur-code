/*============================ Number ==============================*/
const balance = new Number(4000000); 
// P r o p e r t i e s
const newbalance_string =(balance.toString());    // making number to string.
// console.log(balance.toFixed(2));                  // decimal number.
// console.log(balance.toPrecision(4));              // number of significant figures with round off.
// console.log(balance.toLocaleString('en-in'));     // create comma with indian standed;

// console.log(typeof newbalance_string);
// console.log(typeof balance);


/*============================ Maths library ================================*/
console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(0.5));
console.log(Math.ceil(balance));
console.log(Math.floor(balance));  
console.log(Math.min(4,3,5,1,0));  


// R A N D O M   
console.log(Math.random());          //give the number from 0 <=num<= 1;
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));


const min = 10;
const max = 20;

console.log(Math.round((Math.random() * (max-min) + 1)) + min);