class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Another weird way of making list nodes, that allows you to specify where you're adding it in the list:
class altFancyListNode{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        if(prev != null){
            prev.next = this;
        }
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



// Three functions for today:

// prependVal(node, value, target):
    // Create a node with the given value and insert it into the list before the first node containing the target
    // Put it before the head if no target value is found.
    // Return the new (if applicable) head
        // value: 9, target: 7, list: 8-4-7-2-9:
            // output = 8-4-9-7-2-9

function prependVal(node, value, target){
    if(node == null){
        return new ListNode(value);
    }

    var beforeTarget = null;
    var runner = node;
    var targetNotInList = true;

    while(runner.next != null){
        if(runner.next.value == target){
            beforeTarget = runner;
            targetNotInList = false;
            break;
        }
        runner = runner.next;
    }
    var insert = new ListNode(value);
    
    if(targetNotInList){
        insert.next = node;
        return insert;
    }

    insert.next = beforeTarget.next;
    beforeTarget.next = insert;

    return node;
}

// appendVal(node, value, target):
    // Same thing as before, except here we're putting it *after* the first node with the target value.  If no target, put it at the end.
    // Return the (new???) head
        // value: 9, target: 7, list: 8-4-7-2-9
            // output: 8-4-7-9-2-9

function appendVal(node, value, target){
    if(node == null){
        return new ListNode(value);
    } // keep this

    var nodeTarget = null;
    var runner = node;
    var targetNotInList = true;

    while(runner.next != null){
        if(runner.value == target){
            nodeTarget = runner;
            targetNotInList = false;
            break;
        }
        runner = runner.next;
    }

    if(targetNotInList){
        nodeTarget = runner;
    }

    var insert = new ListNode(value);

    insert.next = nodeTarget.next;
    nodeTarget.next = insert;

    return node;
}

// secondToLastValue(node):
    // Return the second-to-last value in the linked list. ( If it's only 0 or 1 long, return null.)

function secondToLastValue(node){
    if(node == null || node.next == null){
        return null;
    }
    var runner = node;
    while(runner.next.next != null){
        runner = runner.next;
    }
    
    return runner.value;
}

// 