// bookIndex(input)

// input is an array of integers representing pages in a book where a particular term is found (you can assume everything is an integer - no Roman Numerals or anything).

// Output is a string that is formatted similarly to a list of pages found in a book index: [1, 13, 14, 15, 37, 38] should be [1, 13-15, 37-38].  We want our output to be a string.

// bookIndex(input)

// input is an array of integers representing pages in a book where a particular term is found (you can assume everything is an integer - no Roman Numerals or anything).

// Output is a string that is formatted similarly to a list of pages found in a book index: [1, 13, 14, 15, 37, 38] should be [1, 13-15, 37-38].  We want our output to be a string.


var arr = [1,2,3,4,5,6,7,13];

function bookIndex(arr){

    var newstring = "";

    for (var i=0; i<arr.length; i++){
    
        if(arr[i] - 1 == arr[i-1] && arr[i] + 1 == arr[i+1]){
            // if it's in the middle of a range, don't do anything
            continue;
        }

        if(arr[i-1] != arr[i] - 1){
            // If the one before is not one less, add this number to string
            newstring += arr[i]
        }

        if(arr[i-1] == arr[i] - 1 && arr[i+1] != arr[i] +1){
            // If the number is at the end of a consecutive range, add the number and ", ".
            newstring += arr[i] + ", "
            continue; //We don't need to keep checking after this.
        }

        if(arr[i]+1 == arr[i+1]){
            newstring += "-"       // otherwise, add a hyphen
        }
        else{     // if the next one isn't one more than this one, add a comma
            newstring += ", "
        }

    }

    return newstring.slice(0, newstring.length - 2);
}



// ----------------------- RYAN'S SOLUTION: ------------------------

function bookIndexPartOne(input){
    var stringarray = []
    for(var i = 0; i < input.length; i++){
        if(i + 1 == input.length){
            stringarray.push(input[i].toString())
        }
        else if(input[i] + 1 != input[i+1]){
            stringarray.push(input[i].toString())
        }

        else{
            var left = input[i];
            var right = 0;
            while(input[i] + 1 == input[i+1]){
                right = input[i+1]
                i++;
            }
            stringarray.push(left.toString() + "-" + right.toString());
        }
        console.log(stringarray);
        return buildIndex(stringarray);
    }
}

function buildIndex(arrayOfStrings){
    var output = "";
    for(let i = 0; i < arrayOfStrings.length; i++){
        output += arrayOfStrings[i]
    }
    return output;
}


console.log(bookIndexPartOne(arr))