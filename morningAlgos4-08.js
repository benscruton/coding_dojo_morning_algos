// Matrix Search

// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.

// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];



//                [12,      34,         45,         56],    
//
//                [98,      87,         76,         65],    
//
//                [56,      67,         78,         89],
//
//                [54,      43,         32,         21] ]



const searchThisOne = [ [12, 34, 45, 67],
                        [98, 87, 76, 67],
                        [56, 67, 78, 89],
                        [54, 43, 32, 21] ]; // start once, come back true

const searchThisOne2 = [ [12, 34, 45, 67],
                         [98, 87, 76, 67],
                         [56, 67, 78, 89],
                         [54, 67, 32, 67] ];    // start twice, come back false

const searchThisOne3 = [ [12, 34, 45, 67],
                         [98, 87, 76, 67],
                         [56, 62, 78, 89],
                         [54, 67, 32, 67] ];    // not start, come back false
                        
const lookForThisOne = [ [12, 98, 85], [12, 33, 45] ];
// const lookForThisOne2 = [ [12, 
// console.log(searchThisOne);

const matrix4x2 = [ [5,  12, 34, 12],
                    [12, 98, 85, 2],
                    [12, 33, 45, 67],
                    [98, 87, 76, 67],
                    [56, 62, 78, 89],
                    [12, 67, 32, 67]
                 ];


// ];




const matrixSearch = (matrix, search) => {
    // this outer one will go through the arrays within the big array
    for(let i=0; i<(matrix.length - (search.length - 1)); i++){

        // then search the inner ones one value at a time
        for(let j=0; j<(matrix[i].length - (search[0].length - 1)); j++){

            // look for our value!
            if(matrix[i][j] === search[0][0]){

                // if we find it, call our helper function
                if(theyAllMatch(matrix, search, i, j)){
                    return true;
                }
            }
        }
    }
    // if we get through the loop and haven't returned true:
    return false;
}



const theyAllMatch = (matrix, search, i, j) => {
    // let us know we started, to make sure we're skipping our edge cases
    console.log("started the helper function");

    for(let y=0; (y<search.length); y++){

        for(let x=0; (x<search[y].length); x++){

            if(search[y][x] !== matrix[y+i][x+j]){
                return false;
            }
        }
    } // ends the search loop
    // if we get all the way through this loop and haven't broken it yet, return true
    return true;
}

console.log(matrixSearch(matrix4x2, lookForThisOne));
console.log(matrixSearch(searchThisOne2, lookForThisOne));
console.log(matrixSearch(searchThisOne3, lookForThisOne));