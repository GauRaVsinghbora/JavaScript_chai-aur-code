const myObject = {
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
}
// for (const key of myObject){
//     console.log(`${key}`);
// }
// for(let i=1; i<=Object.keys(myObject).length; i++){
//     console.log(`${i} : ${Object.keys(myObject[i])}`);
// }


const programming = ["js","css","html","cpp","rb","swift"];
for (const key in programming) {
    // console.log(key);                   // array has also the key startin from the 0. 
    // console.log(programming[key]);
}
