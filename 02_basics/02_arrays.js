const marvel_heros= ["thor","iron-man","spider-man"];
const dc_heros = ["deadpool","badman","superman"];

// marvel_heros.push(dc_heros); 
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros,...all_heros];     // spread operater
console.log(all_new_heros);  

const another_array = [ 1,2,3,"hello!",[2,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


/*=============================== Array library =======================*/
console.log(Array.isArray("Gaurav")); 
console.log(Array.from("gaurav"));

let score1= 100;
let score2= 200;
let score3= 300;
console.log(Array.of(score1,score2,score3));