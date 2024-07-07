console.log(null > 0);
console.log(null == 0);
console.log(null <0);
console.log(null>=0);     // this is true cuz comparision & equality checker work differently. comparision convert the null to number, treating it as 0.that why (4) & (5) is True.      
console.log(null<=0);

console.log(undefined <=0);   //always false

// === strict comparision
console.log("2"==2);       //this is True cuz this is implicitly conversing the string to number. 
console.log("2"===2);      //this is false cuz this is checking the data type also.
