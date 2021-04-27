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
        let max = this.root;
        while (max.right != null) {
            max = max.right;
        }
        return max.value;
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
        if(Math.abs(this.height(node.left) - this.height(node.right)) > 1) return false;
        if (!(this.isBalanced2(node.left) && this.isBalanced2(node.right))) return false;
        else return (this.isBalanced2(node.left) && this.isBalanced2(node.right));
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
    
    contains(value){
        if(this.root === null) return false;
        let runner = this.root;
        while(runner != null){
            if(value === runner.value) return true;
            if(value > runner.value && runner.right === null) return false;
            if(value < runner.value && runner.left === null) return false;
            
            if(value > runner.value) runner = runner.right;
            else if(value < runner.value) runner = runner.left;
        }
        return false;
    }
    removeComplicated(value){
        if(!this.contains(value)) return false;
        let runner = this.root;
        while(runner!=null){
            
        }
    }
    
    remove(value){

        if(this.root === null) return false;
        if(this.root.value === value) return this.removeRoot();
        
        let runner = this.root;
        while(runner != null){
            
            // if it's a leaf:
            // stop at the parent node, and send it to the helper function for leaves
            if(runner.right?.value === value && runner.right.right === null && runner.right.left === null){
                return this.removeLeaf(runner, "right");
            }
            if(runner.left?.value === value && runner.left.right === null && runner.left.left === null){
                return this.removeLeaf(runner, "left");
            }

            // if it is a child but it only has one:
            if(runner.right?.value === value &&
                Math.abs((runner.right.right === null) - (runner.right.left === null)) === 1)
                {
                return this.removeTwig(runner, "right");
            }
            if(runner.left?.value === value && Math.abs((runner.left.right === null) - (runner.left.left === null)) === 1){
                return this.removeTwig(runner, "left");
            }


            // if it is a child that has two children:
            if(runner.right?.value === value && runner.right.right !== null && runner.right.left !== null){
                return this.removeBough(runner, "right");
            }
            if(runner.left?.value === value && runner.left.right !== null && runner.left.left !== null){
                return this.removeBough(runner, "left");
            }
            
            if(value > runner.value && runner.right === null) return false;
            if(value < runner.value && runner.left === null) return false;
            
            if(value > runner.value) runner = runner.right;
            else if(value < runner.value) runner = runner.left;
        }
        return false;
    }

    removeLeaf(parent, side){
        parent[side] = null;    // parent.right or parent.left
        return true;
    }

    removeTwig(parent, side){
        let child = parent[side];
        let subside;
        if(child.left === null) subside = "right";
        if(child.right === null) subside = "left";

        parent[side] = child[subside];
        child[subside] = null;

        return true;
    }

    removeBough(parent, side){
        let other = (side === "right" ? "left" : "right");
        let child = parent[side];
        let newParent = child[side];

        while(newParent[other] != null) newParent = newParent[other];

        newParent[other] = child[other];
        child[other] = null;
        parent[side] = newParent;
        child[side] = null;

        return true;
    }

    removeRoot(){
        let side = (this.height(this.root.left) > this.height(this.root.right) ? "left" : "right");
        let other = (side === "right" ? "left" : "right");
        // "side" is whichever side is longer, "other" is the shorter side
        // we will attach this.root.other to a sub-note of this.root.side

        let newParent = this.root[side];
        while(newParent[other] != null) newParent = newParent[other];

        
        newParent[other] = this.root[other];
        
        let oldRoot = this.root;
        this.root = this.root[side];
        oldRoot[side] = null;
        oldRoot[other] = null;
        return true;
        
    }


}


let tree = new BST(), bal = new BST();

tree.add(25).add(12).add(320).add(29).add(11).add(200).add(198).add(199).add(27);

console.log(tree.root);
console.log(tree.remove(25)); // true
console.log(tree.remove(5)); // false
console.log(tree.root);
console.log(tree.root.left.left);

//
//              25
//             / \
//         12      320
//        /       /
//      11      29 
//            /   \       
//         27     200   
//                /     
//             198     
//               \
//               199   



//
//              25
//             / \
//         12      320 p
//        /       /
//      11      /
//            /         
//          27n   
//           \   
//         200  
//          /     
//        198     
//          \
//           199   