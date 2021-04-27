// You are given a string that may contain sequences of consecutive characters. 
// Create a function to shorten a string by including the character, then the number of times it appears.
// For "aaaabbcddd", return "a4b2c1d3". If result is not shorter (such as "bb"=>"b2"), return the original string.

function stringEncode (str){
    var output = "";
    var counter = 1;

    for(let i=0; i<str.length; i++){
        if(str[i+1] === str[i]){
            counter++;
        }
        else{
            output += str[i] + counter;
            counter = 1;
        }
    }
    
    if(str.length <= output.length) return str;
    return output;
}



// cracking the coding interview solution 
strCompression = str =>{
    let compString = "";
    let start = str[0];
    let counter = 1;
    for(let i = 0; i <= str.length-1; i++){
        if(str[i] !== str[i+1] || i === str.length-1){
            counter > 1 ? compString += start+counter : compString += start;
            start = str[i+1];
            counter = 1;
        }
        else counter++;
    }
    return compString;
}
strCompression("abbbccccdddddefffffssszzz4444333v");

// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".




// a    4    b    2    3    c    6
//                          ^                                       



// character + number

function stringDecode (str){
    var output = "";
    for(let i=0; i<str.length; i++){
        var howManyDigits = 1;

        while(i + 1 + howManyDigits < str.length && !isNaN(str[i + 1 + howManyDigits])){
            howManyDigits++;
        }

        const numOfChars = str.slice(i+1, i+1+howManyDigits);
        
        output += str[i].repeat(parseInt(numOfChars));
        i += howManyDigits;
    }
    return output;
}









var test = "aaaaaaaaaaaaaaaaaaaabbcccccccccccccccdddaaaaa";

//  a   3   b   2    3   c   1   4   d   3   a   5
//  ^           ^                    

var test2 = "abc";
var test3 = "aabbb";

console.log(stringEncode(test));
console.log(stringEncode(test2));
console.log(stringEncode(test3));


console.log(stringDecode(test));

console.log(stringDecodeWithCatches("a4i4a5u2e1s5h7c5i2a6s8e5f1"));



function stringDecodeWithCatches (str){
    const invalid = "Unable to decode the string:\n" + str;
    if(isNaN(str[str.length - 1])) return invalid;
    
    var output = "";
    for(let i=0; i<str.length; i++){
        var howManyDigits = 1;

        while(i + 1 + howManyDigits < str.length && !isNaN(str[i + 1 + howManyDigits])){
            howManyDigits++;
        }

        const numOfChars = parseInt(str.slice(i+1, i+1+howManyDigits));
        if(isNaN(numOfChars)) return invalid;

        output += str[i].repeat(numOfChars);
        i += howManyDigits;
    }
    if(output === "") return 
    return output;
}



const strCompRecursive = (str, compString = "", counter = 1, start = str[0], index = 0) =>{
    if(index === str.length-1){
        counter > 1 ? compString += start+counter : compString += start;
        return compString;
    } 

    if(start !== str[index+1]){
        counter > 1 ? compString += start+counter : compString += start;
        start = str[index+1];
        counter = 1;
    }
    else if(start === str[index+1]) counter ++;
    index ++;
    return strCompRecursive(str, compString, counter, start, index);
}
console.log( strCompRecursive("abbbccccdddddefffffssszzzmmmmyyyyv"));