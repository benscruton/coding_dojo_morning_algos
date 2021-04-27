class ArrStack{
    constructor(){
        this.contents = []
    }

    push(value){
        this.contents.push(value);
    }

    pop(){
        this.contents.pop();
    }

    top(){
        if(this.contents.length == 0){
            return null;
        }
        return this.contents[this.contents.length - 1];
    }

    contains(value){
        for(let i = 0; i < this.contents.length; i++){
            if(this.contents[i] == value){
                return true;
            }
        }
        return false;
    }

    isEmpty(){
        return this.contents.length == 0;
    }

    size(){
        return this.contents.length;
    }

}