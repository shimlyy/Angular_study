import { Component } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

const todos = [
  {
    id: 1,
  title: '吃饭',
  done: false
  },
  {
    id: 2,
  title: '学习',
  done: true
  },
  {
    id: 3,
  title: '睡觉',
  done: true
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = JSON.parse(window.localStorage.getItem('todos') || '[]');

  public visibility: string = 'completed';

  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null;

  // 该函数是一个特殊的Angular生命周期钩子函数
  // 它会在Angular应用初始化的时候被执行一次
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // 初始化的时候手动调用一次
    this.hashchangeHandler();
    window.onhashchange = this.hashchangeHandler.bind(this);
  }

  // 当Angular组件数据发生改变的时候，ngDoCheck钩子函数会被触发
  // 我们要做的就是在这个钩子函数中去持久化储存我们的todos数据
  ngDoCheck() {
    window.localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  get filterTodos() {
    if (this.visibility === 'all') {
      return this.todos;
    } else if (this.visibility === 'active') {
      return this.todos.filter(t => !t.done);
    } else if (this.visibility === 'completed') {
      return this.todos.filter(t => t.done);
    }
  }

  addTodo(e): void {
    const titleText = e.target.value;
    if (!titleText.length) {
      return;
    }
    const last = this.todos[this.todos.length - 1];
    this.todos.push({
      id: last ? last.id + 1 : 1,
      title: titleText,
      done: false
    });

    // 清除文本框
    e.target.value = '';
  }

  get toggleAll() {
    return this.todos.every(t => t.done);
  }

  set toggleAll(val) {
    this.todos.forEach(t => t.done = val);
  }

  saveEdit(todo, e) {
    // 保存编辑
    todo.title  = e.target.value;
    // 去除编辑样式
    this.currentEditing = null;
  }

  handleEditKeyUp(e) {
    const{keyCode} = e;
    if (keyCode === 27) {
      // 取消编辑 同时把文本框的值恢复为原来的值
      target.value = this.currentEditing.title;
      this.currentEditing = null;
    }
  }

  get remaningCount() {
    return this.todos.filter(t => !t.done).length; // filter筛选
  }

  hashchangeHandler() {
    // 当用户点击了锚点的时候，我们需要获取当前锚点的标识
    // 然后动态的将跟组建中的visibility设置为当前点击的锚点标识

    const hash = window.location.hash.substr(1);
    switch (hash) {
      case '/':
        this.visibility = 'all';
        break;
      case '/active':
        this.visibility = 'active';
        break;
      case '/completed':
        this.visibility = 'completed';
        break;
    }
  }

  // 清除所有已完成服务项
  clearAllDone() {
    this.todos = this.todos.filter(t => !t.done)
  }


}

