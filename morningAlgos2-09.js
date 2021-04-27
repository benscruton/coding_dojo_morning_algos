// parensValid(input_a_string){}

function parensValid(inputString){
    var counter = 0;
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] == "("){
            counter++;
        }
        if(inputString[i] == ")"){
            counter--;
        }
        if(counter < 0){
            return false;
        }
    }
    return (counter == 0)
}



// bracesValid(input_a_string){}

function bracesValid(inputString){
    var counters = {
        round: 0,
        square: 0,
        curly: 0
    }
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] == "("){
            counters.round ++;
        }
        else if(inputString[i] == ")"){
            counters.round --;
        }
        if(inputString[i] == "["){
            counters.square ++;
        }
        else if(inputString[i] == "]"){
            counters.square --;
        }
        if(inputString[i] == "{"){
            counters.curly ++;
        }
        else if(inputString[i] == "}"){
            counters.curly --;
        }

        if(counters.round < 0 || counters.square < 0 || counters.curly < 0){
            return false;
        }
    }
    return(counters.round == 0 && counters.square == 0 && counters.curly == 0);
}

// Super bonus: pairsValid(input(checks-for-whatever)

function pairsValid(inputString, pairArray){
    for(let i = 0; i < pairArray.length; i+=2){
        var left = pairArray[i];
        var right = pairArray[i+1];
        var counter = 0;
        for(let i = 0; i < inputString.length; i++){
            if(inputString[i] == left){
                counter++;
            }
            if(inputString[i] == right){
                counter--;
            }
            if(counter < 0){
                return false;
            }
        }
   }
   return (counter == 0)
}



// MORE EFFICIENT VERSION:

function generalValid(inputString, pairArray){
    var counter = 0;
    var left = pairArray[0];
    var right = pairArray[1];
    for(let i = 0; i < inputString.length; i++){
        if(inputString[i] == left){
            counter++;
        }
        if(inputString[i] == right){
            counter--;
        }
        if(counter < 0){
            return false;
        }
    }
    return (counter == 0)
}

function efficientBracesValid(inputString){
    var round = generalValid(inputString, ["(", ")"]);
    var square = generalValid(inputString, ["[", "]"]);
    var curly = generalValid(inputString, ["{", "}"]);

    return round && square && curly;
}

function efficientBonus(inputString, pairsArray){
    var valid = true;
    for(let i = 0; i < pairsArray.length; i+=2){
        var valid = valid && generalValid(inputString, [pairsArray[i], pairsArray[i+1]] 
    }
    return valid;
}



var testString = ")(hello() {what is your name{} [yes][]}"

console.log(efficientBracesValid(testString));

