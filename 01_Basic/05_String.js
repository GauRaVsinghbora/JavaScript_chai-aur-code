const name = new String('hitesh');
const repocount = 50;


/* c o c a t i o n s */
//console.log(name + repocount);      o l d   m e t h o d

//console.log(`${name} ${repocount}`);     n e w   m e t h o d
// const new_name = new String('gaurav');

console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase()); 
console.log(name.charAt(2));
console.log(name.indexOf('t'));


console.log(name.substring(0,4));
console.log(name.slice(-8,4));