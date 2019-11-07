//接口：行为的抽象

//接口定义
//打印机
interface Iprinter{
    Printing(msg: string):string;
}
interface Imessage{
    getmsg():string;
}

//实现接口
class colorprinter implements Iprinte,Imessage{
    Printing(msg:string):string{
        return "打印"+msg+"成功";
    }
}
let p1=new colorprinter()
let val=p1.Printing("简历");
console.log(val)
//1.实现接口，要实现里面的内容
//2.定义接口的时候，只定义生命即可，不包含具体内容