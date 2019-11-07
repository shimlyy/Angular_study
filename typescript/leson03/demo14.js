// let o ={
//     a:"foo",
//     b:12,
//     c:'bar'
// };
// let {b,c}=o;
// console.log(b,c);
// ({a,b}={a:"baz",b:101});
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, b);
}
keepWholeObject({ a: "Jim", b: 1002 });
function f(_a) {
    var _b = _a.a, a = _b === void 0 ? "wang" : _b, _c = _a.b, b = _c === void 0 ? 0 : _c;
    console.log("a:" + a + " b:" + b);
}
f({});
