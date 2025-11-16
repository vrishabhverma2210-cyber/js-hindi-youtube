// dates (thoda complex hai because milliseconds mai kaam krta hai, but utna bhi  nahi hai)
//(ek shortcut hai(temporal) but abhi vo saare browser pe impemnt nhi hua hai iss liye direct use nahi kr skte), manually hi smjhte hain
let mydate=new Date() // ek object hai date bhi
console.log(mydate) // kuch unreadable sa content aayega(milisecond mai)
console.log(mydate.toString()) // thoda sa pdhne layak ayega
console.log(mydate.toISOString())
// yeh bohot saari types hai ,sbhi try marni pdegi(json vgera bhi hai)
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString()) // only time faltu ka kuch nhi
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())
 // run krke pattern observe kr liyo revision ke time
 
 
 // ways to declare dates
// let myCreatedDate = new Date(2023, 0, 23) // month 0 se staart hota hai
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // isme time bhi include krdie
// let myCreatedDate = new Date("2023-01-14") // not used in india
let myCreatedDate = new Date("01-14-2023") // jan 14,2023
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // miliseconds mai ayega
// console.log(Math.floor(Date.now()/1000)); // divide by 1000 and muiltiply by math.floor krdia thoda readable banane ke lliye

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 issliye kiya hai taki months 0 se start vala result na dein   
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `  // direct bhi use kr skte hian yeh method jese string ke liye krte thai

newDate.toLocaleString('default', {  // jo localstring ka format hai usko customise krna 
    weekday: "long",  
    
})
// complex hai thoda (aage bhi dhire dhire sir course me introduce krenge)

// AIRANB JESE CLPONE BANANE KE LIYE BOHOT FAYDA ATA HAI
