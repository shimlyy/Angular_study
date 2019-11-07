let o ={
    a:"foo",
    b:12,
    c:'bar'
};
let {b,c}=o;
console.log(b,c);

({a,b}={a:"baz",b:101});