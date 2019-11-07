//接口：行为的抽象
//1.对类的约束
//接口定义
//打印机
interface Iprinter{
    Printing(msg: string):string;
}
interface Imessage{
    getmsg():string;
}

//实现接口
class colorprinter implements Iprinter,Imessage{
    Printing(msg:string):string{
        return "打印"+msg+"成功";
    }
    getmsg():string{
        return "惠普"
    }
}
let p1=new colorprinter()
let val=p1.Printing("简历");
console.log(p1.getmsg())
console.log(val)

//1.实现接口，要实现里面的内容
//2.定义接口的时候，只定义生命即可，不包含具体内容

//2.对函数的约束
interface Imyfunction{
    (a:string,b:number):boolean;
}
let fun1:Imyfunction;
fun1=function(a:string,b:number):boolean{
    return false;
}
//3.数组
interface Istuarr{
    [index:number]:string;
}
let arr1:Istuarr;
arr1=["aaa","bbb"];
console.log(arr1[0])

//4.json
interface Idata{
    name:string,
    age:number,      //只读属性
    email?:string   //可选属性
}
function showdata(n:Idata){
    n.age=18;
    console.log(JSON.stringify(n))
}
showdata({name:"zhangsan",age:19})