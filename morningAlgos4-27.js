// instead of just storing if it's a word or not, we'll store how many times it's been added/searched



class Node{
    constructor(value){
        this.value = value;
        this.count = 0;
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new Node("");
    }

    // Tries Multiset

    // In our previous Trie data structure we only kept track of if a given word had been searched for. This time let's keep track of how many times a word has been "inserted" into our Trie. With this new attribute in hand we can unlock our full predictive powers.

    insert(word){
        word = word.toLowerCase();
        let runner = this.root;

        // first make word lowercase && check if there's already a node with the value
        for(let i=0; i<word.length; i++){

            // if the node doesn't exist, make a node real quick
            if(!runner?.children[runner.value + word[i]]){
                runner.children[runner.value + word[i]] = new Node(runner.value + word[i]);
            }
            // advance to the next node, either an already-existing one or one we just made

            runner = runner.children[runner.value + word[i]];
        }
        runner.count++;

        return this;
    }


    // Autocomplete

    // Write a method called "autocomplete(start)" that takes a starting string and returns a list of all of the words that start with "start". To provide the most relevant responses sort the words by how frequently they have been used.

    autocomplete(str){
        const results = [];
    
        // Recursive helper function; doesn't get called quite yet
        const helper = (node) => {
            if(node.count > 0){
                results.push(node);
            }
            // go through all of the child nodes, recursively presumably
            for(let child in node.children){
                helper(node.children[child]);
            }
            return results;
        }
    
        // follow the trail from the string we receive and save that node
        let runner = this.root;
        for(let i=0; i<str.length; i++){
            runner = runner?.children[ runner.value + str[i] ];
        }
    
        helper(runner);
        
        return results.sort((a, b) => a.count > b.count ? -1 : 1).map(r => r.value);   
    }
}

let trie = new Trie();

trie.insert("cat");
trie.insert("cat");
trie.insert("cat");
trie.insert("cat");
trie.insert("cat");
trie.insert("cat");
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("caterpillar")
trie.insert("carve")
trie.insert("carve")
trie.insert("carve")
trie.insert("blarg");




console.log("\n\nFOR 'CA:'");
console.log(trie.autocomplete("ca"));