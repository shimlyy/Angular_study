//只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20};
p1.x =5; //x的值不可以更改
