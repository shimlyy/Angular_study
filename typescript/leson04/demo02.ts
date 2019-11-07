interface LabledValue {
    lable: string;
}

function printLable(labledObj:LabledValue){
    console.log(labledObj.lable)
}

let myObj = {
    size:10,
    lable:"size 10 Object"
}
printLable(myObj)