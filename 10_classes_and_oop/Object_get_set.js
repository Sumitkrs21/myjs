const User ={
    _email: "s@hs.com",
    _password: "12345",


    get email() {
        return this._email.toUpperCase();
    },
    set email(newEmail) {
        this._email = newEmail;
    }
}

const tea = Object.create(User)
console.log(tea.email);
