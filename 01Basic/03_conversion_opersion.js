let score = "123";



console.log(typeof score);
let ValueinNumber= Number(score);             // conversion of score to number.

console.log(typeof ValueinNumber);            // printing the type of valueinNumber.
console.log(ValueinNumber);                   // Printing the value of valueinNumber.

// "33" => 33
// "33abc" => NaN (Not a number)
// True => 1 false => 0;




let isLoggedIn = 120;
console .log(typeof Boolean(isLoggedIn));
console.log(typeof String(isLoggedIn));        //conversing to Number.
console.log(Boolean(isLoggedIn))

console.log(Number("0x11"));     



// implicitly conversion
console.log("roo" + 1);            // automatically converted.


// 1 => true
// 0  => false
// ""  => false
// "gaurav" => true