const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography,network call
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})



new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("async task two");
      resolve()
    },1000)
}).then(function () {
    console.log("asyn 2 is resolved");
    
})


const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function () {
        resolve({username: "sumit",email:"s@gmail.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"rohit",password:"123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

 promiseFour
 .then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
   console.log(username);
}).catch(function(error){
     console.log(error);
     
}).finally(()=>{
    console.log("The Promise is either resolved  or rejected");
})


const promiseFive =  new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    }
   
// }
// getAllUsers()


fetch("https://api.github.com/users/Sumitkrs21")
.then((response)=>{
   return response.json()
})
.then((data)=>{
  console.log(data);
  
})
.catch((error)=>{
  console.log(error);
})


