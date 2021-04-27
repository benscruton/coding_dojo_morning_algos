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

class SLStack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value){
        var newNode = new ListNode(value);
        newNode.next = this.top;
        this.top = newNode;
        
        if(this.bottom == null){
            this.bottom = this.top;
        }

        this.length++;

        return this.top;
    }

    pop(){
        var temp = this.top;   
        this.top = this.top.next;
        temp.next = null;

        this.length--;

        if(this.length == 0){
            this.bottom = null;
        }
        
        return temp;        
    }

    top_value(){
        return this.top.value;
    }

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

    isEmpty(){
        return (this.top == null);
    }

    size(){
        return this.length;
    }
}

function makeNewStack(length = 10, max_value = 20, min_value = 0){
    var newStack = new SLStack();

    for(let i = 0; i < length; i++){
        var nextEntry = Math.floor((max_value - min_value + 1)*Math.random());
        console.log(nextEntry);
        newStack.push(nextEntry);
    }
    return newStack;
}

var myStack = makeNewStack();
display(myStack.top);