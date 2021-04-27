// FIND THE MAX VALUE OF AN ARRAY

function maxValueArray(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
    return max;
}



// RETURN AN ARRAY OF ODD NUMBERS, 1 TO 255


// make a function, returnArrayOfOdds
// set up a loop
    //start at 1
    //end at 255
    //go up one each time
        //if it's odd, log it


function returnArrayOfOdds(){
    var array = [];
    for(var i=1; i<=255; i+=2){
        array.push(i);
    }
    return array;
}

// console.log(returnArrayOfOdds());


