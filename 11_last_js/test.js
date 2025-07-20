// const myArr=[]
// %DebugPrint(myArr);


// continuous, Holey 

// SMI(small Integer) array
// Packed elements
// Double (float,string,function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS // only having whole numbers

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS 

arrTwo.push("3")
// PACKED_ELEMENTS

arrTwo.push[10]=11
// HOLEY_ELEMENTS // sparse array, not packed

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);
console.log(arrTwo[19]);

//bound check
// hasOwnProperty(arrTwo, 9) // false
// hasOwnProperty(arrTwo.prototype, 10) // false
// hasOwnProperty(Object.prototype, 10) // true

// holes are very expensive in js


const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

//SMI > DOUBLE > PACKED

// H_SMI > H_DOUBLE > H_PACKED

// If once downgraded to HOLEY, it will never go back to PACKED

const arrFour = new Array(3)
//just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0]='1' // HOLEY_ELEMENTS
arrFour[1]='2' // HOLEY_ELEMENTS
arrFour[2]='3' // HOLEY_ELEMENTS


const arrFivr = []
arrFivr.push('1'); // PACKED_ELEMENTS
arrFivr.push('2'); // PACKED_ELEMENTS       
arrFivr.push('3'); // PACKED_ELEMENTS


const arrSix =[1, 2, 3, 4, 5];
arrSix.push(NaN); // PACKED_DOUBLE_ELEMENTS
arrSix.push(infinity); // PACKED_DOUBLE_ELEMENTS


//for,for-of,for-in,forEach,map,filter,reduce   use this over your own for loop
