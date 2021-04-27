// floodFill(canvas, x, y, target)
// canvas is an array of array of numbers representing
// colored pixels (think MSPaint)
// x, y is your start point, target is your new "color"
// change the value at x, y on the canvas to
// the target value, then all points on the canvas 
// that were the original color and contiguous with the 
// point at x, y (no diagonals!) to the target color.
// example
// canvas is:
// [[3, 2, 4, 4, 4],
//  [4, 4, 4, 3, 3],
//  [4, 1, 1, 4, 4]]
// x, y is 2, 1  and target is 0
// canvas becomes:
// [[3, 2, 0, 0, 0],
//  [0, 0, 0, 3, 3],
//  [0, 1, 1, 4, 4]]
// you don't need to return anything,
// but if you feel the need to, use null or undefined


function floodFill(canvas, x, y, target){
    if(canvas[x][y] == target || x < 0 || y < 0 || x >= canvas.length || y >= canvas[0].length){
        if(canvas[x][y] == target){
            console.log("Nothing to do!");
        }
        else{
            console.log("Target out of bounds!");
        }
        return null
    }

    // store previous value of target pixel
    var origColor = canvas[y][x];

    // flip current pixel to new target color
    canvas[y][x] = target;

    if(x-1 >= 0 && canvas[y][x-1] == origColor){
        floodFill(canvas, x-1, y, target);
    }
    if(y-1 >= 0 && canvas[y-1][x] == origColor){
        floodFill(canvas, x, y-1, target);
    }
    if(x+1 < canvas[0].length && canvas[y][x+1] == origColor){
        floodFill(canvas, x+1, y, target);
    }
    if(y+1 < canvas.length && canvas[y+1][x] == origColor){
        floodFill(canvas, x, y+1, target);
    }
    return null;
    // check each adjacent pixel; if adjacent pixel value is origColor:
        // floodFill(canvas, [new pixel coordinates x y], target)
}


//      
//      
var canvas =   [[7, 7, 7, 7, 7],
                [7, 7, 4, 7, 7],
                [7, 4, 7, 3, 7],
                [0, 4, 7, 4, 7],
                [0, 0, 4, 7, 7]]
        //      
//      
//      canvas[1][1]

floodFill(canvas, 2, 2, 8);
// console.log(canvas);

//      
// var canvas2 =   [[7, 7, 7, 7, 7],
//                 [7, 2, 4, 7, 7],
//                 [7, 2, 7, 3, 7],
//                 [7, 4, 7, 4, 7],
//                 [5, 7, 4, 7, 7]]

// floodFill(canvas2, 1, 2, 3);
// console.log(canvas2);







function floodFillAdjusted(canvas, x, y, target){
    if(canvas[x][y] == target || x < 0 || y < 0 || x >= canvas.length || y >= canvas[0].length){
        if(canvas[x][y] == target){
            console.log("Nothing to do!");
        }
        else{
            console.log("Target out of bounds!");
        }
        return null
    }

    y_adj = canvas.length - 1 - y
    console.log(canvas[y_adj][x]);

    // store previous value of target pixel
    var origColor = canvas[y_adj][x];

    // flip current pixel to new target color
    canvas[y_adj][x] = target;

    if(x-1 >= 0 && canvas[y_adj][x-1] == origColor){
        floodFillAdjusted(canvas, x-1, y_adj, target);
    }
    if(y_adj-1 >= 0 && canvas[y_adj-1][x] == origColor){
        floodFillAdjusted(canvas, x, y_adj-1, target);
    }
    if(x+1 < canvas[0].length && canvas[y_adj][x+1] == origColor){
        floodFillAdjusted(canvas, x+1, y_adj, target);
    }
    if(y_adj+1 < canvas.length && canvas[y_adj+1][x] == origColor){
        floodFillAdjusted(canvas, x, y_adj+1, target);
    }
    return null;
}

floodFillAdjusted(canvas, 0, 0, 4);
console.log(canvas);