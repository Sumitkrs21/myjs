// const coding =['js','ruby','java','cpp','py']

// const values = coding.forEach((item)=> {
//     //console.log(item);
//     return item
// } ) 
// console.log(values);  // it donot return any value but return unndefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const neNums = myNums.filter((nums)=>{
//     return  nums>4  // explicit return
// } )


// const newNums=[]
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

const books =[
    {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book two', genre: 'Non-fiction', publish: 1992, edition: 2008},
    {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-fiction', publish: 1989, edition: 2010},
    {title: 'Book five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book nine', genre: 'Non-fiction', publish: 1981, edition: 1989},
]

let userBook=books.filter((bk)=>bk.genre=='History')
userBook=books.filter((bk)=>bk.publish>1995 && bk.genre=='History')
console.log(userBook);

 
