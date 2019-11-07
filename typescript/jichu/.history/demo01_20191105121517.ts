//基础数据类型
//1.字符串类型
let email: string = "111@qq.com"
console.log(email);
//模版字符串
let msg: string = `my email is ${email}`;
console.log(msg)

//2.布尔类型
let isshow: boolean=false;

//3.数字
let age:number=20;

//4.数组
let list: number[]=[1,2,3,4]
console.log(list)
//Array<T>

//5.元组
let arr:[string,number]=["aaa",10]

//6.枚举
enum Weeks{Mon,Tue,Wed}
let day: Weeks=Weeks.Mon
console.log(day)
console.log(Weeks[0])
console.log(Weeks["Mon"])

//7.any
let x: any = "aaa"
x=20

//8.void 函数的返回值
function hello():void{
    console.log("hello")
}
function hello1():string{
    return "hello"
}
//9.undifined null
//let x1:undefined

//联合类型
let x2:number | string | boolean;

//类型推理
let x3=3
let x4;

//类型断言
let x5:number | string | boolean="this is a string";
let strlength:number=(<string>x5).length

let strlength1:number=(x5 as string).length
