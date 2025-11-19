// const coding = ["js", "ruby", "java", "python", "cpp"]


// now (for each) vali loop ka drwback smjhte hain and usko overcome krne ke liye jo filter method use hoga vo bhi smjhte hain

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item    // return yaha pe kr toh re hain but actual mai nahi hoga , undefined rahega
// } )

// console.log(values);  // undefined(yhhi drwback hai for each ki)
 //now hume if variable mai store krana ho , toh filter ka use krte hain
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum=myNums.filter((num)=>(num>5)) // direct implict way mai condition likh di (samne hi) , implictically kiya hai issliye return likhne ki bhi jrurt nahi pdi
// functions mai pdi thi yeh baat, mostly beginers galti krte hain yeh
// if curly braces mai likhoge toh return keyword likhna must hoga
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
  
// Now smjhte hain if hume (for each) vale method se hi variable mai kuch add krna ho toh kese krenge
// const newNums = []  // isme krenge add

// myNums.forEach( (num) => { // simple hai seperate condition lagake krnge
//     if (num > 4) {
//         newNums.push(num) // yeh push vali toh basic array ki property hoti hi hai
//     }
// } )

// console.log(newNums);

  // manlo hume data fetch krne ke liye bola hai books ka toh, vo dekhte hain ki kese krenge(bohot use hoga yeh)
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
                            // simple cdn lga rkhi hai filter use krke
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
}) // do codnitons lga di
  console.log(userBooks);