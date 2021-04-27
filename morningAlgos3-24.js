//Intersect two arrays to create an unsorted multiset.
//You can use an additional data structure type if it is helpful. 
//However, don’t alter the arrays; return a new one. 
//Given the arrays [6,7,2,7,6,2] and [2,7,2,1,2], return a new array containing [7,2,2] in any order.

const {performance: perf} = require("perf_hooks");

function randomArray(length = 10, maxValue = 20){
    array = [];
    for(let i=0; i<length; i++){
        array.push(Math.ceil(Math.random() * maxValue));
    }
    return array;
}

const arr1 = randomArray(30000, 60000),
      arr2 = randomArray(30000, 60000);

const arr3 = [6,7,2,7,6,2];
const arr4 = [2,7,2,1,2];


function intersectUnsortedArray (arr1, arr2) {
    let output = [];
    // make a copy of arr2 since we're going to alter it
    var copy2 = [...arr2];
    
    // go through arr1 one value at a time
    for(let i=0; i<arr1.length; i++){
        
        // check the second array for a matching value.
        for(var j=0; j<copy2.length; j++){

            // if we find it, remove that value from the second array and push it to the output.  Stop the "j" loop and start again on the next "i".
            if(arr1[i] === copy2[j]){
                copy2 = buildArraySkipOne(copy2, j);
                output.push(arr1[i]);
                break;
            }
        }
    }
    return output;
}

function buildArraySkipOne(arr, idx){
    const firstBit = arr.slice(0, idx);
    const secondBit = arr.slice(idx+1);
    return firstBit.concat(secondBit);
}



function curious (arr1, arr2, arrIndex = 0, output = []){
    if(arrIndex === arr1.length) return output;
    for(let i = 0; i <= arr2.length-1; i++){
        if(arr2[i] === arr1[arrIndex]){
            output.push(arr2[i]);
            arr2.splice(i, 1);
            break;
            
        }
    }
    arrIndex ++;
    return (curious(arr1, arr2, arrIndex, output));
}

//console.log(`Recursive output = [${curious(arr1,arr2)}]`);

// cop-out: 
    // copy arrays, sort them, then call the function from yesterday

// pick one of the arrays, go through each value, for each value check the second array for that value, and if we find it remove it from the second array and add it to the intersect array

// Create a new array to store the indices of where we find values, and skip over those indices when searching through the array in the future


function intersectUnsortedArray2 (arr1, arr2) {
    let output = [];
    const skipThese = [];
    // make a copy of arr2 since we're going to alter it
    // var copy2 = [...arr2];
    
    // go through arr1 one value at a time
    for(let i=0; i<arr1.length; i++){
        
        // check the second array for a matching value.
        for(var j=0; j<arr2.length; j++){

            // if we find it, remove that value from the second array and push it to the output.  Stop the "j" loop and start again on the next "i".
            if(!skipThese.includes(j) && arr1[i] === arr2[j]){
                skipThese.push(j)
                output.push(arr1[i]);
                break;
            }
        }
    }
    return output;
}


// console.log(`array1 length: ${arr1.length} array2 length: ${arr2.length}`);
// const i1Start = perf.now();
// console.log(intersectUnsortedArray(arr1,arr2).length);
// const i1End = perf.now();
// console.log(`First version took ${i1End - i1Start} milliseconds\n`);

// console.log(`array1 length: ${arr1.length} array2 length: ${arr2.length}`);
// const i2Start = perf.now();
// intersectUnsortedArray2(arr1, arr2);
// const i2End = perf.now();
// console.log(`Second version took ${i2End - i2Start} milliseconds\n`);

// console.log(`array1 length: ${arr1.length} array2 length: ${arr2.length}`);
// const rStart = perf.now();
// curious(arr1,arr2);
// const rEnd = perf.now();
// console.log(`Recursive version took ${rEnd - rStart} milliseconds\n`);
// console.log(`array1 length: ${arr1.length} array2 length: ${arr2.length}`);




// Sam's Solution:

function unsortedIntersection(arr1, arr2) {
    let intersection = [];
    const hashMap = {};
    // for each element of arr1, instantiate hashMap
    // with value of one, increment for each additional sighting
    for (let i = 0; i < arr1.length; i++) {
        hashMap[arr1[i]] = (
            hashMap[arr1[i]] == null
            ? 1
            : hashMap[arr1[i]] + 1
        );
    }
    // for each element of arr2, look up element in hashMap 
    // and push it to intersection if seen, also decrement hashMap's 
    // stored value for the element
    for (let j = 0; j < arr2.length; j++) {
        if (hashMap[arr2[j]] != null && hashMap[arr2[j]] > 0) {
            hashMap[arr2[j]]--;
            intersection.push(arr2[j]);
        }
    }
    return intersection;
}

console.log(`array1 length: ${arr1.length} array2 length: ${arr2.length}`);
const sStart = perf.now();
console.log(unsortedIntersection(arr1,arr2).length);
const sEnd = perf.now();
console.log(`Sam's version took ${sEnd - sStart} milliseconds\n`);


console.log(`array1 length: ${arr1.length} array2 length: ${arr2.length}`);
const i1Start = perf.now();
console.log(intersectUnsortedArray(arr1,arr2).length);
const i1End = perf.now();
console.log(`First version took ${i1End - i1Start} milliseconds\n`);

