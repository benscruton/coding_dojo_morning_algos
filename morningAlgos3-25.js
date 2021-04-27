// Return a new unsorted union multiset of two arrays; do not alter the originals. For [2,7,2,1,2] and [6,7,2,7,6,2], you could return [7,2,7,2,2,1,6,6]. How efficient can you be, for long arrays?

const {performance: perf} = require("perf_hooks");

function onionUnsortedArr(arr1, arr2){
    let hashmap1 = createMap(arr1);
    let hashmap2 = createMap(arr2);
    
    // convert hashmap1 into a hashmap of the onion:
    for(let prop in hashmap2){
        if(hashmap1.hasOwnProperty(prop)){
            hashmap1[prop] = (hashmap1[prop] > hashmap2[prop]? hashmap1[prop] : hashmap2[prop]);
        }
        else{
            hashmap1[prop] = hashmap2[prop];
        }
    }
    
    // at this point hashmap1 is a map of our onion
    let onion = [];
    for(let prop in hashmap1){
        for(let i = 0; i < hashmap1[prop]; i++) onion.push(prop);
    }

    return onion;
}

function createMap(arr){
    let hashMap = {}
    for(let i = 0; i < arr.length; i++){
        if(hashMap[arr[i]] == null){
            hashMap[arr[i]] = 1;
        }
        else{
            hashMap[arr[i]]++;
        }
    }
    return hashMap;
}


function randomArray(length = 10, maxValue = 20){
    array = [];
    for(let i=0; i<length; i++){
        array.push(Math.ceil(Math.random() * maxValue));
    }
    return array;
}

const array1 = randomArray(1000000, 2000000);
const array2 = randomArray(1000000, 2000000);

const sStart = perf.now();
const sams = unsortedUnion(array1, array2);
const sEnd = perf.now();
console.log(`Sam's took ${(sEnd - sStart)/1000} seconds`);

const oStart = perf.now();
const ours = onionUnsortedArr2(array1, array2);
const oEnd = perf.now();
console.log(`Ours took ${(oEnd - oStart)/1000} seconds`);

console.log(`Ours:  ${ours.length} long\nSam's: ${sams.length} long`);




// var array1 = [2,7,2,1,2],
//     array2 = [6,7,2,7,6,2];

// console.log(onionUnsortedArr(array1, array2));

// const hashMap = {};
// const arr = [1, 4, 5, 7, 8, 8, 4];

// for(let i = 0; i < arr.length; i++){
//     if(hashMap[arr[i]] == null){
//         hashMap[arr[i]] = 1;
//     }
//     else{
//         hashMap[arr[i]]++;
//     }
// }

// console.log(hashMap);

//      {
//          "1": 1,
//          "4": 2,
//          "5": 1,
//          "7": 1,
//          "8": 2,
//      }

// function unsortedIntersection(arr1, arr2) {
//     let intersection = [];
//     const hashMap = {};
//     // for each element of arr1, instantiate hashMap
//     // with value of one, increment for each additional sighting
//     for (let i = 0; i < arr1.length; i++) {
//         hashMap[arr1[i]] = (
//             hashMap[arr1[i]] == null
//             ? 1
//             : hashMap[arr1[i]] + 1
//         );
//     }
//     // for each element of arr2, look up element in hashMap 
//     // and push it to intersection if seen, also decrement hashMap's 
//     // stored value for the element
//     for (let j = 0; j < arr2.length; j++) {
//         if (hashMap[arr2[j]] != null && hashMap[arr2[j]] > 0) {
//             hashMap[arr2[j]]--;
//             intersection.push(arr2[j]);
//         }
//     }
//     return intersection;
// }


function unsortedUnion(arr1, arr2) {
    let result = [];

    let arr1Counter = {};
    // loop through elements of arr1 and 
    // add them to hashMap
    for (let n of arr1) {
        arr1Counter[n] = (arr1Counter[n] == null ? 1 : arr1Counter[n]+1);
    }

    let arr2DupCounter = {}
    // loop through elements of arr2, 
    // if new elements are encountered, add to result
    // if dups are encountered, add to dups
    for (let n of arr2) {
        if (arr1Counter[n] == null) {
            result.push(n);
            continue;
        }
        arr2DupCounter[n] = (arr2DupCounter[n] == null ? 1 : arr2DupCounter[n]+1);
    }

    // go through arr1Counter, and for each key k, 
    // add k to result max(arr1Counter[k], arr2DupCounter[k]) to result
    for (let n in arr1Counter) { 
        const count = (
            arr2DupCounter[n] == null
                ? arr1Counter[n]
                : Math.max(arr1Counter[n], arr2DupCounter[n])
        );
        for (let _ = 0; _ < count; _++) result.push(parseInt(n));
    }

    return result;
}




function onionUnsortedArr2(arr1, arr2){
    // Create a hash map of our first array:
    let hashmap1 = {}
    for(let i = 0; i < arr1.length; i++){
        if(hashmap1[arr1[i]] == null){
            hashmap1[arr1[i]] = 1;
        }
        else{
            hashmap1[arr1[i]]++;
        }
    }
    
    let onion = [];
    // Push everything from the second array into the onion.
    for(let i=0; i<arr2.length; i++){
        onion.push(arr2[i]);
        // If this value was also in the hashmap of the first array, decrement the hashmap.
        if(hashmap1[arr2[i]] > 0){
            hashmap1[arr2[i]]--;
        }
    }
    
    // The hashmap now represents Array 1 minus duplicate values from Array 2.  We just need to push what's left:
    for(let prop in hashmap1){
        for(let i = 0; i < hashmap1[prop]; i++) onion.push(parseInt(prop));
    }

    return onion;
}

function createMap(arr){
    let hashMap = {}
    for(let i = 0; i < arr.length; i++){
        if(hashMap[arr[i]] == null){
            hashMap[arr[i]] = 1;
        }
        else{
            hashMap[arr[i]]++;
        }
    }
    return hashMap;
}