// PASCAL'S TRIANGLE

const pascalTriangleRowFinder = (num) => {
    let triangle = [ [1] ];
    for(let i=1; i<=num; i++){
        let newRow = [1];
        for(let j=0; j<i-1; j++){
            let prevRow = triangle[i-1];
            newRow.push(prevRow[j] + prevRow[j+1]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }
    return triangle[num];
}

// console.log(pascalTriangleRowFinder(1));            // [ [1] ]
// for(let i=1; i<15; i++){
//     console.log(pascalTriangleRowFinder(i));
// }

// console.log(pascalTriangleRowFinder(12));     // [ 1, 12, ... , 12, 1 ]





//  [           [ 1 ],                      // length: 1
//            [ 1 , 1 ]                     // length: 2
//        [ 1  ,  2 ,  1],                  // length: 3
//     [1,    3,     3,    1  ],
//  [ 1,  4,     6,     4,    1 ] ]
// 
// 
// 
// 
// 
// 
// 















// let words = [
//     items,
//     materials
// ];

const showAllItems = (words, output = [], i = 0) => {
    if(i >= words[i].length) return output;
    for(let j = 0; j < words[i].length; j++){
        output.push(words[i] + " " + words[i+1][j]);
    }
    return showAllItems(words, output, i+=1);
}


// console.log(showAllItems([materials, items, modifiers]));



// RPG ITEMS:
const materials = ["wooden", "copper", "iron", "diamond", "plastic", "mythril"];
const items = ["sword", "bow", "axe", "hammer", "hunting horn", "rocket launcher", "BFG", "chainsaw", "spoon"];
const modifiers = ["of defense", "of attack", "of speed", "of agility", "of magic", "of luck", "of charisma", "that sucks a lot"];
const modifiers2 = ["", "part 2: Electric Boogaloo"];



const showAllItemsPart2 = (words, output = false, i = 1) => {
    if(i >= words.length) return output;

    let thisRound;
    if(!output){
        thisRound = words[0];
    } else {
        thisRound = [...output];
    }
    output = [];
    for(let j = 0; j < words[i].length; j++){
        for(let k=0; k<thisRound.length; k++){
            output.push(thisRound[k] + " " + words[i][j]);
        }
    }
    return showAllItemsPart2(words, output, i + 1)
}

console.log(showAllItemsPart2([materials, items, modifiers]));
// ["wooden", "copper", "iron", "diamond", "plastic", "mythril"]

// 

// console.log(showAllItems([materials, items]));

// showAllItems([materials, items, modifiers]);


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2 = [];
// console.log(arr1);

// console.log(arr2);



