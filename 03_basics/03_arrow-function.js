const User = {
    UserName : "GauRaV",
    price: 99,

// this is only work on the object.
    WelcomeMessage: function(){
        console.log(`${this.UserName}, welcome to the website.`);
        console.log(this);
    }
}

User.UserName = "hitesh";
User.WelcomeMessage();
// console.log(this);  


// const chai = function(){
//     let UserName = "Gaurav";
//     console.log(this.UserName);    // this will not work. this method only work on object.
// }

// function chai() {
//     let UserName = "GauRaV";
//     console.log(this.UserName);    // this will not work. this method only work on object.
// }


/*=========================== A R R O W  function=================================*/

const chai = () => {
    let UserName = "Gaurav";
    console.log(this);
} 

chai();

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

const addTwo = (num1 ,num2) => (num1 + num2);
const Username = (num1 ,num2) => ({UserName:"Gaurav"});

// console.log(addTwo(9,1));
