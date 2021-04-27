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
display(testList);




function addFront(node, value){
    new_node = new ListNode(value);
    new_node.next = node;
    return new_node;
}

function addBack(node, value) {
    var currentNode = node;
    while (currentNode.next != null){
        currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(value);
    return node;
}

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



// removeFront(node):
    // remove the head of the list and return the new head

function removeFront(node){
    if (node.next == null){
        return null;
    }
    var newHead = node.next;
    node.next = null;
    return newHead;
}


// removeBack(node):
    // remove the tail of the list and return the (new?) head

function removeBack(node){
    if(node.next == null){
        return null;
    }

    var runner = node;
    while(runner.next.next != null){
        runner = runner.next;
    }
    runner.next = null;
    return node;
}
