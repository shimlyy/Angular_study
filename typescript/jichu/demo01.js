//基础数据类型
//1.字符串类型
var email = "111@qq.com";
console.log(email);
//模版字符串
var msg = "my email is " + email;
console.log(msg);
//2.布尔类型
var isshow = false;
//3.数字
var age = 20;
//4.数组
var list = [1, 2, 3, 4];
console.log(list);
//Array<T>
//5.元组
var arr = ["aaa", 10];
//6.枚举
var Weeks;
(function (Weeks) {
    Weeks[Weeks["Mon"] = 0] = "Mon";
    Weeks[Weeks["Tue"] = 1] = "Tue";
    Weeks[Weeks["Wed"] = 2] = "Wed";
})(Weeks || (Weeks = {}));
var day = Weeks.Mon;
console.log(day);
console.log(Weeks[0]);
console.log(Weeks["Mon"]);
//7.any
var x = "aaa";
x = 20;
//8.void 函数的返回值
function hello() {
    console.log("hello");
}
function hello1() {
    return "hello";
}
//9.undifined null
//let x1:undefined
//联合类型
var x2;
//类型推理
var x3 = 3;
var x4;
//类型断言
var x5 = "this is a string";
var strlength = x5.length;
var strlength1 = (x5), as = string, length;
