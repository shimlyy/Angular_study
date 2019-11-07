//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20};
// p1.x =5; //x的值不可以更改

let a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
// ro[0] =12;
// ro.push(5);
// ro.length = 100;
// a = ro;
a = ro as number[]; //类型断言