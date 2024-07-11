/* ======================== falsy value ============================== */
const falsy_value = [false, 0, -0, /*BigInt 0n*/, "", null, undefined, NaN];

/* ======================== truthy value ============================= */
const truthy_value = ["0","false"," ", [], {} ,function(){}];



/*=================== Example ========================*/
// const userEmail = [];

// if(userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Don't have user email");
// }

const userEmailsArr =[];

if(userEmailsArr){
    console.log("Array is always Truly value");
}


// how we can check the length of an array.
if(userEmailsArr.length === 0){
    console.log("Array is empty.");
}
else(
    console.log("Array has elements")
);

// how we can check the length of an object.
const userInfoObject = {};
if(userEmailsArr){
    console.log("Objec is always Truly value");
}
if (Object.keys(userInfoObject).length === 0){
    console.log("Object is empty.");
}
else{
    console.log("Object has elements.");
}



/*============= Nullish Coalescing Operator (??) : null undefined.============*/

let val1 = null ?? 10;
val1 = undefined ?? null;
let val2 = 3 ?? 5;

console.log(val1);
console.log(val2);
