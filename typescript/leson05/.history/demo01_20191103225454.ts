interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)

class Animal{
    name: string;
}
class Dog extends Animal{
    breed:string;
}
interface NotOkey{
    [x: number]: Dog;
    [x: string]: Animal;
}

interface NumberDictionary{
    [index: string]: number;
    length: number; // 可以，length是number类型
    // name: string; //错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    let myArray: ReadonlyStringArray = ["Alice", "Bob"];
    //myArray[2] = "Mallory"; // error! 不能设置myArray[2]，因为索引签名是只读的。