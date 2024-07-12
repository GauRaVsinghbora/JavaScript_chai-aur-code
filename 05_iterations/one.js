const myObject = {
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}



const programming = ["js","css","html","cpp","rb","swift"];
for (const key in programming) {
    console.log(key);                   // array has also the key startin from the 0. 
    console.log(programming[key]);
}
