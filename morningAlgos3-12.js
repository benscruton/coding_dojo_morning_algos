
function quickSort(arr){
    let pivot = arr[arr.length - 1];
    if(arr.length <= 1){
        return arr;
    }

    for(var i = 0, j = 0; i < arr.length; i++){
        if(arr[i] <= pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    
    const left = quickSort(arr.slice(0, j-1));
    const right = quickSort(arr.slice(j-1));
    
    const newRay = [];
    newRay.push(...left);
    newRay.push(...right);
    return newRay;

    // return quickSort(arr.slice(0, j-1)).concat(quickSort(arr.slice(j-1)));
}


const testArray = randomArrayNoPete(100, 200);
console.log(testArray);
console.log(quickSort(testArray));
console.log(testArray);




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