// Doubly Linked List - Reverse

// Write a method to reverse the order of the Doubly Linked List. Sometimes it is enough to simply reverse the values, 
// but we should attempt to reverse the order of the Doubly Linked List Nodes.

class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}


class DLL{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value){
        let newNode = new Node(value);

        if(this.head == null){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    addFront(value){
        let newNode = new Node(value);
        if(this.tail == null){
            this.tail = newNode;
        } else {
            newNode.next = this.head;   
            this.head.prev = newNode;
        }
        //not sure if we need this line tbh 
        this.head = newNode;
        this.length++;
        return this;
    }
    
    pop(){
        if(this.tail == null) return;
        let lastNode = this.tail;
        this.tail = lastNode.prev;
        this.tail.next = null;
        
        this.length --;
        return lastNode.value;
    }
    
    remFront(){
        if(this.head == null) return;
        let newHead = this.head.next;
        let oldHeadVal = this.head.value;
        this.head.next = null;
        newHead.prev = null;
        this.head = newHead;
        this.length--;
        return oldHeadVal;
    }
    
    size(){
        return this.length;
    }
    
    print(){
        let result = "";
        let runner = this.head;
        while(runner != null){
            result += `${runner.value} 👉 ⇶✨ `; 
            runner = runner.next;
        }

        console.log(result.slice(0, result.length - 6));
        return this;
    }

    display(){
        return this.print();
    }

    printBackwards(){
        let result = "";
        let runner = this.tail;
        while(runner != null){
            result += `${runner.value} ✨⭅ 👈 `;
            runner = runner.prev;
        }
        console.log(result.slice(0, result.length - 6));
        return this;
    }

    isValid(){
        if(this.head == null && this.tail == null) return true; // empty list is always valid
        if(this.length === 1 && this.head.next == null && this.head.prev == null && this.tail.next == null && this.tail.prev == null) return true;  // list has one element: as long as that one element is linked properly we're good
        if((this.head == null) - (this.tail == null) !== 0) return false; // head or tail null but not the other

        let back = this.head, front = this.head.next;
        while(front != null){
            if(back.next !== front || front.prev !== back) return false;
            front = front.next;
            back = back.next;
        }
        
        return true;
    }

    hasLoop(){
        let count = 0;
        let runner = this.head;
        while(runner !== null){
            runner = runner.next;
            count++;
            if(count > this.length) return true;
        }
        return false;
    }
    hasLoopRec(runner = this.head, count = 0){
        if(runner === null) return false;
        count++;
        if(count > this.length) return true;
        return hasLoopRec(runner.next, count);
    }
    contains(val){
        let runner = this.head;
        while(runner !== null){
            if(runner.value === value) return true;
            runner = runner.next;
        }
        return false;
    }



    reverse(){
        let runner = this.head;
        while(runner != null){
            [runner.prev, runner.next] = [runner.next, runner.prev];
            runner = runner.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }

    reverse2(){
        let runner = this.tail;
        while(runner !== null){
            [runner.next, runner.prev] = [runner.prev, runner.next];
            runner = runner.next;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }
    recurseReverse(runner = this.head){
        if(runner === null){
            [this.head, this.tail] = [this.tail, this.head];
            return this;
        }
        [runner.prev, runner.next] = [runner.next, runner.prev];
        return this.recurseReverse(runner.prev);
    }

    reverseRecurseReverse(runner = this.tail){
        if(runner === null){
            [this.head, this.tail] = [this.tail, this.head];
            return this;
        }
        [runner.next, runner.prev] = [runner.prev, runner.next];
        return this.reverseRecurseReverse(runner.next);
    }

    reverseValues(){
        for(let frontrunner = this.head, backrunner = this.tail, i=0;
            i < this.length / 2;
            frontrunner = frontrunner.next, backrunner = backrunner.prev, i++){
                [frontrunner.value, backrunner.value] = [backrunner.value, frontrunner.value];
            }
        return this;
    } 

}

const list = new DLL();

list.push(4).push(7).push(9).push(3).addFront(11).addFront(5).pop();


list.print().reverse().display();








