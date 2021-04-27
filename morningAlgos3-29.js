//For practice, convert the following from binary to decimal. 
//Example: 0b100111 becomes 39

const binaryToDecimal = bin => {

    var decimalOutput = 0;
    
    for(let i = bin.length - 1; i >= 0; i--){
        if(bin[i] === "b") break;
        decimalOutput += parseInt(bin[i]) * (2 ** (bin.length - 1 - i));
    }
    
    return decimalOutput;
}

//console.log(binaryToDecimal("0b100111"));

const recursiveBinaryOutput = (bin, i = bin.length-1, sum = 0, counter = 0) =>{
    if(bin[i] === "b") return sum;
    return recursiveBinaryOutput(bin, i-1, sum + parseInt(bin[i]) * (2**counter), counter+1);
}

console.log(recursiveBinaryOutput("0b100111"));

// recursiveBinaryOutput("0b100111");

//Bonus: For practice, convert the following from decimal to binary. 
//Example: 117 becomes 0b1110101.

const decimalToBinary = dec => {
    let numOfDigits = 0;
    let binaryString = "0b";

    while((2 ** numOfDigits) <= dec){
        numOfDigits++;
    }

    for(; numOfDigits > 0; numOfDigits--){
        if(dec >= (2**(numOfDigits - 1))){
            binaryString += "1";
            dec -= 2**(numOfDigits - 1);
        }
        else{
            binaryString += "0";
        }
    }

    return binaryString;
}

// console.log(decimalToBinary(1));     // 1, numOfDigits should be 1

// console.log(decimalToBinary(117));     // 101, numOfDigits should be 3

function convertDecToBin (num){
    let bin = "",
        temp = num;

        while(temp > 0){
            temp % 2 == 0 ? bin = "0" + bin : bin = "1" + bin;
            temp = Math.floor(temp/2);
        }
    return "0b" + bin;
}

// console.log(`convertDecToBin: ${convertDecToBin(117)}`);