//泛型

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