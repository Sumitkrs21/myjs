
function SetUsername(username){
    //complex DB call
    this.username=username
}


function createUser(username,email,password){
    SetUsername.call(this,username)
    
    this.email=email
    this.password=password
}

const chai = new createUser("sumit","a@gmail.com","567")
console.log(chai);
