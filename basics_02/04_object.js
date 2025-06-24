// as singlton object
const chatUser = new Object();

chatUser.name = "sumit";
chatUser.age = 20;
chatUser.email = "Sumit@gmail.com"
chatUser.isLoggedIn = false;
// console.log(chatUser);

//nesting objects // object as key in object
const regularUser = {
    email: "Some@gmail.com",
    fullname:{
           userfullname:{
                firstName: "Sumit",
                lastName: "Kumar"
            }
           }
    }
    // console.log(regularUser["fullname"]["userfullname"]["firstName"]); // Accessing nested object properties
    // console.log(regularUser.fullname.userfullname.firstName); // Another way to access nested object properties

    const obj1 = { 1:"a", 2:"b"}

    const obj2 = {3:"a", 4:"b"}

    const obj4 = {4:"a", 5:"b"}


    // const obj3 ={ obj1, obj2 }// Nesting objects //this is not concatenation, this is nesting of objects

    // const obj5 = Object.assign({},obj1, obj2, obj4); // Merging objects using Object.assign
    // console.log(obj5); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'b' }

    const obj3 = {...obj1, ...obj2, ...obj4}; // Merging objects using spread operator
    //   console.log(obj3);


    const users = [
        {
            id: 1,
            email:"S@gmail.com"
        }
        ,
        {
            id: 2,
            email:"a@gmail.com"
        }
        ,
        {
        id: 3,
        email:"d@gmail.com"
        }
    ]

    users[1].email
 console.log(chatUser);
 console.log(Object.keys(chatUser)); // Get keys of the object
    console.log(Object.values(chatUser)); // Get values of the object
    console.log(Object.entries(chatUser)); // Get key-value pairs of the object

    console.log(chatUser.hasOwnProperty('isLoggedIn')); // Check if the object has a specific property
    
 