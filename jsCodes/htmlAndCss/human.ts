class SuperClass{
    private name:string;
    private age: number;
    private size:number;
    constructor(name:string, age:number , size:number){
        this.name = name;
        this.age= age;
        this.size = size;
    }
    public getName ():string{
        return this.name;
    }
    public setName(name: string):void{
        this.name= name;    
    }
    public setAge(age :number): void{
        this.age= age;
    }
    public getAge():number{
        return this.age;
    }
    public getSize():number{
        return this.size;
    }
    public setSize(size:number): void{
        this.size= size;
    }
}