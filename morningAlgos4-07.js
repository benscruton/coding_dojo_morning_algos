// REMOVE DUPLICATES



// new array version:

const {performance: perf} = require("perf_hooks");

const removeDupesNewArray = arr => {
    const newArrayNoDupes = [];
    for(let i=0; i<arr.length; i++){
        if(newArrayNoDupes.indexOf(arr[i]) === -1){
            newArrayNoDupes.push(arr[i]);
        }
    }
    return newArrayNoDupes;
}


// original array:
//      [   8,      0,      1,      7,      8,      8,      5,     ]
//      j:                          ^
//      i:  ^
//
// duplicates removed:
// 

const removeDupesInPlace = arr => {

    for(let i=0; i<arr.length; i++){

        for(let j=0; j<i; j++){

            if(arr[j] === arr[i]){
                [ arr[i], arr[arr.length - 1]] = [ arr[arr.length - 1], arr[i]];
                arr.pop();
                i--;
                break;
            }
        }
    }
}




const removeDupesInPlaceSwitchOrder = arr => {

    for(let i=0; i<arr.length; i++){

        for(let j=i+1; j<arr.length; j++){

            if(arr[j] === arr[i]){
                [ arr[j], arr[arr.length - 1]] = [ arr[arr.length - 1], arr[j]];
                arr.pop();
                j--;          

            }
        }
    }
}


// const testArray = [8,0,0,1,8,21,8,8,5,7,8,7,5];
const testArray = buildArray(100000, 400);
const testArray2 = [...testArray];
const testArray3 = [...testArray];

console.log(testArray); // log the whole array

const fStart = perf.now();
removeDupesNewArray(testArray);
const fEnd = perf.now();
console.log(`That took ${fEnd - fStart} milliseconds.`);

const sStart = perf.now();
removeDupesInPlace(testArray2);
const sEnd = perf.now();
console.log(`That took ${sEnd - sStart} milliseconds.`);

const tStart = perf.now();
removeDupesInPlaceSwitchOrder(testArray3);
const tEnd = perf.now();
console.log(`That took ${tEnd - tStart} milliseconds.`);




function buildArray(length, maxValue){
    const randArray = [];
    for(let i=0; i<length; i++){
        randArray.push(Math.floor(Math.random() * maxValue));
    }
    return randArray;
}