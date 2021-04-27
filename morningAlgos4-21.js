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

    
    size2(node = this.root){
        if(node == null) return 0;
        return 1 + this.size2(node.left) + this.size2(node.right);
    }

    height(node = this.root){
        if(node == null) return 0;
        let left = this.height(node.left);
        let right = this.height(node.right);
        return 1 + (left > right? left : right);
    }

    heightCondensed(node = this.root){
        if(node == null) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    isBalanced(node = this.root){
        if(node == null) return true;
        if(Math.abs(this.height(node.left) - this.height(node.right)) > 1){
            return false;
        }
        if(node.right === null || node.left === null) return true;
        return (this.isBalanced(node.left) && this.isBalanced(node.right));
    }

    isBalanced2(node = this.root){
        if(node == null) return true;
        if(Math.abs(this.height(node.left) - this.height(node.right)) > 1){
            return false;
        }
        if (!(this.isBalanced2(node.left) && this.isBalanced2(node.right))){
            return false;
        } else {
            return (this.isBalanced2(node.left) && this.isBalanced2(node.right));
        }    
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


let tree = new BST(), bal = new BST();

tree.add(25).add(12).add(320).add(29).add(11).add(200).add(198).add(199);
console.log(tree.isBalanced()); // false
console.log(tree.isBalanced2()); // false

bal.add(5).add(10);
console.log(bal.isBalanced()); // true
console.log(bal.isBalanced2()); // true

bal.add(8);
console.log(bal.isBalanced());  // false
console.log(bal.isBalanced2());  // false
bal.add(3).add(7).add(4).add(1).add(11);
console.log(bal.isBalanced()); // true
console.log(bal.isBalanced2()); // true


console.log(tree.heightCondensed());