//1.类的定义
//2.类的继承
//3.访问修饰符
//4.静态属性和静态方法
//5.抽象类和多态

//js
// function Person(name){
//     this.name=name
//     this.print=function(){
//         console.log(this.name)
//     }
// }
// var p=new Person("aaa")
// p.print()

//ts 1.类的定义
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
    print(){
        return this.name+":"+this.age;
    }
}
var p=new Person("zhangsan",20)
console.log(p.print())

//2.类的继承
class student extends Person{
    cardnumber:string;
    school:string;
    dohomework(){
        return this.name+"今年"+this.age+"岁，就读于"+this.school+"，编号"+this.cardnumber;
    }
}
var p1=new student("lisi",18)
console.log(p1.dohomework())