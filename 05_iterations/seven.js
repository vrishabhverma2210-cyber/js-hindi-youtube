// isme map smjhaya hai , and also ki yeh filter se kese alg hai
// filter mai cdn hoti hai , but isme hum task dete hain koi na koi krne ko


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


// . laga ke twinning bhi kar skte hain, like we can do multiple tasks
const newNums = myNumers
                .map((num) => num * 10 )// jo iska resulthoga bhi niche jayega
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
