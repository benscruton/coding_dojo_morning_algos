// isPalindrome(input): return "true" if input is a palindrome, and "false" if it isn't
// Capitalization and spacing matters for this.  racecar IS a palindrome, Racecar or race car ARE NOT palindromes.

function isPalindrome(input){
    for(let i = 0; i < input.length / 2; i++){
        if(input[i] != input[input.length - 1 - i]){
            return false;
        }
    }
    return true;
}

// longestPalindrome(input): find and return the longest palindrome within the string.
// "abacabd" should return "aba", or "aca".
// try "qwertttreqwerewy" and see if your repeated letters throw it off


function longestPalindromeOldVersion(input){
    var substring = ""

    for(var j = 0; j < input.length; j--){
        substring = ""
        for(var i = 0; i < input.length - j; i++){
            substring += input[i];
            console.log(substring);
        }

        if(isPalindrome(substring)){
            return substring;
        }
    }
}

var test = RyansLongestPalindrome("eee")

if(test == ""){
    console.log("it's empty!");
}
else{
    console.log(test);
}





function longestPalindromeWithLogs(input){

    // This gives us how long our string is.
    for (var i = input.length; i > 0; i--){
        console.log(`i is ${i}`);

        // This gives us the number of possible strings of length i we can make, and resets "substring" to be empty.
        for(var j = 0; j < input.length - i + 1; j++){
            var substring = ""
            console.log(`j is ${j}`);

             // This builds the string, starting at "j" (increasing one at a time) and ending once we have added "i" characters.
            // for(var k = j; k < j + i; k++){
            //     substring += input[k];
            // }
            substring = input.slice(j, j+i)
            console.log(substring);


            // If the substring in question is a palindrome, we'll go ahead and return it.
            if(isPalindrome(substring)){
                console.log("GOT IT!");
                return substring;
            }

            // If not, we move on to the next starting point "j" for a string of length "i".
        }
    }
}




function longestPalindromeNoSlice(input){
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



function longestPalindromeWithSlice(input){
    for (var i = input.length; i >= 0; i--){
        for(var j = 0; j < input.length - i + 1; j++){
            var substring = input.slice(j, j+i)
            if(isPalindrome(substring)){
                return substring;
            }
        }
    }
}


function RyansLongestPalindrome(input) {
    if (input.length == 0) {
      return "";
    }
    // if input length is 1
  
    result = input[0]; //just in case we find nothing,like an input of "abc"
  
    for (var i = 0; i < input.length; i++) {
      var left = 0;
      var right = 0;
      //determine if we have a string of idential characters
      //i.e. a trivial palindrome
      while (input[i - 1 - left] == input[i]) {
        left++;
      }
      while (input[i + 1 + right] == input[i]) {
        right++;
      }
      //now check for non-trivial palindromes
      while (input[i - 1 - left] == input[i+ 1 + right]) {
        if (input[i - 1 - left] === undefined && input[i+ 1 + right] === undefined) {
          //special case here - entire string is a single-character palindrome
          //just return the input
          return input;
        }
        left++;
        right++;
      }
      //we have a potential longest palindrome -
      //check it against the current longest
      potential = input.slice(i - left, i + right + 1);
      if (potential.length > result.length) {
        result = potential;
      }
    }
    
    return result;
  }