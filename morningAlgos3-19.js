//Return whether a string contains all letters in the English alphabet (upper or lower case). 
//For "How quickly daft jumping zebras vex!", return true. 
//For "abcdef ghijkl mno pqrs tuv wxy, not so fast!", return false.


const foundLetter = {"a": false,"b": false,"c": false,"d": false,"e": false,"f": false,"g": false,"h": false, "i": false,"j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false}


const isPangram = (str) => {
    const foundLetterCopy = {...foundLetter};

    if(str.length < 26) return false;
    for (let i = 0; i < str.length - 1; i ++){
        for(let key in foundLetterCopy){
            if(str[i].toLowerCase() === key){
                foundLetterCopy[key] = true;
            }
        }
    }

    var sum = 0;
    for(let key in foundLetterCopy){
        sum += foundLetterCopy[key];
    }
    return (sum === 26);
}

const isPangram2 = (str) => {
    
    const foundLetterCopy = {...foundLetter};

    if(str.length < 26) return false;
    for (let i = 0; i < str.length - 1; i ++){
        for(let key in foundLetterCopy){
            if(str[i].toLowerCase() === key){
                foundLetterCopy[key] = true;
            }
        }
    }
    var sum = 0;
    for(let [,v] of Object.entries(foundLetterCopy)){
        sum += v;
    }
    return (sum === 26);
}


function isPangramRecursive1(str, index=0){
    var abc = "abcdefghijklmnopqrstuvwxyz"
    let newStr = str.toLowerCase();
    if(newStr.length < 26) return false;
    else if(abc.includes(newStr[index]) && index === newStr.length-1) return true;
    else if(abc.includes(newStr[index])) index ++;
    else if(newStr[index] === " " || /[,.?-_!]/.test(newStr[index])) index++;
    else if(newStr[/[,.?-_!]/].test(newStr[str.length - 1])) return; 
    console.log(index);
    return isPangram(newStr, index);
}
// isPangramRecursive1("How quickly daft jumping zebras vex!");


function recursivePangram(string, char = string[string.length - 1], foundLetter = {"a": false,"b": false,"c": false,"d": false,"e": false,"f": false,"g": false,"h": false, "i": false,"j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false}){
    
    // if we're at the end of the string, go ahead and sum the "true"s in our object and return that all the way up the chain
    if(string.length === 0){
        return (Object.values(foundLetter).reduce( (a, b) => a + b)) === 26;
    }

    // if the letter is in the array, but currently showing as false, we'll flip it to true.
    if(foundLetter.hasOwnProperty(char) && !foundLetter[char]){
        foundLetter[char] = true;
    }

    // Call the function using the first character as char, and the rest of the string as the new string.
    return recursivePangram(string.substring(1), string[0].toLowerCase(), foundLetter)
}


function recursivePangramCondensed(string, char = string[string.length - 1], foundLetter = {"a": false,"b": false,"c": false,"d": false,"e": false,"f": false,"g": false,"h": false, "i": false,"j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false}){
    if(string.length === 0) return (Object.values(foundLetter).reduce( (a, b) => a + b)) === 26;
    if(foundLetter.hasOwnProperty(char) && !foundLetter[char]) foundLetter[char] = true;
    return recursivePangram(string.substring(1), string[0].toLowerCase(), foundLetter)
}




var test1 = "How quickly daft jumping zebras vex!",
    test2 = "abcdef ghijkl mno pqrs tuv wxy, not so fast!",
    test3 = "A wizard's job IS TO VEX CHUMPS QUICKLY in fog.",
    test4 = "gThe quick brown fox jumps over the lazy do";


console.log(`Test 1 = ${recursivePangramCondensed(test1)}`);
console.log(`Test 2 = ${recursivePangramCondensed(test2)}`);
console.log(`Test 3 = ${recursivePangramCondensed(test4)}`);


// var ret = "data-123".replace('data-','');
// console.log(ret);   //prints: 123