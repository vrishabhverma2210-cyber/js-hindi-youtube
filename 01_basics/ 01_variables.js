const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"   // scope ko ni pd pata var
accountCity = "Jaipur"  // bad pracice (prefer let and const only)
let accountState; 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// new way to print multiple things
 

// variables likhne se memory mai jagah ban jati hai jaha hum further work kr skte hain
