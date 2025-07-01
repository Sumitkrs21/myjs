//for of loop

[{},{},{}]


const arr =[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
}

const greetings ="hello World!"
for (const greet of greetings) {
   // console.log(`Each char is : ${greet}`);
}


//Maps 

const map = new Map()
map.set("JH",'Jharkhand')
map.set('DL','Delhi')
map.set('UP','UttarPradesh')
//console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
    
}

const myObject= {
    Game1:'NFS',
    Game2:'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }
