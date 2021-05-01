
// isRotation

// Write a function that takes in 2 strings and returns true of they are rotations of each other, the same characters in the same order just offset by some amount, and false if they are not rotations of each other.

// Given:
// "bingo", "gobin" => true
// "bingo", "ognib" => false

// Bonus Challenge: 
// Check this without creating a new string


const isRotation = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    const checkAtIndex = i => {
        for(let j=0; j<str1.length; j++, i++){
            if(i >= str2.length){
                i = 0;
            }
            if(str1[j] !== str2[i]){
                return false;
            }
        }
        return true;
    }
    
    for(let i=0; i<str2.length; i++){
        if(str2[i] === str1[0]){
            if(checkAtIndex(i)){
                return true;   
            }
        }
    }
    
    return false;
}

                  
//       B  I  B  G  I  O
//                j                   
//   
//       B  I  G  O  B  I  
//           i 
//
//  counter: 1

// hellothisisaverylongstring1
//                           j
// 1hellothisisaverylongstring
// i
isRotationRecursiveBaby=( str1, str2, i = 0, j = 0, counter = 0)=>{
    if(str1.length !== str2.length) return false;
    if(counter === str1.length) return true;
    if(j === str1.length) return false;

    //sets i back to 0 
    if(i === str1.length) return isRotationRecursiveBaby(str1, str2, i = 0, j, counter);

    //if counter === str1.length true

    // returns false if counter is greater than 0, because counter is counting the number of correct values in a row
    if(counter > 0 && str2[i]!==str1[j]) return isRotationRecursiveBaby(str1,str2,i,j,counter=0);


    //incrementing counter, i, and j if 
    if(str2[i] === str1[j]) return isRotationRecursiveBaby(str1, str2, i+=1, j+=1, counter +=1);
    
    return isRotationRecursiveBaby(str1, str2 , i += 1, j, counter);
}





const isRotationWithNewStrings = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    for(let i=0; i<str1.length; i++){
        if((str1.substring(i) + str1.substring(0, i)) === str2){
            return true;
        }
    }
    return false;
}

console.log(isRotationRecursiveBaby("bibgo", "bgobi")); // 2 "started a check" then true
console.log(isRotationRecursiveBaby("bibgo", "ogbib")); // 2 "started a check" then false
console.log(isRotationRecursiveBaby("bibgo", "bibgo")); // 1 "started a check" then true