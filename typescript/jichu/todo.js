//1.定义一个待办的类
var Todo = (function () {
    function Todo(content, status) {
        this.content = content;
        this.status = status;
    }
    return Todo;
})();
//2.初始化待办的信息
var todolist = [
    new Todo("第一条待办", true),
    new Todo("第二条待办", false)
];
//3.渲染待办列表
var todoul = document.getElementById("todolist");
function renderList() {
    var listdom = '';
    if (todolist.length > 0) {
        todolist.forEach(function (item, index) {
            //ES6拼接
            listdom += "<li class=\"" + (item.status ? 'item-ok' : '') + "\">\n            " + item.content + "\n            </li>\n            ";
        });
    }
    else {
        listdom += "<li>暂时还没有待办</li>";
    }
    todoul.innerHTML = listdom;
}
window.onload = function () {
    renderList();
};
