const accountId = 144553
let accountEmail = "sumitzr1977@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed
accountEmail = "h@gmail.com"
accountPassword = "123442"
accountCity = "Delhi"
console.log(accountId);
/*
prefer not to use var
due to issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
