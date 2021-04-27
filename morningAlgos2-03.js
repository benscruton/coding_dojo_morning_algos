// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).

function rollOne(){
    var roll = Math.random();
    return Math.ceil(6*roll);
}

// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”

function playFives(num){
    var i = 0;
    while(i<num){
        var rolli = rollOne();
        if(rolli != 5){
            console.log(rolli);
        }
        else{
            console.log(`${rolli} -- That's good luck!`);
        }
        i++;
    }
}

// Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.

function playStatistics(){
    var maxroll = 1;
    var minroll = 6;
    for(let i = 0; i < 8; i++){
        var thisroll = rollOne();

        if(thisroll > maxroll){
            maxroll = thisroll;
        }

        if(thisroll < minroll){
            minroll = thisroll;
        }
    }

    console.log(`Highest value: ${maxroll}`);
    console.log(`Lowest value: ${minroll}`);
}