//array

const myArr = [0,1, 2, 3, 4, 5];
const myHeros = ["Superman", "Batman"]
const myArr2 = new Array(1,3,4) // creates an array of length 6 with undefined values
console.log(myArr2[2]); // 3


//Array methods
// myArr.push(6); // adds 6 to the end of the array
// myArr.push(7);
// myArr.pop(); // removes the last element (7)
// myArr.unshift(9); // adds 9 to the beginning of the array
// myArr.shift(); // removes the first element (9)
// console.log(myArr);
// console.log(myArr.includes(0))
// console.log(myArr.indexOf(3)); // returns the index of the first occurrence of 0


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr); // converts the array to a string
// console.log(typeof newArr); // string

//Slice, splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C" , myArr);







 
