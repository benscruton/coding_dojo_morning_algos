//Longest Palindrome

// Write a function that given a string will return the longest palindrome (including capitalization and punctuation) that is present.

// Given:
// "Yikes the racecar exploded!" => "e racecar e"
// "Hiya planet!" => "H"
// "go hang a salami, I'm a lasagna hog" => GOAT


// console.log(isPalindrome("racecar"))

const isPalindromeRecursive = (strInput, i = 0) =>{
    if(i >= strInput.length/2) return true;
    if(strInput[i] !== strInput[strInput.length-i-1]) return false;
    return isPalindromeRecursive(strInput, i+1);
}

const isPalindromeRecursiveTernary = (str, i=0) => (i >= str.length / 2? true : (str[i] !== str[str.length - i - 1]? false : isPalindromeRecursiveTernary(str, i+1)));

// console.log(isPalindromeRecursiveTernary("racecar"));
// console.log(isPalindromeRecursiveTernary("blarglb"));

// for(var j = 0; j < input.length - i + 1; j++){
//     var substring = input.slice(j, j+i)
//     if(isPalindrome(substring)){
//         return substring;
//     }
// }

function isPalindrome(strInput) {
    for (var i = 0; i < strInput.length / 2; i++) {
        if (strInput[i] != strInput[strInput.length-i-1]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(input){
    for (var i = input.length; i > 0; i--){
        for(var j = 0; j < input.length - i + 1; j++){
            var substring = ""
            for(var k = j; k < j + i; k++){
                substring += input[k];
            }
            if(isPalindrome(substring)){
                return substring;
            }
        }
    }
}




const  destroyHopesAndDreams = (input, i=input.length) => {
    const pal = (str, i=0) => (i >= str.length / 2? true : (str[i] !== str[str.length - i - 1]? false : pal(str, i+1))), inner = (i, str, j=0) => j >= str.length - i + 1 ? false : pal(input.slice(j, j+i))? input.slice(j, j+i) : inner(i, str, j+1);
    return inner(i, input) ?(inner(i, input)) : (destroyHopesAndDreams(input, i-1));
}








console.log(destroyHopesAndDreams("hello")); //ll cool j
console.log(destroyHopesAndDreams("margeletsnorahseesharonstelegram"));
console.log(destroyHopesAndDreams("margeletsnorahseesharonstelegrammmmmmmmm"));