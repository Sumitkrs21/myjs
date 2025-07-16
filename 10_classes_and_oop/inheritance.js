class User{
    constructor(username){
         this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const chai  = new Teacher("sumit","g@gmail.com","1234")
chai.addCourse()

const tea= new User("rohit")
tea.logMe()
chai.logMe()
console.log(chai instanceof User);
