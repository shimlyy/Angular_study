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

//ts
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