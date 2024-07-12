/*==================== for of loop ======================*/
const myArr = [1,3,3,4,5,6];

for (const num of myArr) {
    // console.log(num);
}

const UserGreetings = `hello! User`;
for (const greet of UserGreetings){
    // console.log(`Each char is ${greet}`);
}


// M a p s 
const map = new Map();
map.set ("USA","United State Of America");
map.set ("IN","India");
map.set ("FR","france");

for (const [key,value] of map) {
    // console.log(key,":",value);
}

