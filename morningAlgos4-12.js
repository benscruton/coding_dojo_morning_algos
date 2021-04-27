class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
    }
}

class SLL{
    
    constructor(){
        this.head = null;
    }

    addToBack(valueInput){
        if(this.head == null){
            this.head = new Node(valueInput)
        }else{
            let runner = this.head
            while(runner.next!= null){
                runner = runner.next;
            }
            runner.next = new Node(valueInput)
        }
        return this
    }

    removeFromFront(){
        if(this.head==null){
            return this
        }
        else{
            this.head = this.head.next
            return this
        }
    }

    display(){
        let result = "";
        let runner = this.head;
        while(runner != null){
            result += `${runner.value} 👉 ⇶✨ `; 
            runner = runner.next;
        }

        console.log(result.slice(0, result.length - 6));
    }

    reverse(){
        if(this.head == null || this.head.next == null) return this;

        let prev = this.head;
        let mid = this.head.next;
        let front = this.head.next.next;

        this.head.next = null;
        
        while(mid != null){
            mid.next = prev;    // flips the arrow
            
            prev = mid;
            mid = front;    // last: this would be the old back
            if(front !== null) front = front.next; // last time: this will make front == null
        }

        this.head = prev;
        return this;
    }
    
    reverseOtherWay(){
        if(this.head == null) return this;

        let current = this.head;
        let runner = this.head.next;
        current.next = null;

        while(runner != null){
            runner.oldnext = runner.next;   // duplicate the "next" property so we can use it later
            runner.next = current;          // reassign "next" to point to prev, which we have saved as "current"
            current = runner;               // advance current by one
            runner = runner.oldnext;        // advance runner by one using "oldnext," which we saved earlier
            delete current.oldnext;         // we don't want this property to stick around, so we delete it
        }
        this.head = current;

        return this;
    }

}


sl1 =new SLL()
sl1.addToBack(5).reverse().display()



