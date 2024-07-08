// const tinderUser = new Object();
const tinderUser = {};

// Adding to the tinderUser object.
tinderUser.id="123abc";
tinderUser.name= "Sammy";    
tinderUser.isLoggedIn = false;

const regularUser = {
    email:"gauravsinghbora@jklu.edu.in",
    full_name:{
        first_name:"gaurav",
        last_name:"bora",
    },
}
// console.log(regularUser.full_name.first_name);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};

// const obj3 = Object.assign({},obj1, obj2);

const obj3 = {...obj1, ...obj2};     // spread oprater.
console.log(obj3);

// const Users = [
//     {
//         id:123,
//         password:"123abc"
//     }
//     {
//         id:123,
//         password:"123abc"
//     }
//     {
//         id:123,
//         password:"123abc"
//     }
// ]

// console.log(Users[1]);
console.log(Object.keys(tinderUser));       // gives the array of keys of tinder
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('123abc'));   // this is not a property, this a value

console.log(tinderUser.constructor());


/*============================= distructuring ============================*/
const course = {
    courseName:'javaScript',
    price:'999'
}

const {courseName:course_newName} = course;   // changing the name of the key.
// console.log(courseName);   not work cuz name is distructured to course_newName;
console.log(course_newName); 



