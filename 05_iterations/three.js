// for of (yeh for of hmari advanced loop hai bohot use , ati hai , and easy nhi haiii , norml ke comparison mai)

// ["", "", ""]   //array ke andr strings ko kra skte hain print
// [{}, {}, {}]// simlarly arr. ke andr objects ko bhi kra skte hain


// basic syntax of (for of) loop
// for (const element of object) { // yaha pe elemnt mtlb vatiable hai like i de skte hain , hum naam , and object hmara javascript vala object nahi hai, yeh bas ek normal word ki tarah use kiya hua hai , ki konsi cheez ke andr hum iterate krna chahate hain

//simple.................
        
// }


const arr = [1, 2, 3, 4, 5]



for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps(isme bhi hum use kar skte hain ,(for of) , map mai dhyan rkhne vali baat yeh hai , isme bhi key:value mai data store hota hai, and ek key ki do entries nahi daal skte , it must be unique)

const map = new Map()  // Map() baaya hai
map.set('IN', "India")  // key,value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map); // exact object ki tarah key,value ki form mai hi print hoga

// if hume akeli key, ya fir akeli value print karani hai toh uske liye syntax mai thoda change ayega
for (const [key, value] of map) {   //naam dete time square bracket  mai likhna pdega , run krke dekh liyo
    // console.log(key, ':-', value);
}


//NOTE: object mai nhi legegi yeh for of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
     /// error maregi........... 
// } 