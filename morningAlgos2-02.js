// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).


function generateCoinChange(cents){
    var coins = {
        quarters : 0,
        dimes : 0,
        nickels : 0,
        pennies : 0
    }

    while(cents >= 25){
        coins.quarters++;
        cents -= 25;
    }
    while(cents >= 10){
        coins.dimes++;
        cents -= 10;
    }
    while(cents >= 5){
        coins.nickels++;
        cents -= 5;
    }
    while(cents >= 1){
        coins.pennies++;
        cents -= 1;
    }
    console.log(coins);
}

generateCoinChange(86);
generateCoinChange(75);
generateCoinChange(3);