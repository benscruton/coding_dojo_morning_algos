
// For practice, convert the following from hexadecimal to decimal. Example: 0x47 becomes 71.

// 0x47
const hexDigitKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function hexToDec(hex){
    if(hex.slice(0, 2) !== "0x" || hex.length < 3) return "Invalid hexidecimal string";
    let dec = 0;

        for(let i=hex.length - 1; (i>1); i--){
            if(!hexDigitKey.includes(hex[i].toUpperCase())) return "Invalid hexidecimal string";
            dec += hexDigitKey.indexOf((hex[i]).toUpperCase()) * (16 ** (hex.length - 1 - i));
        }

    return dec;
}
// console.log(`hexToDec: ${hexToDec('0xff')}`);
// console.log(`hexToDec: ${hexToDec('0x0')}`);

// For practice, convert the following from decimal to hexadecimal. Example: 31 becomes 0x1F.


function decToHex(dec){
    if(typeof(dec) !== "number" || dec < 0) return "Please enter a positive number.";
    let hex = "";

    while(dec > 0){
        hex = hexDigitKey[dec%16] + hex;
        dec = Math.floor(dec/16);
    }
    return "0x" + hex;
}

console.log(`decToHex: ${decToHex(17)}`);