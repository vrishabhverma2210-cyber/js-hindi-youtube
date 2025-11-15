// basic true or false marenge
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

 // will treat string as a number
// console.log("2" > 1);
// console.log("02" > 1);
 

console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0); // true because null,>=,<= inn cases mai behave differnet krta hai
// THE reason is that an equality check == and comparison >=,<= ,>,<work
 //diffrently , comparison convert null to a number , treating is as 0,
 // thats why null(0)>=0 is true and null(0)>0 is false



console.log(undefined == 0);//f
console.log(undefined > 0);//   F
console.log(undefined < 0);//F

// === (comparison of value as well as datatype)

console.log("2" === 2); // false