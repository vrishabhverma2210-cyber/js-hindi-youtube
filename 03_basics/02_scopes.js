//var c = 300 // var hum iss liye nhi use krte because vo , scopes vali bhasha nhi smjhta issliye isko handle krna mushkil hai , similarly with direct declaration without let, var, const for eg=>(a=5) this also doesn't follow scope language
let a = 300 // yeh globally declare hua hai
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//{} curly braces mtlb generally scope hota hai (for eg for loop , if block etc.)but  objects vale braces nahi hote scope se related 
// DOM KE ANDR HUM SCOPE KO ORR JADA DETAIL MAI SMJHENGE

  // FUNCTIONS KE ANDR FUNCTIONS KE SCOPE KO DEKHTE HAIN
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // ACESS KR LEGA
    }
    // console.log(website); // yeh nhi kr poyega acess

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// two types se hum function ko declare kar skte hainnnnn

//TYPE 1 (WITHOUT ANY VARIABLE , ISMR HUM CALL BHI PEHLE MAAR SKTE HAINN, NO PROBLEM)
console.log(addone(5))

function addone(num){
    return num + 1
}


//TYPE2 (WITH VARIABLLE)) ISME HUM CALL PEHLE NAHI MAAR SKTE ERROR DEGA , BAAKI HUM AAGE JAAKE DETAIL MAI PDENGE
addTwo(5)
const addTwo = function(num){
    return num + 2
}