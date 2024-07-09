// {} this is a local scopes when it is difined with function and if/else,
/*  out of the local scopes, scopes is know as global scope and the varible(global) is also used inside scopes but visa vesa is not good */    
if(true){                      
    let a = 0;                
    const b = 1;
    var c = 2;         
}

// console.log(a);
// console.log(b);
// console.log(c);         // var variable is showing output which is not good for prog.


let a = 300;
if (true){
    let a = 10;
    const b = 20; 
    // console.log(`Inner value of a is: ${a}`);
}
// console.log(`Outer value of a is: ${a}`);



/*======================= N e s t e d ====================*/
function one(){
    const UserName = "Gaurav";

    function two(){
        const website = "Github";
        // console.log(UserName);
    }

    // console.log(website);
    two();
}
one();


/*======================= interesting ===============================*/

function addOne(num){                   // this is not a variable.
    return num +1;
}
addOne();


//addTwo(5);
const addTwo = function(num){           // this function is hold by variable.
    return num + 2
};
console.log(addTwo(5));