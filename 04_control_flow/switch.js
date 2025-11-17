// switch statements bhi bohot use aati hai
// yeh basic format hai iska
// switch (key) { // jisko humne baar baar check krna hota hai usko hum key ki jagah rkhte hain
//     case value:
        
//         break;

//     default:
//         break;
// }
 // shortcut to make multiple case vala block , select , then press shift+alt+scroll down (simple)
 const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}