/*================= Immediately Invoked Function Expressions(IIFE) =================*/
(function chai(name){                  // this is  N a m e  IIFE 
    console.log("GauRaV");
})();

// semicolan at the end is Important cuz there is no return so, to end the Function call().
( (num1,num2) =>{
    console.log(num1 + num2);
} )(9,1);


let UserName = "GauRaV";
console.log(this);


  