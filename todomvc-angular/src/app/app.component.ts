import { Component } from '@angular/core';

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
  }[] = todos;

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


}
