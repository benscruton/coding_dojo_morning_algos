// Recursion: the art of programming using recursion
    // that is to say, the function will call itself inside of its code.
    // Every recursive function has a "base case" -- the point at which it stops recursing.


// Sigma(n): return n + n-1 + n-2 + ... + 1
function sigma(n){

    // This is the "base case":
    if(n <= 1){
        return n;
    }
    
    return n + sigma(n-1);
}



// Factorial: Return the factorial of n.

function factorial(n){
    if(n<0){
        throw "Don't be a jerk";
    }

    if(n == 0){
        return 1;
    }

    return n * factorial(n-1);
}

// Fibonacci: Return the nth value of the Fibonacci sequence.

function fibonacci(n){
    if(n<0){
        throw "Don't be a jerk";
    }
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

var errors = "";


try{
    console.log(factorial(-3));
} catch (err){
    console.log(`There was an error: ${err}`);
}

try{
    console.log(factorial(-3));
} catch (err){
    console.log(`There was an error: ${err}`);
}

try{
    console.log(factorial(-3));
} catch (err){
    console.log(`There was an error: ${err}`);
}


function tryCatchErrs(func){

}