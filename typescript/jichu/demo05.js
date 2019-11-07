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
function printarr(arr) {
    //for /for in 得到下标索引/ for of
    for (var _i = 0; _i < arr.length; _i++) {
        var item = arr[_i];
        console.log(item); // for of 得到具体的元素
    }
}
printarr([11, 22, 33, 44]);
printarr(["aa", "bb", "cc"]);
//泛型类
var myArraylist = (function () {
    function myArraylist() {
        this.list = [];
    }
    myArraylist.prototype.add = function (val) {
        this.list.push(val);
    };
    return myArraylist;
})();
var arr = new myArraylist();
arr.add(11);
arr.add(12);
console.log(arr.list);
var add;
add = function (x, y) {
    return 1111;
};
console.log(add(1, 4));
