// Reduce ke baare mai smjhengeke hum thoda accumaator,current value , inital value vgera vgera, MDN se start kiya hai pdhna sir ne iska syntax like ki accumulator kab kab update ho raha hai

// basic syntax 
// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


// pehle function se reduce ka format smjhte hain
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`); // yeh step toh sath sath values check krne ke liye likha hai
//     return acc + currval
// }, 0) // starting 0 dena jruri hai

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
 // by arrow method direct
console.log(myTotal);

// direct sum add krna ho jab bohot use ki jada hai yeh reduce loop
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)// dhyan se smjh kkyon likha hai yeh item.price// upr mdn vale example se relate krke dekh 

console.log(priceToPay);

// hara loop ki apni alg alg functionality hoti hai toh vo toh smjhna odega hi hume

//....  THat's it , loop mushkil nahi hai asan hai , if dikat aaye MDN ya fir video hi dubRA DEKH lio ,,,, again start krne mai no shame

