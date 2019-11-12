import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus: TopMenu[] = [
    {
    title: 'レディース',
    link: ''
    },
    {
      title: 'メンズ',
      link: ''
    },
    {
      title: 'キーズ',
      link: ''
    },
    {
      title: 'べビー',
      link: ''
    },
    {
      title: 'バッグ',
      link: ''
    },
    {
      title: 'パソコン',
      link: ''
    },
    {
      title: '携帯',
      link: ''
    },
    {
      title: '靴',
      link: ''
    },
    {
      title: '化粧品',
      link: ''
    },
    {
      title: '電気',
      link: ''
    },
    {
      title: '本',
      link: ''
    },
    {
      title: 'スポーツ',
      link: ''
    },
    {
      title: '車',
      link: ''
    },
    {
      title: '食品',
      link: ''
    }
];
}
