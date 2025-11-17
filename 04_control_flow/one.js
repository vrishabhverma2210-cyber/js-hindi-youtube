// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== // yeh saare assignment operator hai if , else mai use hota hai

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // power scope ke andr tha , issliye yaha par execute nahi hoga


// const balance = 1000
 // without curly braces bhi hum implict way mai if statement lga skte hain ( (,)comma  ka use krke ) iska scope single line mai hi hota hai , but like jaha pe semicolon hai vaha tak generally iska scope hota hai
// if (balance > 500) console.log("test"),console.log("test2");
  // yeh implict if statemnt (ek line mai hi scope vgera likhna) is not a good pracrice, interviewer will surely not be happy



// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// simple hai yeh toh
