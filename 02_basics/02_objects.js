// const tinderUser = new Object() // aise singelton bana hai
 const tinderUser={}  // aise nahi bna
//  console.log(tinderUser);
 
// empty object banaya tha upr , and now usme hum values de rhe hain
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// objects ke andr hum nested objects bhi lga skte hainnn (inko access krne ke liye vhi hume ..(dot ka use krna pdega))
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
 // merge hum vhi arrays vale way se kr skte hain
// const obj3 = { obj1, obj2 } // isme properly merge nahi hoga 

// yeh bdia method hai .assign (target,value) ki form mai , isme {}empty target issliye dete hain taaki sb iske andr aa jaye (mdn ki iski documentation bdia hai)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// baki yeh spread vala method apna versatile hai
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// arrays ke andr objects , multiple uses hain iske
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// access krne ka way vhi jese array ko krte hain
users[1].email
// console.log(tinderUser);


// yeh hum jitne bhi keys and value ko direct access kr re hain, yeh hume array ki from mai access ho ri hai , aage aaek databases mai bohot use ayega
// console.log(Object.keys(tinderUser)); // tinderuser ki ssari keys ko access krne ka trika
 console.log(Object.values(tinderUser)); // value ko
console.log(Object.entries(tinderUser)); // all key:value

// check krne ke liye ,ki aisi koi property hai  bhi ya nahi
 console.log(tinderUser.hasOwnProperty('isLoggedIn'));



 // Destructiing pdenge hum objects ki , arrays ki bhi hoti hai , bohot use aati hai  react pdte time bhi hogi use 
 
 //API vgera ka idea bhi lgega
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// hum baar baar . (dot lagake access nh krna chahte )  issliye hum curly braces lagake deconstructing ko use krte hain
// course.courseInstructor

// yeh niche jo kiya hai ise hi deconstrcting kehte hain // bde naame ko chote naam mai rename bhi kr skte hain 
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

 // YEH DECONSTRUCTING KA KAAM REACT MAI BDA USE AATA HAI , LIKE KHHI BHI CURLY BRACE DIKHE TOH SMJ JANA DECOSNTRUCTING KI HUI HAI (imp)

 // API means simply yeh hota hai ki , apna kaam kisi hor ke upr daal dena simple  (isko detail mai pdenege aage jaake)

// simple yeh niche json ko acccess kiya hai yhi fromat hota hai , both key and aalues string hoti hai
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
  
// arrays ki from mai bhi hote hain json (JSON stands for JavaScript Object Notation.)
// [
//     {},
//     {},
//     {}
// ]
// json readable bhi hota hai kyi tools bhi video mai discuss kiye gayw hain
//(bdia hai)
//bakki arrays mai loops kakgani asan hoti hai , aag jake pdenge]


 