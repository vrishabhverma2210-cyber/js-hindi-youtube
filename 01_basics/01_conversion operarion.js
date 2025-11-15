let score = "hitesh"

console.log(typeof score); // boyh ways are correct for knowing the type of score
//console.log(typeof(score));

let valueInNumber = Number(score) // typecast
// First word capital likh ke karte hain jo (us se typecast hojegi)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//INVESTIGATION STUDIES KAR RE HAIN (SIMPLE)

// "33" => 33
// "33abc" => NaN // not a number
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


// jo pehle hogaa uss hisab se print hoga like starting mai if string hai vo overall bhi string ki tarah add hoga , if starting mai int hai toh vo int ki tarah add hoga
// console.log("1" + 2);//12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3);  // FALTU COMPLEX BANAKE CODE KI READIBILITY KO KHRB MT KRO (SIMPLE AND READABLE CODE LIKHO)

// console.log(+true);  //1  // The unary + operator in front of a value attempts to convert (coerce) that value into a Number.
// console.log(+"");     //0  

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
//(PREFIX , POSTFIX VALI DOCUMENTATION)MDN  (SIMPLE NOT SO COMPLEX)
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion