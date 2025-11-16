// singleton (yeh hmara jb hum constructor form se object ko declare krte hain tb bnta hai(singelton)) aage jaake pdenge
// Object.create(constructor form se kiya hai object ko declare , like baad mai jaake krenge discuss)

// object literals (literals ki from mai jab create krte hai tb nhi bnta singleton)

const mySym = Symbol("key1")  // isko hum apne object ke andr direct nhi access kr skte because normally likhenge toh vo mysym ko string ki tarah smjega , that's why square bracket ka use krna pdta hai


const JsUser = {
    name: "Hitesh",     // (name)key hmara by default strings ki trah  mana ja ra hai
    "full name": "Hitesh Choudhary", // isme key ko khud se hi string ki tarah likh dia
    [mySym]: "mykey1", // symbol ko use krne ka special trika
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) dot vale methods se hum access sirf normal vali keys hai like jo automatic string mai convert hori hai unko kr skte hain access sirf , symbol and "full name" jeson ko nhi kr skte
// console.log(JsUser["email"]) // yeh method universal hai , iss vale se hum kuch bhi access kr skte hain
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com" // change kr skte hain simply dot ko use krke
// Object.freeze(JsUser) // frreeze krne ke baad hum kuch bhi change nahi kr skte
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

 // As a fuction bhi hum le skte hain
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // yeh dollar sign vala mehtod humne string mai sikha tha 
    // THIS BHI bohott boohot important keyword hai bohot use ata hai , we can't simply ignre that    // because this se hi hum name vale key ki value ko access kr paaye hainnnn
} 

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());