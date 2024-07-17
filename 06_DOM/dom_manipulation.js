/*======================= DOM manipulation ===========================*/
// selecting with ID;
let heading = document.getElementById("myId");
//console.dir(heading);

// selecting with Class;
let h1andpara = document.getElementsByClassName("myClass");
//console.dir(h1andpara);
//console.log(h1andpara);

//selecting with tag;
let paratags = document.getElementsByTagName("p");
//console.log(paratags); 

//selecting with queries;
let firstselector = document.querySelector(".myClass");
console.dir(firstselector);

let allselector = document.querySelectorAll(".myClass");
console.dir(allselector);

let IDselector = document.querySelector("#myId");
console.dir(IDselector);