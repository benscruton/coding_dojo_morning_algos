//Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].


function onionSortedArray(arr1, arr2){
    var output = [],
        i = 0,
        j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            output.push(arr1[i])
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]){
            output.push(arr2[j]);
            j++;
        }
        else if(arr2[j] > arr1[i]){
            output.push(arr1[i]);
            i++;
        }
    }
    if(i < arr1.length) output = output.concat(arr1.slice(i));
    if(j < arr2.length) output = output.concat(arr2.slice(j));

    return output;
}

function onionSortedArrayFors(arr1, arr2){
    var output = [],
        i = 0,
        j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            output.push(arr1[i])
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]){
            output.push(arr2[j]);
            j++;
        }
        else if(arr2[j] > arr1[i]){
            output.push(arr1[i]);
            i++;
        }
    }
    for(; i<arr1.length; i++) output.push(arr1[i]);
    for(; j<arr2.length; j++) output.push(arr2[j]);

    return output;
}


// function noBranchOnion(arr1, arr2){
//     var output = [],
//         i = 0,
//         j = 0;

//     while(i < arr1.length && j < arr2.length){
//         output.push(arr1[i] * (arr1[i] <= arr2[j]) +
//                     arr2[j] * (arr2[j] < arr1[i]))

//         const addToi = (arr1[i] <= arr2[j]);
//         const addToj = (arr2[j] <= arr1[i]);
        
//         i += (addToi);
//         j += (addToj);
//     }

//     for(; i<arr1.length; i++) output.push(arr1[i]);
//     for(; j<arr2.length; j++) output.push(arr2[j]);

//     // if(i < arr1.length) output = output.concat(arr1.slice(i));
//     // if(j < arr2.length) output = output.concat(arr2.slice(j));

//     return output;
// }

function noIfsOnion(arr1, arr2){
    var output = [],
        i = 0,
        j = 0;

    while(i < arr1.length && j < arr2.length){
        const addToi = (arr1[i] <= arr2[j]);

        output.push(arr1[i] * (addToi) +
                    arr2[j] * (arr2[j] < arr1[i]))

        j += (arr2[j] <= arr1[i]);
        i += (addToi);
    }

    for(; i<arr1.length; i++) output.push(arr1[i]);
    for(; j<arr2.length; j++) output.push(arr2[j]);

    return output;
}


const arr1 = randArrayOrdered(10000000),
      arr2 = randArrayOrdered(10000000);


const {performance: perf} = require("perf_hooks");

// const oStart = perf.now();
// const oOnion = onionSortedArray(arr1, arr2);
// const oEnd = perf.now();
// console.log(`regular took ${(oEnd - oStart)/1000} seconds`);

// const fStart = perf.now();
// const fOnion = onionSortedArrayFors(arr1, arr2);
// const fEnd = perf.now();
// console.log(`for-loop version took ${(fEnd - fStart)/1000} seconds`);


// const bStart = perf.now();
// const bOnion = noBranchOnion(arr1, arr2);
// const bEnd = perf.now();
// console.log(`branchless took ${(bEnd - bStart)/1000} seconds`);

// console.log(`lengths:\n  o is ${oOnion.length}\n  f is ${bOnion.length}\n  b is ${bOnion.length}`);

function arraysEqual(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}





// console.log(`This is the Onion: ${noBranchOnion([1,2,2,2,7, 8, 10, 13, 16], [2,2,6,6,7, 9])}`);


// console.log(`This is the Onion: ${onionSortedArray([1,2,2,2,7], [2,2,6,6,7])}`);






// console.log(`This is the Onion: ${largeOnion}`);
// console.log(`it is ${largeOnion.length} long`);

function randArrayOrdered(length = 10){
    const output = [];
    let init = 1;
    for(let i=0; i<length; i++){
        init += Math.floor(Math.random() * 3);
        output.push(init);
    }
    return output;
}