// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].


function intersectSortedArray(arr1, arr2){
    var output = [],
        i = 0,
        j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            output.push(arr1[i])
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]) j++;
        else i++;
    }
    return output;
}



function recursiveIntersect(arr1, arr2, intersect = [], i=0, j=0){
    if(i >= arr1.length || j >= arr2.length){
        return intersect;
    }

    if(arr1[i] === arr2[j]){
        intersect.push(arr1[i])
        i++;
        j++;
    }
    else if(arr1[i] > arr2[j]) j++;
    else i++;

    return recursiveIntersect(arr1, arr2, intersect, i, j);
}