//函数的定义
function getinfo(str) {
    if (typeof str == "string") {
        console.log("名字", str);
    }
    if (typeof str == "number") {
        console.log("年龄", str);
    }
}
getinfo("zhangsansan");
