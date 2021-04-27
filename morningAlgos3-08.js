// SORTING!

// Today we are doing BUBBLE SORT.  It is not the most efficient.


var randomArr = randomArray(10, 100000);
var printedArray = Date.now();
console.log(randomArr);



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


bubbleSort(randomArr);
console.log(randomArr);
var sortedArray = Date.now()

console.log(`That took ${(sortedArray - printedArray) / 1000} seconds!\n`);





function randomArray(maxValue = 20, length = 10){
    array = [];
    for(let i=0; i<length; i++){
        array.push(Math.ceil(Math.random() * maxValue));
    }
    return array;
}