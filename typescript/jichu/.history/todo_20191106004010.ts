//1.定义一个待办的类
class Todo{
    content:string;
    status:boolean;
    constructor(content:string,status:boolean){
        this.content =content;
        this.status=status;
    }
}
//2.初始化待办的信息
let todolist:Todo[]=[
    new Todo("第一条待办",true);
    new Todo("第二条待办",false)
]