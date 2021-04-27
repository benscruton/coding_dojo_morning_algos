// BINARY SEARCH TREES

class Node{
    constructor(value){
        this.value= value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null
    }

    //challenge 1
    add(value){
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        
        let squirrel = this.root;
        while((value < squirrel.value && squirrel.left != null) || (value > squirrel.value && squirrel.right != null)){
            if(value < squirrel.value && squirrel.left != null) squirrel = squirrel.left;
            if(value > squirrel.value && squirrel.right != null) squirrel = squirrel.right;
        }

        if(squirrel.value == value){
            console.log("you broke it... (sorry no duplicate values!)");
            return this;
        }

        squirrel[value>squirrel.value? "right" : "left"] = newNode;
        return this;
    }

    min(){
        let min = this.root;
        while(min.left != null) min = min.left;
        return min.value;
    }

    max(){
        let max = this.root;                        // Node: 320
        while(max.right != null) max = max.right;
        return max.value;
    }


    //bonus challenge
    printvals(node){
        
    }

    
}


let tree = new BST();

tree.add(25).add(12).add(320).add(29).add(11);
console.log(tree.root);
console.log(tree.max());        // 320
console.log(tree.min());        // 11
tree.add(-2045);
tree.add(200);
tree.add(12);
console.log(tree.max());        // 200
console.log(tree.min());        // -2045
console.log(tree.root);




//      while((value < squirrel.value && squirrel.left != null)  ||  (value > squirrel.value && squirrel.right != null))
//
//                             given val for new node is 200
//                                      25
//                             /                   \
//                      12                              320
//                  /       \                           /
//              11                                  29           
//                          
//                         
// 
// 
// 
// 
