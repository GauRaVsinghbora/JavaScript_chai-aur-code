/*=============================== a r r a y s =============================*/
const myArr = [1,2,3,4,5];
console.log(myArr[0]);
const myNewArr = new Array(1,2,3,4,5,6);
console.log(myNewArr[5]);

// array methods.   (array is   s h a l l o w  copy).

myArr.push(6);
myArr.push(7);
myArr.pop();                     // remove the last element. and it return the lenght;
myArr.unshift(9);                // add the element to zero index; and it return the lenght;
myArr.shift();                   // remove the element form the zero index; and it return the lenght;

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4         


console.log(myArr);              // array is   s h a l l o w  copy.
console.log(myArr.includes(4));
console.log(myArr.indexOf(4));

console.log(myArr.slice(1,3));
console.log(myArr.splice(1,3));  // mauplate to orginal data type.
console.log(myArr);    


const newArr = myArr.join();     // not to manuplate the orginal data type.    
console.log(newArr);
console.log(typeof newArr);

