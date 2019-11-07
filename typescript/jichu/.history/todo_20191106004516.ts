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
    new Todo("第一条待办",true),
    new Todo("第二条待办",false)
]
//3.渲染待办列表
function renderList(){
    let listdom=''
    if(todolist.length>0){
        todolist.forEach((item,index)=>{
            //ES6拼接
            listdom+=`<li class="${item.status ? 'item-ok':''}">
            ${item.content}
            </li>
            `
        })
    }
    else{
        listdom+="<li>暂时还没有待办</li>"
    }
}