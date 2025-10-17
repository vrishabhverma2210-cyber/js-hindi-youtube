// //  Primitive

// //  7 types : String, Number, Boolean, null, undefined, Symbol(like ek hi symbol ko jb bohot jagah use krna hota hai), BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//*********************stack and heap*************************88

// jo hmari primitve datatypes hote hain vo stak mai save hote hain and jp non primitive hote hain vo heap mai
// heap mai by reference save hota hai and stack mai by value(copy bnti hai , original vaale mai no change)]

// let  myyoutubename="hhh12332@xxx"
// let shana=myyoutubename;
// console.log(myyoutubename)
// console.log(shana)
//  shana="xxxxxxxxxxxx"
//  console.log(myyoutubename)
// console.log(shana)
//yeh upr vala stack mai store hoga because string ek primitive dtype hai
 let userone={
    nname: "dfs",
    roll:"dsbjhvsfe"
}
let usertwo=userone;
console.log(userone);
console.log(usertwo);
// by referce pass hua hai, ek mmai change krenge toh dusre mai bhi change hojaega
usertwo.nname="risahhahhaha";
console.log(userone);
console.log(usertwo);
// if(stack nd heap ka dia. dekhna hai toh vo lec. mai hai)


