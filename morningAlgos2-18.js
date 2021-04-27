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

var testList = newList(20, 100);
var theList = newList(20, 3);
// console.log("The original list is: ");
// display(testList);

function moveToBack(head, moveme){
        // If the value to be moved is already at the back, we can just return the list as-is:
    if(moveme.next == null){
        return head;
    }

    var runner = head;
    while(runner.next != null){
        if(runner.next == moveme){
            var beforeMoveMe = runner;
        }
        runner = runner.next;
    }

        // Do this if the value to be moved *is* the head:
    if(head == moveme){
        var temp = head.next;
        head.next = null;
        runner.next = head;
        return temp;
    }

        // Otherwise, do the normal three steps with the one to be moved: attach the one before it to the one after it, attach it to the tail, and set its "next" property to null.
    beforeMoveMe.next = beforeMoveMe.next.next
    runner.next = moveme;
    moveme.next = null;

    return head;
}

function countNodes(node){
    var counter = 0;
    var runner = node;
    while(runner != null){
        counter++;
        runner = runner.next;
    }
    return counter;
}


// maxToBack(node):
    // find the node with the largest value and make it the new tail.  Then, 

function maxToBack(node){
    var maxNode = node;
    var runner = node;
    while(runner != null){
        if(maxNode.value < runner.value){
            maxNode = runner;
        }
        runner = runner.next;
    }
    node = moveToBack(node, maxNode);
    return node;
}

// minToFront(node):
    // Similar, but this time we're taking the minimum node and moving it to the front.

function minToFront(node){
    var minNode = node;
    var runner = node;
    while(runner != null){
        if(runner.value < minNode.value){
            minNode = runner;
        }
    }   
}


// Bonus -- partition(node, target):
// return your linked list rearranged into three sections:
    // The first is all nodes with a value less than the target value
    // The second is all nodes with a value equal to the target value
    // The third is all nodes with a value greater than the target value.
// Return one single list
// Assume the list must be rearranged in some way (duh)


function partitionNode(head, target){

    // First, we'll move all the nodes equal to the target value to the end of the list, one by one.
    var runner = head;
    var countskips = 0;
    // Going through a "for" loop equal to the length of the chain means that we'll look at each value once.  A "while" would make it trickier to avoid an infinite loop at the end.
    for(let i=0; i<countNodes(head); i++){
        if(runner.value == target){
            head = moveToBack(head, runner);
            runner = head;
            // This for loop brings our runner back up to the same point in the loop where we were before we moved the current value.
            for(let j = 0; j < countskips; j++){
                runner = runner.next;
            }
        }
            // If we moved the value to the end, we actually don't want to advance our runner.
        else{
            runner = runner.next;
            countskips++;
        }
    }

    // Now, we do the same thing, but for the nodes whose value is greater than the target value.
    runner = head;
    countskips = 0; // Don't need to declare it again, just reset it
    for(let i=0; i<countNodes(head); i++){
        if(runner.value > target){
            head = moveToBack(head, runner);
            runner = head;
            for(let j = 0; j < countskips; j++){
                runner = runner.next;
            }
        }
        else{
            runner = runner.next;
            countskips++;
        }
    }

    return head;
}







console.log("Original list:");
display(testList);

testList = partitionNode(testList, 10);
display(testList);








// moveToBack(theList, theList.next.next);
//display(theList);

// display(testList);
// console.log("This is the original list ^^^");

// maxToBack(testList);
// console.log("This is the modified list ^^^");





//todo minToFront(node)



//* bonus partition(node, target)


function partition(node, target){
    runner = node;
    moveToBack(node, node);
    display(node);
    return node;
}






// WARNING: WEIRD SHIT AHEAD
    // (no idea why it's behaving the way that it is, but it is)


function moveToBackFirstTry(head, moveme){
    if(moveme.next == null){
        return head;
    }
    var runner = head;
    
    // if(moveme.value == head.value){
    //     console.log("we're doing the if")
    //     console.log(head.value);
    //     var newHead = head.next;
    //     newHead.next = head.next.next
    //     console.log(head.value);
    //     runner = head;
    //     moveme.next = null;
    //     while(runner.next != null){
    //         runner = runner.next
    //     }
    //     runner.next = moveme;
    //     return newHead;
    // }
    
    
    //Sam's solution:
        // runner.next = head;
        // var temp = head.next;
        // head.next = null;
        // return temp;

    if(moveme == head){
        console.log("we're doing the thing");
        while(runner.next != null){
            console.log(`runner is ${runner.value} and the next one is ${runner.next.value}`);
            runner = runner.next;
        }
        console.log(`the last value is ${runner.value}`)

        runner.next = head; // this makes it a loop
        
        console.log(`runner is ${runner.value} and the next one (previously the head) is ${runner.next.value}`);
        console.log(`head is ${head.value} and the next one is ${head.next.value}`);

        runner = runner.next.next; // now we skip ahead two, which is where we want the new head to be
        console.log(`Now the runner is ${runner.value}, next is ${runner.next.value}, next is ${runner.next.next.value}, and it's still a loop so the next is ${runner.next.next.next.value} which is the same.`);
        
        console.log("Now I'm nulling out head.next");
        head.next = null; // finally we break the loop
        console.log(`Runner is still ${runner.value}`);
        console.log(`Head.next is ${head.next}`);
        console.log("Display runner comes up with the following:");
        display(runner);
        console.log("Returning runner and then displaying the list:");
        return runner;
        
        
        var temp = head.next
        console.log(`head is still ${head.value}, temp is ${temp.value}`)

        // head = head.next;
        console.log(`temp is still ${temp.value}`);
        console.log(`head is ${head.value} and the next one is ${head.next.value} and the next one is ${head.next.next.value} and the next one is ${head.next.next.next.value}`)

        head.next = null;
        return temp;
    }
    

    while(runner.next != null){
        // when we hit the node before moveme, make it point to the one after
        if(runner.next == moveme){
            runner.next = moveme.next;
        }        
        runner = runner.next;
    }

    runner.next = moveme;

    moveme.next = null;
    // set the tail to point to moveme
    return head;
}
//          /-------\
//  - 4 - 12 - 15 x 3 - 7 - 9 - 11 - 25(h)