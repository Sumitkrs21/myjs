// Reduce method

const myNums = [1,2,3]
const myTotal = myNums.reduce((acc,currval)=>{
    //console.log(`acc: ${acc} and cuurval : ${currval}`);
    
    return acc+currval
},0)
//console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);




