// This keyword hmara simply current context ko access krne ke liye kaam aata hai , like for eg .. niche username acess krne ke liye humne this lagaya hai , mtlb jo bhi hmare yeh particular scope ke andr username naam ka variable hoga vo access ho jayega
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//  YEH video mai bdia concept hai revison  ke liye dubara bhi dekh skte hain ,without any guilt
// user.welcomeMessage()
// user.username = "sam"
// now humne username ka context change krke sam krdia hai ab this sam ke context ko smjhega , that's it , yhi hai bus this keyword
// user.welcomeMessage()

// console.log(this);   // {} empty braces ayenge , but agr hum browser ke andr krenge toh windows ke bohot ssaare features khul jaate hain

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // functions ke andr hum this ko acces nhi kr payenge ,(undefined ) aa jayega
// }

// chai()

// const chai = function () { // same with , chahe function ko aise declare krlo
//     let username = "hitesh"
//     console.log(this.username);
// }

// ab function ko hum arrows ki from mai bhi likh skte hain 
//arrows ka syntax  ..... ()=>{} bas yhi hota hai
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // explixt return kr rkha hai yaha pe
// }

// const addTwo = (num1, num2) =>  num1 + num2 // yaha pe implict return kara hua hai

// const addTwo = (num1, num2) => ( num1 + num2 ) same here
// if hum parentheses ki jagah curly use krenge toh glt ho jayega, curly ke sath hume return likhna hi pdega

const addTwo = (num1, num2) => ({username: "hitesh"}) // isme humne object ko direct arrows vale method se dia hua hai


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()