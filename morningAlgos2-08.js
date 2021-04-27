// reverseString(input)

// returns the given string, but backwards!
// function should return a string, not an array
// "hello" --> "olleh"
// "Sample" -- "elpmaS"
// "a" --> "a"
// no need to turn input into an array.  Definitely don't turn it into an array and then call .reverse()



// Functions that may be useful:
//      concat(): joins two strings into a single string
//      charAt(): 

var test1 = null;
var test2 = "Sample";


function reverseString(input){
    var output = "";
    input = "" + input;
    for(let i = (input.length-1); i>=0; i--){
        output += input[i];
        console.log[i];
    }
    return output;
}

console.log(test1);
console.log(reverseString(test1));

console.log(typeof(test1));
console.log(typeof(test2));