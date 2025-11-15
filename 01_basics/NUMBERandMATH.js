// const num=50 ;// isme js by default (auto)smj ri hai ki num hmara number hai
// console.log(num);

// const newnum=new Number(100); // iss method se hum especially mention kr rhe hain ki number hai
// //(prototypess bhi use kr skte hain iss method se)

// console.log(newnum);
// // now there are few protypes of number as compared to strings
// // so hum number ko pehle string mai change krke mje utha skte hain
// console.log(newnum.toString().length);
// // fixed proto is used ki precision ki after decimal kitne digits aane chahiye
// console.log(newnum.toFixed(10));

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // round of krke value deti hai
// kabhi kbhi yeh zeroes readable nhi hoti (hume commas vgera ki help lgti hai)
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // indian number system mai change ho jayga 
console.log(hundreds.toLocaleString()); // by default yh USA nuber sysytem ke hisab sse krega

// INT_MIN AND INT_MAX BHI USE KR SKTE HAIN HUMMMMMMM(AS A NUMBER PROPERTY)

//++++++++++++++ MATHS ++++++++++++++
// console.log(Math); 
// console.log(Math.abs(-4)); // LIBRARY SE INBUILT ACESS  KR RHE HAIN
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2));  //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // YEH hume 0 se 1 ke bich mai hi value return krega
console.log((Math.random()*10) + 1); // now hume 1 to 10 mai value chahiye thi , issliye aise likha 
console.log(Math.floor(Math.random()*10) + 1);

//now kbhi kbhi min and maax range ke bich mai caiye hota hai
// uss case mai hum ek formula derive krte hain'

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// now value min 10 se toh bdia ayegi hi and max 20 tk aa skti hai
