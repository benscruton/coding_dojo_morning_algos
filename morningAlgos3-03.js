// telephoneWords(str, ...?)
// input is a string of digits --> "83461"

// output is an array of all "words" representable by those digits on a telephone keypad
// Order of output does not matter.

const keypad = {
    1: " ",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
    0: "."
}

// So for instance, "319" shoud return ["D W", "D X", "D Y", "D Z", "E W", "E X", "E Y", "E Z", "F W", "F X", "F Y", "F Z"]


function telephoneWords(str, current = "", result = []){
    if(str.length == 0){
        if(current.length > 0){
            result.push(current);
        }
        return;
    }

    var letters = keypad[str[0]];
    var rest = str.substring(1);
    for(let letter of letters){
        telephoneWords(rest, current+letter, result)
    }
    return result;
}


console.log(telephoneWords("448"));