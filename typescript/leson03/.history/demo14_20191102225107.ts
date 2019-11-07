// let o ={
//     a:"foo",
//     b:12,
//     c:'bar'
// };
// let {b,c}=o;
// console.log(b,c);

// ({a,b}={a:"baz",b:101});

function keepWholeObject(wholeObject: { a: string, b?:number}){
    let { a, b = 1001 } = wholeObject;
    console.log(a,b);
}
keepWholeObject({a:"Jim",b:1002});


function f({a="wang",b=0}:{a?:string,b?:number}):void{
    console.log(`a:${a} b:${b}`)
}

f({})