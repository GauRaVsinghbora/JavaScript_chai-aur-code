/*============================= Dates =============================*/
let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString);

console.log(myDate.toLocaleString('default',{
    weekday:"long",
    hour:"2-digit",
}));

// console.log(myDate.getMonth());
// console.log(myDate.getDate());
console.log(typeof myDate);


let myCreatedDate = new Date(2024,11,1);
// let myCreatedDate = new Date("1-12-2024");
// console.log(myCreatedDate.toLocaleString());




/*============================= Time =============================*/
let myTimeStamp = Date.now();              // time form 01-january-1970 to now in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));