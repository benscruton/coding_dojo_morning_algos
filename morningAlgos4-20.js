
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    //challenge 1
    add2(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }

        let climber = this.root;
        while ((value < climber.value && climber.left != null) || (value > climber.value && climber.right != null)) {
            if (value < climber.value && climber.left != null) climber = climber.left;
            if (value > climber.value && climber.right != null) climber = climber.right;
        }
        if (value < climber.value && climber.left != null) climber.left = newNode;
        if (value > climber.value && climber.right != null) climber.right = newNode;
        if (climber.value == value) console.log("you broke it... (sorry no duplicate values!)");

        return this;
    }

    add(value){
        let newNode = new Node(value);
        if(this.root==null){
            this.root= newNode;
        }else{
            let runner = this.root;
            while(runner!= null){
                if(newNode.value>runner.value){
                    if(runner.right==null){
                        runner.right=newNode;
                        break
                    }else{
                        runner = runner.right
                    }
                } else if(newNode.value < runner.value){
                    if(runner.left==null){
                        runner.left = newNode;
                        break;
                    }else{
                        runner = runner.left
                    }
                }else{
                    console.log("no duplicates allowed!")
                    return false;
                }                
            }            
        }
        return this;
    }

    min() {
        let min = this.root;
        while (min.left != null) {
            min = min.left;
        }
        return min.value;
    }

    max() {
        let max = this.root;                        // Node: 320
        while (max.right != null) {
            max = max.right;
        }
        return max.value;
    }
    



    contains(value){
        if(this.root === null) return false;
        // if(this.root.value === value) return true;
        let runner = this.root;
        while(runner != null){
            if(value === runner.value) return true;
            if(value > runner.value && runner.right === null) return false;
            if(value < runner.value && runner.left === null) return false;
            
            if(value > runner.value) runner = runner.right;
            if(value < runner.value) runner = runner.left;
        }
        return false;
    }





    containsWithoutConditional(value){
        if(this.root.value === value) return true;
        let runner = this.root;
        while(runner !== null){
            if(value === runner.value) return true;
            if(value > runner.value) runner = runner.right;
            if(value < runner.value) runner = runner.left;
        }
        return false;
    }
    
    sizeNotWorking(node = this.root, counter = 0){
        if(this.root === null) return 0;
        // if(node !== null) counter++;            // counter = 1
        if(node.left !== null){
            // counter++;                          // counter = 2
            counter += this.size(node.left, counter);  // doesn't actually change the counter
        }
        if(node.right !== null){
            // counter++;                          // counter = 3
            counter += this.size(node.left, counter);  // doesn't change
        }
        return counter + 1;                         // 3
    }

    size2(node = this.root){
        if(node == null) return 0;
        return 1 + this.size2(node.left) + this.size2(node.right);
    }

    size(node = this.root, counter = 0){
        if(this.root === null) return 0;
        if(node.left !== null){
            counter = this.size(node.left, counter);
        }
        if(node.right !== null){
            counter = this.size(node.right, counter);
        }
        return counter + 1;
    }
    
    printTree(node){
        console.log("Current node = ", node.value);
        if(node.left!=null){
            console.log("left node of", node.value, "= " + node.left.value)
            this.printTree(node.left)
        }
        if(node.right != null){
            console.log("Right node of", node.value, " = " + node.right.value)
            this.printTree(node.right);
        }
    }

}


let tree = new BST();

tree.add(25).add(12).add(320).add(29).add(11).add(200).add(198).add(199);

tree.add(-2045);
tree.add(204);

// tree.printTree(tree.root);
// tree.containsWithoutConditional(-2045);
// tree.containsWithoutConditional(400);
//console.log(tree.contains(-2045));      // true
//console.log(tree.contains(400));        // false
//console.log(tree.contains(199));        // true


console.log("size2:");
console.log(tree.size2());

console.log("size:");
console.log(tree.size());

