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
// function add(x:number,y:number):number{
//     return x+y
// }
// //可选参数
// function show(name,age?:number):void{
//     console.log(name,age)
// }
// show("zhangsan",18)

//剩余参数
// function add1(x1,x2,...x:number[]):number{
//     var sum=0
//     for(var i=0;i<x.length;i++){
//         sum+=x[i]
//     }
//     return x1+x2+sum
// }
// var sum(1,2,3,4,5,6,7,8)
// console.log(sum)

//3.参数的重载
function getinfo(name:string):void;
function getinfo(age:number):void;
function getinfo(str:any):void{
    if(typeof str=="string"){
        console.log("名字",str)
    }
    if(typeof str=="number"){
        console.log("年龄",str)
    }
}
getinfo("zhangsansan")