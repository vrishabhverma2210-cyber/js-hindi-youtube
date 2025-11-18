// (for in) loop padenge hum isme , object ki iteration ke liye , array bhi ho jata hai iterate ,  but the fact is (for in) hume direct key deta hai, value hume khud hi fetch krni pdti hai , same in array also... indexes deta hai
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); // AISE HUME KEY KI VALUES BHI FETCH KRNI PDEGI
}

// ARRAYS PE BHI LAG JATI HAI (FOR IN) LOOP
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// SAME MAP PE FOR IN NHI LEGEGI , BECAUSE MAP IS NOT ITERABLE , ISKI DOCUMENTATION PDNI MUST HAI
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }