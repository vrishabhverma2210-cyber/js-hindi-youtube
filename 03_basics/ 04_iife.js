// Immediately Invoked Function Expressions (IIFE)
//An IIFE is a function expression in JavaScript which is executed immediately right after being defined.
// yeh hmara function ko immediately invoked krne ke kaam ata hai and also global variables vaale  scope ke pollution se bachane ke kam bhi ata hai

// do iife ko invoked krne ke liye , bich mai semicolon(;) dalna jruri hai  
// iife ka syntax simple hai ek toh (pure function ko hi wrap kr dia)( paramters) aise smjhna hai bas  ()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { //()=>{}
    // yeh  unamed iife hai , like arrows vale methods se kiya hai
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // dusre vale parenthese aise hi work krenge



//1. Creating private scope & avoiding polluting the global namespace

// IIFEs were widely used to create a local scope so that variables inside wouldn’t leak into the global (or outer) scope
//2. Encapsulating logic you want to run once

//If you have some initialization logic or something you want to execute immediately (just once) and you don’t really need to reuse that function