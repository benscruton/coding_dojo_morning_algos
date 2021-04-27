// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"].
// Do Not Use Built In Functions.

// "Life is ...."

function stringToWordArray(input, array = []){
    if(input.length <= 0){
        return array;
    }
    var beforeSpace = "";
    var afterSpace = "";

    // go through the array, looking for a space
    for(let i = 0; i < input.length; i++){
        // when we find a space:
        if(input[i] === " " || i === input.length){
            // add everything up to the index where the space is to beforeSpace
            for(let j = 0; j < i; j++){
                beforeSpace += input[j];
            }
            // build up the rest of the string after the space
            for(let j = i+1; j < input.length; j++){
                afterSpace += input[j]
            }
            // if we found a space, break the for loop
            break;
        }
    }

    if(beforeSpace.length > 0){
        array.push(beforeSpace);
    }

    stringToWordArray(afterSpace, array);

    var endOfString = false;
    for(let i = 0; i < afterSpace.length; i++){
        if(afterSpace[i] === " "){
            endOfString = true;
            break;
        }
    }
    if(!endOfString && afterSpace !== ""){
        array.push(afterSpace);
    }
        
    return array;
}


var testString = "Life is a thing we do";
// console.log(testString);
// console.log(stringToWordArray(testString));

    
// Reverse Word Order
    // Return a string with the words in reverse order.  "Life is like a box of chocolates" > "chocolates of box a like is Life"

function reverseString(input){
    var output = ""
    const wordArray = stringToWordArray(input);
    for(let i=wordArray.length - 1; i >= 0; i--){
        output += (wordArray[i] + " ")
    }
    var trimmedOutput = "";
    for(let i = 0; i < output.length - 1; i++){
        trimmedOutput += output[i]
    }
    return trimmedOutput;
}

console.log(testString);
var arr = [reverseString(testString)];
console.log(arr);