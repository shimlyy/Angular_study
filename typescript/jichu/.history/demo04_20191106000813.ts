//函数的定义

//js
// function add(x,y){
//     return x+y
// }
// let add1=function(x,y){return x+y}

//ts
//1.函数的定义
// function add(x,y):number{
//     return x+y
// }
//匿名函数
// let add1=function(x,y):number{return x+y}

//2.函数的参数
function add(x:number,y:number):number{
    return x+y
}
//可选参数
function show(name,age?:number):void{
    console.log(name,age)
}
show("zhangsan",18)