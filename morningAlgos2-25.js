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

        return first_node;
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

    isPalindrome(){
        if (this.length <= 1){
            return true;
        }
        var runner = this.head;
        var midpoint = Math.floor(this.length / 2)
            // Get the mid_node to be one after the midpoint of the list
        var mid_node = this.head;
        for(let i = 0; i < midpoint; i++){
            mid_node = mid_node.next;
        }
            // if statement solves even/odd issues
        if(this.length % 2 == 1){
            mid_node = mid_node.next;

        }
            // Compare the first value in the queue (runner) to the last value in the queue (back_runner)
        for(let i = 0; i < midpoint; i++){
            let back_runner = mid_node;
                // Move back_runner to the end:
            for(let j = 0; j < midpoint - 1 - i; j++){
                back_runner = back_runner.next;
            }
                // Now, compare the two outside values.  If they don't match, return false.
            if(runner.value != back_runner.value){
                return false;
            }
            // Then, advance runner one, and compare the second value to the second-to-last, then the third to the third-to-last, and so on.
            runner = runner.next;
        }
            // If we get to the end of the queue and haven't found a mis-matched pair, it's a palindrome and we'll return true.
        return true;
    }

    isPalindromeToo() {
        // if the queue has one or no elements, return true
        if (this.length === 0 || this.length === 1) return true;

        let stack = new SLStack();
        const midpoint = Math.floor(this.length/2);
        // Phase 1: push to to stack
        let runner = this.head;
        for (let i = 0; i < midpoint; i++) {
            stack.push(runner.value);
            runner = runner.next;
        }
        // Phase 1.5: potentially skip middle element
        if (this.length % 2 == 1) {
            runner = runner.next;
        }
        // Phase 2: pop from stack
        while (!stack.isEmpty()) {
            if ( stack.pop().value !== runner.value ) {
                return false;
            }
            runner = runner.next; 
        }
        return true;
    }
}
