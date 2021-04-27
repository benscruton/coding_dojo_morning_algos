//Binary Search
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead 'divide and conquer'. Taking advantage of the fact that array is sorted. As always, only use built-in functions that you are prepared to recreate (write  yourself) on demand!


function binarySearch(arr, value){

    let start = 0;
    let end = arr.length;

    while(start < end){
        // console.log(`Looping: s=${start} & e=${end}`);

        const midpoint = Math.floor((start + end) / 2);
        if(arr[midpoint] === value) return true;

        if(arr[midpoint] < value){
            start = midpoint + 1;
        }
        else if(arr[midpoint] > value){
            end = midpoint - 1;
        }

    }
    
    return arr[start] === value;
}


let test = [0, 1, 2, 3, 4, 5, 6, 7];

console.log(binarySearch(test, "hello"));




// [    0,      1,      2,      3,      4,      5,      6,      7    ]
//      s                                                            e
// 
//  start: 0
// 
//  end: 8
// 

// for(variable declaration; condition; iterator) 
