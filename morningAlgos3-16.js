// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go".

function rotateString(str, num){
    if(num == 0 || num == str.length) return str;
    
    while(num < 1){
        num += str.length;
    }
    while(num > str.length){
        num -= str.length;
    }
    var start = str.length - num;
    
    var output = "";
    for(let i = 0; i < str.length; i++){
        output += str[start];
        if(start >= str.length - 1){
            start = 0;
        }
        else{
            start++;
        }
    }
    return output;
}



// Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first.

function isRotation(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i < str1.length; i++){
        const nextTest = rotateString(str2, i);
        if(nextTest === str1){
            return true;
        }
    }
    return false;
}

// const sameAsExample = "mpleexa";
// const notSame = "maxpleiwu";
// const notSame2 = "1234567";

// console.log(isRotation(testString, sameAsExample));
// console.log(isRotation(testString, notSame));
// console.log(isRotation(testString, notSame2));
