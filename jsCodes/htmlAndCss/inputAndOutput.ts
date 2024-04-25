function Person(personName: string, age: number){
    this.personName = personName;
    this.age= age;
    this.name= function(){
        return this.personName();
    }
    this.setName= function(name: string ){
        this.personName= name;
    }
}
const me = Person("name", 12);
console.log(me)