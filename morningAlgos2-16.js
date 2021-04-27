// Singly linked lists (apparently these are going to be frustrating at first!)

// A linked list is a data structure made of nodes
// A node contains a value (usually an integer in our case) and a reference to the node that comes after
// This is NOT built in to JavaScript!
// We are not able to use the standard list methods because we are creating this structure and the associated functions from scratch.

// This one we will be using every day:

class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// to create a new list node:
x = new ListNode(4);
y = new ListNode(7);    // This creates a new node, but it's separate from the 4
x.next = y;             // This is how we link them up.  Set x's "next" property to "y".
z = new ListNode(8);
z.next = x;             // And this is how we add something to the beginning.  Now it's Z:8 --> X:4 --> Y:7

// Worth noting: if we check (x == 4) it will be false, because 4 is an int and x is a ListNode.  (x.value == 4) is true.

// for the following functions, "node" represents the head of a linked list.  Assume in each case that it refers to a singly linked list with a length of at least 1.

// addFront(node, value){}      note: "node" refers to the head node of a list.
    // add a new head to the list with the given value
    // return the new head of the list

function addFront(node, value){
    new_node = new ListNode(value);
    new_node.next = node;
    return new_node;
}

// addBack(node, value){}
    // add a new tail (and return the head)

function addBack(node, value) {
    var currentNode = node;
    while (currentNode.next != null){
        currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(value);
    return node;
}

// display(node){}
    // display all the values in the list

function display(node){
    var output = "";
    output += node.value;
    var currentNode = node;
    while (currentNode.next != null){
        currentNode = currentNode.next;
        output += ` - ${currentNode.value}`
    }
    console.log(output);
}

// containsValue(node, target){}
    // check through a list to see if the given value is included in the node.

function containsValue(node, target){
    var currentNode = node;
    while (currentNode.next != null){
        if(currentNode.value == target){
            return true;
        }
        currentNode = currentNode.next;
        
    }
    if(currentNode.value == target){
        return true;
    }
    return false;
}



var newNode = new ListNode(4);
var 