//泛型

//泛型函数
// function printarr(arr:number[]):void{
//     //for /for in 得到下标索引/ for of
//     for(var item of arr){
//         console.log(item)// for of 得到具体的元素
//     }
// }
// printarr([11,22,33,44])

// function printarr1(arr:string[]):void{
//     //for /for in 得到下标索引/ for of
//     for(var item of arr){
//         console.log(item)// for of 得到具体的元素
//     }
// }
// printarr1(["aa","bb","cc"])

function printarr<T>(arr:T[]):void{
    //for /for in 得到下标索引/ for of
    for(var item of arr){
        console.log(item)// for of 得到具体的元素
    }
}
printarr<number>([11,22,33,44])
printarr<string>(["aa","bb","cc"])

//泛型类
class myArraylist<T>{
    public name:T;
    public list:T[]=[];
    add(val:T):void{
        this.list.push(val)
    }
}
var arr=new myArraylist<number>()
arr.add(11)
arr.add(12)
console.log(arr.list)