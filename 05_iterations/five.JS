//ab jo loop hai vo bohot impprotant hai array mai iterate krne ke liye like aage jaake databases mai array kke andr objects ko iterate krna hota hai , vahan bohot kaam ayega yeh loop , thoda practice krni pdegi iss loop ki because isme function bhi pas krna pdta hai

// (for each) loop (arraay ki property hai like yehh , browser mai if array banaoge toh prototype mai jese length  vali property dikhti hai , vese hi yeh vali bhi dikhegi)
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  // syntax mai for each ke andr function bhi dena pdega but like function ka naam likhne ki noo need direct parameter paas krdenge
//     console.log(val);
// } )

// yeh bhi same hai buss isme arrow vale method se function ko call kiya hai
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // function ka refernce dena hai, no need for call printMe() 

// coding.forEach( (item, index, arr)=> {  // for each hume sirf item ka acess nhi deta , hor bhi bohot saari chizon ka deta hai like index and the whole array
//     console.log(item, index, arr);
// } )


// yeh bohot kaam ki cheez hai aage jaake bohot use hoti hai objects in array(complex hai but iss method se easy hai)
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);  // direct dot lagake access kr skte hainnnnnn
} )