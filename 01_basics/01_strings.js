// const name = "hitesh"
// const repoCount = 50

// // console.log(name + repoCount + " Value"); // yeh thoda complex hai , issliye hum prefer nahi krte
 

// // hum yeh niche vala method prefer krte hain , jisme hum placeholder create karte hain
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// // There is a better way to declare a string(jiske bohot saare benefits hain)
// const gamename = new String('rishabhhc')// constructor mai likha hai , 0th index se iski accesing start hoti hai
// // hmara console ke andr key - value ki form mai store hota hai data
// // iss type se string ko declare krne se hmare or bhi bohot saare prototypes(console mai bdia dikhta hai) ko open krne ka way khul jata hai
// console.log(gamename[0])
// // prototype ko use krne ka standard way, hum or asani se bhi kar skte hain , but yeh standard hai
// console.log(gamename.__proto__); 
// console.log(gamename.__proto__.length);// yeh filhal ek object hai issliye empty { } brace dega(dikh 1 underscore rha hai, but we have used 2 underscore here)
// // hum direct without proto , properties use krenge
// console.log(gamename.length); // yeh last mai (;) dalna must hai
// console.log(gamename.toUpperCase());  // yeh  original value mai koi change nhi krega(yeh stack ND HEAP VALI PICHLI VIDEO MAI DEKH LIA THA)
// console.log(gamename.charAt(2));  
// console.log(gamename.indexOf('r')); 

// // sbse asan method strings ke method ke baare mai jan ne ka , google pe jaiye inspect , console, then standard way se declaare string usoing constuctor, thn string ke type dekh lo(asan way to master strings methods)
// const newstring=gamename.substring(0,4); 
// console.log(newstring);
// const anotherstring=gamename.slice(-9,2);// (length +starting indexed,ending index) (9-9,2)=(0,2)
// console.log(anotherstring);
// // NOTE: substring mai hum negative value ni de skte , vo simply negative value ko ignore krdega and 0th index se start krdega
 
// const newwstring="      rish   "
// console.log(newwstring)
// console.log(  newwstring.trim()) // kbhi kbhi hume extra unnecessary space hatani hoti hai, uss case mai we use trim

const url= "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) 
// yeh bhi bohot use hota hai

// hum puch bhi skte hain ki ek particular word hai ya nhi
console.log(url.includes('hitesh')) // true or false return krega

// HW. EK BAAR STRING MAI COMFARTABLE HONE KE LIYE CONSOLE VAALE STRINGS KE SAARE PROTOTYPES KO STUDY KRLO





