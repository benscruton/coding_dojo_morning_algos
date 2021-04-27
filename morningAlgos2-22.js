class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function display(node){
    var output = "";
    output += node.value;
    var currentNode = node;
    while (currentNode.next != null){
        currentNode = currentNode.next;
        output += ` - ${currentNode.value}`
    }
    console.log(output);
    return output;
}

function newList(max_value, length) {
    list = new ListNode(Math.round(Math.random() * (max_value - 1)) + 1) 
    node = list
    for (var i = 0; i < length - 1; i++) {
        node.next = new ListNode(Math.round(Math.random() * (max_value - 1)) + 1);
        node = node.next
    }
    return list
}

var testList = newList(20, 10);
var theList = newList(20, 3);


// Ok so today is STACKS.  Which is sort of built on the list nodes idea.

// Stacks: a primitive data structure representing a series of objects ("objects" here in the most general sense).  It is a so-called "First-In, Last Out / Last-In, First Out" (FILO / LIFO) data structure.
// So here, if you are messing with a stack, you can only edit/remove the last value in it.  Like a physical stack of stuff: you have to take the top object off before you take the second-from-the-top object off.


class SLStack{
    constructor(){
        this.top = null;    // in list-node terms, this is the "head"
        // this.bottom = null; // in list-node terms, this is the "tail"
        this.size = 0;
    }

    
    // Add a new node with the given value to the top of the stack
    push(value){
        var newNode = new ListNode(value);
        newNode.next = this.top;
        this.top = newNode;

        this.size++;

        return this.top;
    }

    // Remove the top of the stack, and return the node (not the value)
    pop(){
        var temp = this.top;   
        this.top = this.top.next;
        temp.next = null;

        this.size--;
        
        return temp;        
    }

    // Return the value of the top node, without altering the stack.
    top_value(){
        return this.top.value;
    }

    // Returns "true" if the stack contains the given value, and "false" otherwise.
    contains(value){
        var runner = this.top;
        while(runner != null){
            if(runner.value == value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Returns "true" if the stack is empty, and "false" otherwise.
    isEmpty(){
        // return (this.size() == 0);
        return (this.top == null);
    }

    // Returns the length of the stack.
    size(){
        // var counter = 0;
        // var runner = this.top;
        // while(runner != null){
        //     counter++;
        //     runner = runner.next;
        // }
        // return counter;

        return this.size();
    }

}


var myStack = new SLStack();

// console.log(myStack);
// console.log(`The stack is empty: ${myStack.isEmpty()}`);

myStack.push(5);
myStack.push(2);
myStack.push(17);  // 17 - 2 - 5

display(myStack.top_value());

console.log(`The top value is ${myStack.top_value()}`);

// console.log(`The size is now: ${myStack.size()}`);
// console.log(`The stack is empty: ${myStack.isEmpty()}`);

myStack.pop();
console.log(myStack);
// console.log(`The size is now: ${myStack.size()}`);

console.log(`The top value is ${myStack.top_value()}`);

display(myStack.top)
console.log(`The stack contains 5: ${myStack.contains(5)}`);
console.log(`The stack contains 4: ${myStack.contains(4)}`);