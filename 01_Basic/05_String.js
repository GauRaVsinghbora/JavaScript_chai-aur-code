const name = new String('hitesh-hc');
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


console.log(name.substring(0,4));    //index form 0 to 3rd index. -8 not work.


/* ================== slicing used more =====================*/
console.log(name.slice(-8,-1));
console.log(name.slice(-8,4));       //left to right work only.


const new_name = "  gau rav ";
console.log(new_name);

const new_name_after_trim = new_name.trim();
console.log(new_name_after_trim);

console.log(new_name.split(' '));
console.log(new_name.includes('gau'));

const url="https://gaurav.com%20gauravsingh";
console.log(url.replace('%20','-'));
