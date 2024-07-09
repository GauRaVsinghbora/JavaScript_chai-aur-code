const User = {
    UserName : "GauRaV",
    price: 99,

    WelcomeMessage: function(){
        console.log(`${this.UserName}, welcome to the website.`);
        console.log(this);
    }
}

User.WelcomeMessage();
User.UserName = "hitesh";
User.WelcomeMessage();

console.log(this);  // this is only work on the object.


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
    var UserName1 = "GauRaV";

}   
console.log(chai.UserName1);
