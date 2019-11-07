//布尔值
var isDone = false;
var isDoneNow = true;
var isDoneString = true;
//数字 number
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串 string
var studentName = "wangxiaomeng";
studentName = "Liu";
var age = 20;
console.log("I'm " + studentName + " My age is " + (age + 1) + ". \n" + (age > 18 ? '成年' : '未成年'));
//数组 
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//元祖 Tuple
var x;
x = ['hello', 10];
console.log(x[0]);
console.log(x[1]);
x[3] = 'world';
console.log(x[3]);
//枚举
// enum Color {Red,Green,Blue};
// console.log(Color)
// console.log(Color.Blue)
// let c:Color =Color.Red;
// console.log(Color[2])
// enum Color {Red = 1, Green, Blue};
// let c: Color = Color.Green;
// console.log(c);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
//Any
var notSure1 = true;
var notSure2 = 123;
var notSure3 = "jim";
var list3 = [1, true, "free"];
function warnUser() {
    console.log("this is my warning Message");
}
//Never
// function error(message:string):never{
//     throw new Error(message);
// }
// function fail(){
//     return error("Something failed");
// }
// function infiniteLoop(): never{
//     while (true){
//     }
// }
//断言类型
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
// let someValue2: any = "this is a string";
// let strLength2: number = (someValue2 as string).length;
console.log(strLength1);
