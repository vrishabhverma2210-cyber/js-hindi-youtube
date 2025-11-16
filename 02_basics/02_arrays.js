const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // isme DC_heroes ke elemnt ki taarah add hue hai marvel mai mtlb merge nhi hua

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // because merge nhi hua , dc vala ek element ki arah consider kra jara hai , isliye kuch iss tarah extract krna pdega data ko

// const allHeros = marvel_heros.concat(dc_heros) // concat hmara dhang se merge krega dono ko and ek third array form hoga jisme dono ke heroes honge
// console.log(allHeros);'

 // yeh bhi ek method hai concat ki jagah use krte hain merge krne ke liye
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// multiple arrays ko smbhalne ke liye (arrays ke andr mutiple arrays (kyi methods hai for handling that))
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 
const real_another_array = another_array.flat(Infinity) //vese toh(bracket ke andr jitna deep(complex) arrays hai, vo dalna hota hai but for safeside hum infinity daal dete hain)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // true or false dega
console.log(Array.from("Hitesh")) // from use krke direct hum  array mai convert kr skte hain
console.log(Array.from({name: "hitesh"})) // interesting 
// key value ko array mai change krne ka koi or way hota hai aage jaake pdenge

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // of bhi mutiple values ko arrays mai dalne ke liye use hota hai


// arrays mai hor bhi kyi methods hai sikhne ko , but filhal itna kafi hai
