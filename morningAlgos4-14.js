class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.child = null;  // points to a SLL class
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

    addChild(list, idx){
        let runner = this.head;
        for(let i=0; i<idx; i++){
            if(runner === null){
                console.log("you broke it...");
                return;
            }
            runner = runner.next;
        }
        runner.child = list;
        return this;
    }

    flattenChildren(){
        let parentrunner = this.head;
        let runner = this.head.next;

        while(runner != null){
            // if this node doesn't have children, just advance pr and move on
            if(parentrunner.child === null){
                parentrunner = runner;
            }
            // if it does:
                // reassign the .next here
                // go through the child list with the parent runner
                // reassign the last node's .next to runner
            else{
                parentrunner.next = parentrunner.child.head;
                parentrunner.child = null;
                while(parentrunner.next != null){
                    parentrunner = parentrunner.next;
                }
                parentrunner.next = runner;
                parentrunner = runner;
            }
            runner = runner.next;
        }
        // advance the runner to the next one
        return this;
    }


    flattenChildrenRec(){
        let parentrunner = this.head;
        let runner = this.head.next;

        while(runner != null){
            if(parentrunner.child === null){
                parentrunner = runner;
            }
            else{
                parentrunner.child.flattenChildrenRec();

                parentrunner.next = parentrunner.child.head;
                parentrunner.child = null;
                while(parentrunner.next != null){
                    parentrunner = parentrunner.next;
                }
                parentrunner.next = runner;
                parentrunner = runner;
            }
            runner = runner.next;
        }
        return this;
    }
}