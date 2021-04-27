// PARTITION ARRAY
    // (this'll be step 1 of our QuickSort I believe)
    // Pick a pivot (we'll start at the back)
    // Go through your array with two iterators, advancing the head each time.  If the value at the head is equal to or less than the pivot, kick it to the back.

function arrayPartition(arr){
    let pivot = arr[arr.length - 1];

    
    for(var i = 0, j = 0; i < arr.length; i++){
        if(arr[i] <= pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
        
    }
    return j - 1;
}





function randomArray(length = 10, maxValue = 20){
    array = [];
    for(let i=0; i<length; i++){
        array.push(Math.ceil(Math.random() * maxValue));
    }
    return array;
}



function randomArrayNoPete(length = 10, maxValue = 20, repeat = true){
    array = [];
    if (!repeat){
        if (length > maxValue){
            return "If 'repeat' is false, the max value must be greater than the length!";
        }
    }
    for(let i=0; i<length; i++){
        var nextItem = Math.ceil(Math.random() * maxValue);
        if (!repeat){
            while (array.includes(nextItem)){
                var nextItem = Math.ceil(Math.random() * maxValue);
            }
        }
        array.push(nextItem);
    }
    return array;
}