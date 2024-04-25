class Human{
    constructor(name , age, size){
        this.__name= name;
        this.__age= age;
        this.__size = size;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name= name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age= age;
    }
    getSize(){
        return this.size;
    }
    setSize(size){
        this.size= size;
    }
}

let user = new Dayo