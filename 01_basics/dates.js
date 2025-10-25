// dates (thoda complex hai because milliseconds mai kaam krta hai, but utna bhi  nahi hai)
//(ek shortcut hai(temporal) but abhi vo saare browser pe impemnt nhi hua hai iss liye direct use nahi kr skte), manually hi smjhte hain
let mydate=new Date()
console.log(mydate) // kuch unreadable sa content aayega
console.log(mydate.toString())
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
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// let myCreatedDate = new Date("2023-01-14") // not used in india
let myCreatedDate = new Date("01-14-2023") // jan 14,2023
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
// complex hai thoda (aage bhi dhire dhire sir course me introduce krenge)
