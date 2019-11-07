//布尔值
let isDone: boolean = false;
let isDoneNow: boolean = true;
let isDoneString: boolean = true;

//数字 number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//字符串 string
let studentName: string = "wangxiaomeng";
studentName = "Liu";

let age: number = 20;

console.log(`I'm ${studentName} My age is ${age + 1}. 
${age>18?'成年':'未成年'}`)

//数组 
let list:number[] = [1,2,3];
let list2:Array<number>=[1,2,3];

//元祖 Tuple
let x:[string,number];
x=['hello',10];

console.log(x[0]);
console.log(x[1]);

x[3]='world';
console.log(x[3])

//枚举
// enum Color {Red,Green,Blue};
// console.log(Color)
// console.log(Color.Blue)

// let c:Color =Color.Red;
// console.log(Color[2])

// enum Color {Red = 1, Green, Blue};
// let c: Color = Color.Green;
// console.log(c);

enum Color {Red=1, Green, Blue};
let colorName: string = Color[2];
console.log(colorName);

//Any
let notSure1: any = true;
let notSure2: any = 123;
let notSure3: any = "jim";

let list3: any[] = [1,true,"free"];

function warnUser(): void{
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
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

console.log(strLength1)