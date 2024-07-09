/*========================== defining the function ======================*/

function sayMyName(){
    console.log("G");
    console.log("a");
    console.log("u");
    console.log("R");
    console.log("a");
    console.log("V");
}

/*========================== calling the function ========================*/
// sayMyName();                                   

function addTwoNumbers(number1,number2){          //number1, number2 are parameters.
    return number1 + number2;                     // after return, the will end function.
    console.log("Hitesh");                 
}

// const result = addTwoNumbers(9,1);                // here 9,1 are arguments.
// console.log(`Result is: ${result}`); 


function LoginUserMessage(Username){
    return `${Username} Just Logged in`
}

// console.log(LoginUserMessage("Gaurav"));
// console.log(LoginUserMessage());

function calculationCartPrice(val1,val2, ...num1){        // r e s t  Operator
    console.log(`val1 is: ${val1}\nval2 is: ${val2}`);
    return num1;

}
// console.log(calculationCartPrice(100,200,300,400,500)); 

const Object = {
    UserName : "Gaurav",
    id: "123abc"
}

function handleObject(anyobject) {
    return (`username is: ${anyobject.UserName} and UserId is ${anyobject.id}`);
}

// console.log(handleObject(Object));

const MyArr = ["hello!","world"];

function handleArr(anyArr){
    return `Your zero index element is ${anyArr[0]} and Your first index element is ${anyArr[1]}.`;
}

// console.log(handleArr(MyArr));