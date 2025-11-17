const userEmail = [] // yeh truthy hai empty array

if (userEmail) { // userEmail if truthy hua tbhi , if block ke andr enter honge vrna nahi ho payenge
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values (agr yeh hogaa toh enter nahi ho payenge)

// false, 0, -0, BigInt 0n (big int mai jo n lagate hain bada number likhne ke baad), "", null, undefined, NaN

//truthy values
// "0", 'false' (yeh false and 0 string ki tarah consider kare jayenge), " " (yeh string empty nahi hai isme kuch toh space hai), [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined(yeh bhi aage jaaaaaaaaake projects vgera mai bohot use hota hai , like hum chahte hain ki , hmara resukt null ya undefined na rahe issliye hum nullish ka use krte hain)

let val1;
// val1 = 5 ?? 10 // jo pehle hai vo print hoga
// val1 = null ?? 10  // null skip hoke 10 print hoga
// val1 = undefined ?? 15   //undefined skip hoke  15 print hoga
val1 = null ?? 10 ?? 20 // jo pehle hai vo print hoga mtlb 10



console.log(val1);

// Terniary Operator (yeh nullish ki tarah nahi hai , dono alg hai)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")