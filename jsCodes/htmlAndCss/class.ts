
class Dayo{
    private name: string;
    private age : number;
    private size: number;
    constructor(name:string, age: number, size:number){
        this.name = name ;
        this.age = age;
        this.size - size;
    }
    public setName(nameGiven: string):void{
        this.name = nameGiven;
    }
    public getName(): string{
        return this.name;
    }
    public setAge(age: number):void{
        this.age= age;
    }
    public getAge():number{
        return this.age;
    }
    public setSize(size: number):void{
        this.size= size;
    }
    public getSize():number{
        return this.size;
    }

}