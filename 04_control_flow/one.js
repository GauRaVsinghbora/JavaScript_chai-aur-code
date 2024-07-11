/*============================== if control-flow ==========================*/

// if(condition){
//     scopes
// }


if(2 === "2"){         // data type also check. it don't do any implicit conversion.
    console.log("is Executed");
}
else if(""){            // empty string is act like false.
    console.log("else is executed");
}
else console.log("else is executed"),       // implicit scope
console.log("thankyou from else");



const score = 200;
if (score>100){
    let power = "fly"
    // console.log(`User can ${power}`);
}

// console.log(`User can ${power}`);        // power is local scope.

const UserLoggedIn = true;
const debitcard = true;
const LoggedInFromGoogle = true;
const LoggedInFromEmail = false;
const GuestUser = false;

if (UserLoggedIn && debitcard && (LoggedInFromEmail || LoggedInFromGoogle || GuestUser)){
    console.log("Allow to buy courses.");
}

if (LoggedInFromEmail || LoggedInFromGoogle || GuestUser){
    console.log("You can Use Our website");
}