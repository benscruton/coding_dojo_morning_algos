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
    }

    printBackwards(){
        let result = "";
        let runner = this.tail;
        while(runner != null){
            result += `${runner.value} ✨⬱ 👈 `;
            runner = runner.prev;
        }

        console.log(result.slice(0, result.length - 6));
    }

    isvalid(){
        if(this.head == null && this.tail == null) return true;
        if((this.head == null) - (this.tail == null) !== 0) return false;
        // if( (this.head == null && this.tail != null) || (this.head != null && this.tail == null) ) return false;
        if(this.length === 1 && this.head.next == null && this.head.prev == null && this.tail.next == null && this.tail.prev == null) return true;

        let back = this.head, front = this.head.next;
        while(front != null){
            if(back.next !== front || front.prev !== back) return false;
            front = front.next;
            back = back.next;
        }
        
        return true;
    }
    
    //let i =this.head, j = this.tail; 
    // while(i !== this.tail && j !== this.head)

    //
    //  5 >     6 >     12 >       9 >     11 >     7
    //  i >   < j
    //  if(!(i.next === j && j.prev === i)) return false;
    //

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
            if(runner.value === val) return true;
            runner = runner.next;
        }
        return false;
    }
    reverse(){

    }

}

const list = new DLL();

console.log(list.push(4).push(7).push(9).push(3).addFront(11).addFront(5).pop()); // 3
console.log(list.remFront()); // 5
list.print(); //11 -> 4 -> 7 -> 9

console.log(list.size());   // 4
list.printBackwards();
list.isvalid();

