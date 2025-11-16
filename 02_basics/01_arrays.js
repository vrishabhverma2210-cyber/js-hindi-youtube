// array(size expand ke skte hain),(same ya differnt datatypes le elements bhi daal skte hain no problem)

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  // issme square bracketes ki jrurt nhi hoti ,
// console.log(myArr[1]); // obv 1st index vaale elemnt ko print kra dega

// Array methods(vector ki tarah push/pop vgera vale methods hote hain)

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // last index se hatayega

// myArr.unshift(9)  // starting mai 9 add krdega(not so optimise operation , genrally we ignored this)
// myArr.shift()  // starting index vale ko hata bhi dega

// console.log(myArr.includes(9)); // true or false 
// console.log(myArr.indexOf(3));  // 3 ke index ko return krega 

// const newArr = myArr.join()  // array ko string mai change krdega

// console.log(myArr);
// console.log( newArr);


// slice, splice(imp) // slice toh simple hai orignal vale mai ched chad nhi krta and normally de dega jo slice mai dala hai, dhayn rhe (3,4) 4th index vala elemnt slice nhi deta
// and if agr hum baat kre splice ki toh iss case mai   ,hmara orignal vala sb kuch bdl jata hai , jo indexes given hai usko chod ke sb hat jata hai

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 3rd index vala include nhi hoga

console.log(myn1);
console.log("B ", myArr); // slicng ke baad bhi oringal one is same


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // orignal vala bdaal gya
console.log(myn2);