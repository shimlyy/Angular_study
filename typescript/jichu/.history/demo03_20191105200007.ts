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
// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age
//     }
//     print(){
//         return this.name+":"+this.age;
//     }
// }
// var p=new Person("zhangsan",20)
// console.log(p.print())

//2.类的继承
// class student extends Person{
//     cardnumber:string;
//     school:string;
//     constructor(cardnumber:string,school:string){
//         super("zhangsan",20);
//         this.cardnumber=cardnumber;
//         this.school=school;
//     }
//     dohomework(){
//         return this.name+"今年"+this.age+"岁，就读于"+this.school+"，编号"+this.cardnumber;
//     }
// }
// var p1=new student("1001","清华大学")
// p1.cardnumber="1001";
// p1.school ="清华大学";
// console.log(p1.dohomework())

//接口继承
// interface Printer{
//     getmsg();
// }
// interface ColorPrinter extends Printer{
//     printing();
// }
// class HPPrinter implements ColorPrinter{
//     printing(){
//         console.log("打印成功")
//     }
//     getmsg(){
//         console.log("HP001")
//     }
// }
// var hp = new HPPrinter()
// hp.getmsg();
// hp.printing();

//3.访问修饰符
//public 定义共有成员 / private 私有 / protected 受保护
// class Person{
//     public name:string;
//     private age:number;
//     protected email:string;
//     constructor(name:string,age:number,email:string){
//         this.name=name;
//         this.age=age;
//         this.email=email;
//     }
//     print(){
//         return this.name+":"+this.age;
//     }
// }
// var p=new Person("zhangsan",20,"1111@gmail.com")
// console.log(p.name)
// //console.log(p.age)
// //console.log(p.email)
// class Student extends Person{
//     show(){
//         console.log(this.name,this.email);
//     }
// }

//4.静态属性和静态方法
// function Person(){
//     //实例属性
//     this.name="zhangsan"
//     //实例方法
//     this.print=function(){...}
// }
// Person.age=19//静态属性
// //静态方法
// Person.print1=function(){...}
// Person.print1()//调用静态方法
// console.log(Person.age)
// var p1=new Person()
// p1.print()//调用实例方法
//----------------------------------------
//ts
//一个方法与实例没关系的时候选择静态方法
// class Person{
//     //实例属性
//      name:string;
//      static age:number;//静态属性
//      email:string;
//     constructor(name:string,age:number,email:string){
//         this.name=name;
//         // Person.age=age;
//         this.email=email;
//     }
//     //实例方法
//     print(){
//         return this.name+":"
//     }
//     //静态方法
//     static show(){
//         console.log("show 方法")
//     }
// }
// Person.show();
// var p1=new Person("zhangsan",22,"sss@gmail.com")
// console.log(p1.print())

//多态：
// class Animal{
//     eat(){
//         console.log("animal eat")
//     }
// }
// class Cat extends Animal{
//     eat(){
//         console.log("猫吃鱼")
//     }
// }
// class Dog extends Animal{
//     eat(){
//         console.log("够吃骨头")
//     }
// }
// var c1=new Cat()
// c1.eat

//抽象类/抽象方法
//6.1 抽象类是提供其他类继承的基类（父类），不能直接被实例
//6.2抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
//6.3子类继承抽象类，实现抽象方法

//定义
abstract class Animal{
    abstract eat();
    run(){
        console.log("run run run")
    }
}
class Cat extends Animal{
    eat(){
        console.log("猫吃鱼")
    }
}
class Dog extends Animal{
    eat(){
        console.log("够吃骨头")
    }
}
var c1= new Cat()
c1.eat
var c2=new Dog()
c1.eat