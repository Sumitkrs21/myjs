// how to define properties with getters and setters in JavaScript

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty (this,'email',{
         get: function() {
            return this._email.toUpperCase();
         },
         set: function(newEmail) {
            this._email = newEmail;
         }
    })

    Object.defineProperty (this,'password',{
         get: function() {
            return this._password.toUpperCase();
         },
         set: function(newpassword) {
            this._password = newpassword;
         }
    })
}

const sumit = new User("SumitAjam.com", "123");
console.log(sumit.email);