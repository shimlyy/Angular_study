//实现接口
var colorprinter = (function () {
    function colorprinter() {
    }
    colorprinter.prototype.Printing = function (msg) {
        return "打印" + msg + "成功";
    };
    colorprinter.prototype.getmsg = function () {
        return "惠普";
    };
    return colorprinter;
})();
var p1 = new colorprinter();
var val = p1.Printing("简历");
console.log(p1.getmsg());
console.log(val);
var fun1;
fun1 = function (a, b) {
    return false;
};
var arr1;
arr1 = ["aaa", "bbb"];
console.log(arr1[0]);
function showdata(n) {
    n.age = 18;
    console.log(JSON.stringify(n));
}
showdata({ name: "zhangsan", age: 19 });
