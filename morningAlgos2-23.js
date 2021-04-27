// QUEUES!

// So it looks like this is basically an upside-down stack.  FIFO / LIFO.

class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function display(node){
    if(node == null){
        console.log("null");
        return null;
    }
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

class SLQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value){
        if(this.length == 0){
            newNode = new ListNode(value);
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            var newNode = new ListNode(value);

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    dequeue(){
        if(this.length == 0){
            console.log("The queue is empty!");
            return null;
        }

        var first_node = this.head;
        this.head = this.head.next;
        first_node.next = null;

        this.length--;

        return first_node.value;
    }

    first(){
        return this.head.value;
    }

    contains(value){
        var runner = this.head;

        while(runner != null){
            if(runner.value == value){
                return true;
            }
            runner = runner.next;
        }

        return false;
    }

    isEmpty(){
        return (this.length == 0);
    }

    size(){
        return this.length;
    }

    compare(queue){
        if(this.length != queue.length){
            return false;
        }
        
        var runner_this = this.head;
        var runner_other = queue.head;

        while(runner_this != null){
            if(runner_this.value != runner_other.value){
                return false;
            }
            runner_this = runner_this.next;
            runner_other = runner_other.next;
        }

        return true;
    }
}



var myQueue = new SLQueue();

myQueue.enqueue(5);
myQueue.enqueue(12);
myQueue.enqueue(13);
// display(myQueue.head);


var secondQueue = new SLQueue();
secondQueue.enqueue(5);
secondQueue.enqueue(12);
secondQueue.enqueue(13);

console.log(myQueue.compare(secondQueue));

myQueue.dequeue();

console.log(myQueue.compare(secondQueue));

myQueue.enqueue(45);

console.log(myQueue.compare(secondQueue));

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();


myQueue.enqueue(5);
myQueue.enqueue(12);
myQueue.enqueue(13);

console.log(myQueue.compare(secondQueue));

secondQueue.enqueue(4);

console.log(myQueue.compare(secondQueue));

myQueue.enqueue(4);

console.log(myQueue.compare(secondQueue));