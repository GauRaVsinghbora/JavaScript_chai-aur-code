//singleton
//object.create

//object literals
const mySym = Symbol("keyone");
const JsUser = {
    name:"Gaurav",            // keyvalue pare
    age:19,
    "location":"Delhi",
    isLogin:true,
    [mySym]:"hello!",
    LastLoginDay : ["monday","friday"],
    myArr:["gaurav","singh","Bora"],
};

console.log(JsUser.name);
// console.log(JsUser[name])      // this error cuz name in the object track as "name"; 
console.log(JsUser["name"]);
console.log(JsUser["location"]);
console.log(JsUser[mySym]);
console.log(JsUser["myArr"]);


JsUser.age = 20;
// console.log(JsUser.age);
// Object.freeze(JsUser);   // freezing the Jsuser.   not one can change.            
// JsUser.age = 21;

console.log(JsUser);

// adding fuction to the object.
JsUser.greeting = function(){
    console.log("Hello JS user");
}



JsUser.greetingtwo = function(){
    console.log(`hello JS User ${this.name}`);  // this is referring the same object.
}

console.log(JsUser);
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());