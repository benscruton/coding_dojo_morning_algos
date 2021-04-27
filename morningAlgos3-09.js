// Insertion Sort:
    // Go through the array, left to right.  At each new value, all the values to the left will be sorted already but the values to the right will not.
    // For each value, place it where it belongs in the already-sorted stuff to the left, adjusting the other values appropriately.



// [  3,   2,   4,   10 ,  12,   1,   5,   6  ]
//                                              
//                                               
//                                              
//                                               
//           i                       
//   [  1,   2,   4,   10 ,  12,   3,   5,   6  ]
//                                               
//                                              


function insertionSort(sortme){
    if(sortme.length < 2){
        return;
    }

    for(let i = 1; i < sortme.length; i++){

        const temp = i;
        while(sortme[i-1] > sortme[i]){
            [sortme[i], sortme[i-1]] = [sortme[i-1], sortme[i]];
            i--;
        }
        i = temp;
            
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



function insertionSortNoTemps(sortme){
    if(sortme.length < 2){
        return;
    }
    
    for(let i = 1; i < sortme.length; i++){

        // const temp = i;
        while(sortme[i-1] > sortme[i]){
            [sortme[i], sortme[i-1]] = [sortme[i-1], sortme[i]];
            i--;
        }
        // i = temp;
            
    }
}




// Selection sort:
    // Go through the array and find the minimum value, and put it at the beginning.  Then, go through all the elements except the first, find the minimum, and put it at index 1.  Then again for index 2, and so on.



var testArray = randomArray();
var testArray2 = [...testArray];

const {performance} = require("perf_hooks");
const tStart = performance.now();
insertionSort(testArray);
const tStop = performance.now()


const nStart = performance.now();
insertionSortNoTemps(testArray2);
const nStop = performance.now()

console.log(`First took ${tStop - tStart} milliseconds\nSecond took ${nStop - nStart} milliseconds`);









function randomArray(length = 10, maxValue = 20){
    array = [];
    for(let i=0; i<length; i++){
        array.push(Math.ceil(Math.random() * maxValue));
    }
    return array;
}