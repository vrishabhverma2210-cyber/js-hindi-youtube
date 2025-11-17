 // basic vhi synatax c++ vala (parameters jo function defn ke tym and arguments jo calling ke time dete hain)
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // simple call without any argument

// function addTwoNumbers(number1, number2){ // parameters

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
 
// agr niche se koi argument nhi aya toh bydefault sam execute ho jayega
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){ // (...num1) operator is known as  rest operator yeh multiple value ko sirf ek parameter se print karane ke liye kaam ata hai
    return num1 // val1=200 hojayega , val2=400, and num1 jo bcha hai vo ho jayega 500 and 2000
}


// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = { // object ko function mai dalna
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // andr parameter ka naam toh kuch bi de skte hain
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) // direct bhi object ko argument ki tarah pass kar skte hain

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // same direct array ko argument ki tarah pass kr dia
