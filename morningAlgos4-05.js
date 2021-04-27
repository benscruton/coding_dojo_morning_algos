// Balance Point
// Write a function that takes an array and returns true if there exists a point where the sum of the values on the left side equal the values on the right

// Given: [1, 2, 3, 4, 10] return true
// 1+2+3+4 = 10


function balancePoint(arr){
    for(let i = 0; i < arr.length; i++){
        let sumLeft=0, sumRight=0;
        for(let j = 0; j < i; j++){
            sumLeft += arr[j];
        } 
        for(let j=arr.length - 1; j >= i; j--){
            sumRight += arr[j];
        }
        if(sumLeft === sumRight) return true;
    }
    return false;
}



function balancePointMoreEfficient(arr){

    // find the sum of the entire array
    let sum = 0, start = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }

    // go through the array one more time, checking if leftSum + arr[i] == rightSum - arr[i]
    for(let j=0; j<arr.length; j++){
        if(sum === start) return true;
        sum -= arr[j];
        start += arr[j];
    }
    return false;
}


// Balance Index
// Write a function that takes an array and returns the index where the sum of the values on the left side equal the values on the right and -1 if there is no such point

// Given: [5, -2, 4, 1, 2] return 2
// 5 + -2 = 1 + 2 


function balanceIndex(arr){
    for(let i = 0; i < arr.length; i++){
        let sumLeft=0, sumRight=0;
        for(let j = 0; j < i; j++){
            sumLeft += arr[j];
        }
        for(let j=arr.length - 1; j > i; j--){
            sumRight += arr[j];
        }
        if(sumLeft === sumRight) return i;
    }
    return -1;
}


function balanceIndexMoreEfficient(arr){
    let sum = 0, start = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    for(let j=0; j<arr.length; j++){
        sum -= arr[j];
        if(sum === start) return j;
        start += arr[j];
    }
    return -1;
}

const testArray = [0, 1, 2, 3, 4, 10];
console.log(balancePoint(testArray));