import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  constructor(private router: Router) {}

  topMenus: TopMenu[] = [
    {
      id: 1,
      title: 'ホームー',
      link: 'hot'
    },
    {
      id: 2,
      title: 'レディース',
      link: 'women'
      },
      {
        id: 3,
        title: 'メンズ',
        link: 'men'
      },
      {
        id: 4,
        title: 'キーズ',
        link: 'kids'
      },
      {
        id: 5,
        title: 'べビー',
        link: 'baby'
      },
      {
        id: 6,
        title: 'バッグ',
        link: 'bag'
      },
      {
        id: 7,
        title: 'パソコン',
        link: 'computer'
      },
      {
        id: 8,
        title: '携帯',
        link: 'phone'
      },
      {
        id: 9,
        title: '靴',
        link: 'shoes'
      },
      {
        id: 10,
        title: '化粧品',
        link: 'buety'
      },
      {
        id: 11,
        title: '電気',
        link: 'appliance'
      },
      {
        id: 12,
        title: '本',
        link: 'book'
      },
      {
        id: 13,
        title: 'スポーツ',
        link: 'sport'
      },
      {
        id: 14,
        title: '車',
        link: 'car'
      },
      {
        id: 15,
        title: '食品',
        link: 'food'
      }
  ];


  ngOnInit(): void {}

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

}
