const user = {
    username: "sumit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Detail from database");
        // console.log(`username:${this.username}`);// last mai undefined aayega kyu ki methods calling mai kuch return nahi a raha hai
        //return `username:${this.username}`  //isme nahi ayage undefined
        console.log(this);
        
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
        this.username = username;
        this.loginCount=loginCount
        this.isLoggedIn=isLoggedIn

        this.greeting =function(){
            console.log(`welcome ${this.username}`);
        }
         return this
}

const userOne = new User("sumit",12,true)
const userTwo = new User("rohit",12,false)
console.log(userOne.constructor);
// console.log(userTwo);






