// inOrderCombinations (str, ... ?)
// return an array with all strings you could make with the characters from the given string, in the order that they're presented.

//for example:
    // "abc" > ["", "a", "b", "c", "ab", "ac", "bc", "abc"]
    // For an input with n characters, we should have 2^n elements in our array.


// A few suggestions:
    // Try testing this with a string of at least 4 characters.
    // Make sure to use recursion.
    // Default parameters may be useful to us.
    // The idea that lists, dictionaries, etc. are independent objects may be useful (i.e. "they exist outside of just the variable reference to them").

    // more parameters will be needed for the function.


function inOrderCombinations(str, result = []){
    if(str === ""){
        result.push("");
        return result;
    }

    let prevResult = inOrderCombinations(str.substring(0, str.length-1));

    for(let i=0; i<prevResult.length; i++){
        result.push(prevResult[i]);
        result.push(prevResult[i]+str[str.length-1]);
    }

    return result;
}


console.log(inOrderCombinations(""));
console.log(inOrderCombinations("a"));
console.log(inOrderCombinations("ab"));
console.log(inOrderCombinations("abc"));
console.log(inOrderCombinations("abcd"));


// given a new character, call inOrderCombinations on the rest of the string, and then add the new character to those results.

//  magic(char, previousResult){
//      Append char to every element in the previous result
//      Return array with all previous result elements, plus all the new ones.
//  }



function ryansSolution(input, partial = "", position = 0, output = []){
    if(position == input.length){
        output.push(partial);
    }
    else{
        ryansSolution(input, partial, position + 1, output);
        ryansSolution(input, partial + input[position], position +1, output);
        return output;
    }
}