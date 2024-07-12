/*====================== for loop =========================*/

for(let i = 0; i<= 10; i++){       // i is iterator.
    if (i == 7){
        //console.log(`${i} is best number.`);
    }
    //console.log(i);
}

// nested loop 
for(let i= 1; i<= 10; i++){
    //console.log(`outer loop ${i}`);
    for(let j=1; j<= 10; j++){
        // console.log(`inner loop ${j} and outer loop ${i}`)
        //console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArr = ["flash","batman","superman"];

for(let i=0; i< myArr.length; i++){
    //console.log(myArr[i]);
}


/*======================= break and continue =========================*/

for(let i=1; i<=20; i++){
    if (i == 7){
        console.log(`Detected ${i}`);
        break;
    }
    console.log(`value of i is ${i}`);
}


for(let i=1; i<=20; i++){
    if (i == 7){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`);
}