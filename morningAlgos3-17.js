//Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".

const stringDedupe = str => {
    var output = "";

    for(let i = 0; i < str.length; i++){
        var charLaterInString = false;
        for(let j = i+1; j < str.length; j++){
            if(str[j] == str[i]){
                charLaterInString = true;
                break;
            }
        }
        if(!charLaterInString) output += str[i];
    }
    return output;
}





const stringDedupeFromBack = str => {
    var output = "";

    for(let i = str.length - 1; i >= 0; i--){

        // Check if the value is already in our output string
        var charInString = false;
        for(let j = 0; j < output.length; j++){
            if(str[i] === output[j]){
                // if we find it, set charInString to true and break the loop
                charInString = true;
                break;
            }
        }

        // if we didn't find it, tack it on the beginning of our output string.
        if(!charInString) output = str[i] + output;
    }

    return output;
}


// var sample = "Snaps! crackles! pops!";
// console.log(sample);
// console.log(stringDedupe(sample));






const stringDedupeRecursively = (str, char = "", output = "") => {
    if (str === "") return output + char;

    var charInString = false;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            charInString = true;
            break;
        }
    }
    if(!charInString) output += char;

    var substr = "";
    for(let i = 1; i < str.length; i++) substr += str[i];

    return stringDedupeRecursively(substr, str[0], output);
}






// var sample = "Snaps! crackles! pops!";
// var sample2 = "alsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc kaseuygc esaalsuehckasieuhc aseuc aksue akseuc kaseuyg kacsueygck asueyc kasueygc"

// console.log(sample);
// console.log(stringDedupe(sample2));

console.log("Idea for sci-fi character name: Lih Kasueygc");