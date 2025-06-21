const marvel_heros = ["thor", "iron"]
const dc_heros = ["superman", "batman", "flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // ["thor", "iron", ["superman", "batman", "flash"]]
// console.log(marvel_heros[2]); // ["superman", "batman", "flash"]
// console.log(marvel_heros[2][0]); // "superman"

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros); // ["thor", "iron", "superman", "batman", "flash"]

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros); // ["thor", "iron", "superman", "batman", "flash"]

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity); // flattens the array to a depth of 2
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("sumit")); // false
console.log(Array.from("sumit")); // covert string to array
console.log(Array.from({name:"sumit"})); // intersting not specified to covert by value or key 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
 


