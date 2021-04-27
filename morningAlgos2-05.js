// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally,

// xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

var claire = [0, 0];

function reset(){
    claire = [0, 0];
}

function moveBy(xOffset, yOffset){
    claire[0] += xOffset;
    claire[1] += yOffset;
}

function xLocation(){
    return Math.abs(claire[0]);
}

function yLocation(){
    return Math.abs(claire[1]);
}

reset();
moveBy(1, -2);
moveBy(3, 1);
console.log(xLocation());
console.log(yLocation());

