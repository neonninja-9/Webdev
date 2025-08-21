//objects = containers of data and behaviour
let person = {//object
    name:"gourav",
    age:21,
}
console.log(person)
//or

for(let val in person){
    console.log(val + ";" + person[val]);
}

//class
class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person{
    constructor(name , age , id){
        super(name , age); 
        this.id = id;
    }
    //methode
    greet(){
        console.log(`HI! I am ${this.name} and i am learning java script`)
    }
}
let s1 = new Student("gourav" ,21 , 1)
s1.greet();

class teacher extends Person{
    #salary = 0;
    constructor(name,  age ){
        super(name  ,age)
    }
    addSalary(salary){
        this.#salary += salary;
    }//setter

    getSalary(){
        return this.#salary;
    }
}
let t1 = new teacher("sneha", 23)
t1.addSalary(100000);
console.log(t1.getSalary());