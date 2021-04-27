// MERGE SORT:
    // First, write a function that will combine two already-sorted arrays into a single, already-sorted array
    // 


//Combine Arrays
// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?


function combineArrays(arr1, arr2) {
    var newArr = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift());
        } else {
            newArr.push(arr2.shift());
        }
    }
    if(arr1.length > 0){
        newArr.push(...arr1);
    } else if(arr2.length > 0){
        newArr.push(...arr2);
    }

    return newArr;
}



function mergeSort(arr){
    // BASE CASE
    if(arr.length < 2){
        return arr;
    }
    // FIRST, slice all of our arrays
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));

    return combineArrays(left, right);
}




function mergeSortOneLine(arr){
    // BASE CASE
    if(arr.length < 2){
        return arr;
    }
    return combineArrays(mergeSort(arr.slice(0, Math.floor(arr.length/2))), mergeSort(arr.slice(Math.floor(arr.length/2))));
}











// console.log(mergeSort([1,3,1,23,45,3,21,4,7,12,15]));

var longArray = randomArray(40000, 400000);
var longArrayCopy = [...longArray];
var longArrayCopy2 = [...longArray];
var longArrayCopy3 = [...longArray];





const { performance } = require("perf_hooks");
// console.log(longArray);

const mStart = performance.now();
mergeSortOneLine(longArray);
const mEnd  = performance.now();

console.log(`Merge took ${(mEnd - mStart) / 1000} seconds!`);


const sStart = performance.now();
selectionSort(longArrayCopy);
const sEnd = performance.now();

console.log(`Select took ${(sEnd - sStart) / 1000} seconds!`);



const iStart = performance.now();
insertionSort(longArrayCopy2);
const iEnd = performance.now();

console.log(`Insert took ${(iEnd - iStart) / 1000} seconds!`);


const bStart = performance.now();
bubbleSort(longArrayCopy3);
const bEnd = performance.now();

console.log(`Bubble took ${(bEnd - bStart) / 1000} seconds!`);





















function insertionSort(sortme){
    if(sortme.length < 2){
        return;
    }

    for(let i = 1; i < sortme.length; i++){

        const temp = i;
        while(i > 0 && sortme[i-1] > sortme[i]){
            [sortme[i], sortme[i-1]] = [sortme[i-1], sortme[i]];
            i--;
        }
        i = temp;  
    }
}

function samInsertionSort(arr) {
    if (arr.length <= 1) return;
    for (let i = 1; i < arr.length; i++) {
        // for each iteration, move the current element back until 
        // in the correct position
        let temp_idx = i; // position of current element 
        while ( temp_idx > 0 && arr[temp_idx - 1] > arr[temp_idx]) {
            const temp_val = arr[temp_idx-1]; // store temp val
            // swap
            arr[temp_idx-1] = arr[temp_idx];
            arr[temp_idx] = temp_val;
            temp_idx--; // decrement temp index
        }
    }
}


function selectionSort(sortme){

    for(let i = 0; i < sortme.length; i++){
        var mindex = i
        for(let j=i; j<sortme.length; j++){
            if(sortme[j] < sortme[mindex]){
                mindex = j;
            }
        }
        [sortme[i], sortme[mindex]] = [sortme[mindex], sortme[i]];
    }
}


function bubbleSort(array){
    var swap = true;
    while(swap){
        var swap = false;
        for(let i=0; i<array.length-1; i++){
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
                swap = true;
            }
        }
    }
    // return array;
}






function randomArray(length = 10, maxValue = 20, repeat = true){
    array = [];
    if (repeat){
        if (length > maxValue){
            return "try again, smart-aleck (max value must be higher than length!)";
        }
    }
    for(let i=0; i<length; i++){
        var nextItem = Math.ceil(Math.random() * maxValue);
        if (repeat){
            while (array.includes(nextItem)){
                var nextItem = Math.ceil(Math.random() * maxValue);
            }
        }
        array.push(nextItem);
    }
    return array;
}