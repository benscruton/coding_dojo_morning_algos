// zipArrays(arr1, arr2)
// given two arrays (assumed to be of equal length), return an object
// the object's keys are from array 1
// the object's keys are from array 1, and the values are from array 2
// ["x", "y", "z"], [3, 7, 9] ==> {x: 3, y: 7, z: 9}

var arr1 = ["x", "y", "z"];
var arr2 = [3, 7, 9];

function zipArrays(arr1, arr2){
    var newObj = {};
    for(var i = 0; i < arr1.length; i ++){
        newObj[arr1[i]] = arr2[i];
    }
    return newObj;
}

testObject = zipArrays(arr1,arr2);

// invertHash(input)
// given an object as your input, return a new object with inverted keys/values
// {x: 3, y: 7, z: 9} ==> {3: "x", 7: "y", 9: "z"}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// Option #1
function invertHash(input){
    var keysArray = Object.keys(input);
    var valuesArray = Object.values(input);
    
    var newObj = zipArrays(valuesArray, keysArray);

    return newObj;
}

console.log(testObject);
console.log(invertHash(testObject));


// Option #2
function invertHashAgain(input){
    var newObj = {}
    for (const key in input){
        newObj[input[key]] = key;
    }
    return newObj;
}

console.log(invertHashAgain(testObject));