class Node{
    constructor(value, isItAWord = false){
        this.value = value;
        this.isWord = isItAWord;
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new Node("");
    }

    insert(word){
        word = word.toLowerCase();
        let runner = this.root;

        // first make word lowercase && check if there's already a node with the value
        for(let i=0; i<word.length; i++){

            // if the node doesn't exist, make a node real quick
            if(!runner?.children[runner.value + word[i]]){
                runner.children[runner.value + word[i]] = new Node(runner.value + word[i], (i == word.length - 1));
            }
            // advance to the next node, either an already-existing one or one we just made
            runner = runner.children[runner.value + word[i]];
        }
        return this;
    }
}

let trie = new Trie();

trie.insert("cat");
console.log(trie);
trie.insert("babaghanoush");
console.log(trie.root.children["c"]);
console.log(trie.root.children["b"].children["ba"].children["bab"].children["baba"].children["cat"]);
console.log(trie);
