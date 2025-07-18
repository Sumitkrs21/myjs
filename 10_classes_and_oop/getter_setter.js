class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password;  
    }

    set password(newPassword){
        this._password = newPassword;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(newEmail){
        this._email = newEmail;
    }
}

const sumit = new User("a@gmail.com","123")
console.log(sumit.email);
