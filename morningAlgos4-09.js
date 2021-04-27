// Flatten Array

// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// // complete the following function
// function flatten(arr2d) {
//     var flat = [];
//     // your code here
//     return flat;
// }
    


// console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


const flattenArrayOneLevel = arr => {

    const flattenedArray = [];

    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arr[i].length; j++){

            flattenedArray.push(arr[i][j]);

        }

    }

    return flattenedArray;

}







const flatRec = (arr,output = [], i=0) =>{
    if(i === arr.length) return output;
    let j = 0;
    if(typeof arr[i] === 'object'){
        while(j < arr[i].length){
            output.push(arr[i][j]);
            j++;
        }
    }
    else if(typeof arr[i] === 'string') output.push(arr[i]);
    else if(typeof arr[i] === 'number') output.push(arr[i]);
    return flatRec(arr, output, i+=1);
}










const flatRec2 = (arr,output = [], i=0) =>{
    if(!Array.isArray(arr)) return [arr];
    if(i === arr.length) return output;
  	if(!Array.isArray(arr[i]) ) output.push(arr[i]);
  	else output = output.concat(flatRec2(arr[i]));
    return flatRec2(arr, output, i+1);
}

console.log(flatRec2("hello"));









const flattenMe = [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ];

const flattenMe2 = [ 
    4, "what",
    [2, {a: 5, c: [4, 5, false]}, 5, 8],
    "blarg", false,
    [3, 6, [4, true, ["hi", 3], 12], 1],
    5, 12, "hello",
    [5, 7, [], 7] ];

console.log(flatRec2(flattenMe2));

// const empty = [];
// empty.concat([4, 5]);
// console.log(empty);


// console.log(Array.isArray(flattenMe));
// console.log(Array.isArray(flattenMe[0]));
// console.log(Array.isArray(flattenMe[2]));