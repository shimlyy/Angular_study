import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
topmenus: TopMenu[] = [
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

imageSliders: ImageSlider[] = [
  {
    imgUrl: 'https://actus-prod.store-image.jp/shop_contents_headline/1704/shop_contents_headline_group_member_1704.jpg?ts=20191107132638',
    link: '',
    caption: ''
  },
  {
    imgUrl: 'https://actus-prod.store-image.jp/shop_contents_headline/1684/shop_contents_headline_group_member_1684.jpg?ts=20191010164341',
    link: '',
    caption: ''
  },
  {
    imgUrl: 'https://actus-prod.store-image.jp/shop_contents_headline/1667/shop_contents_headline_group_member_1667.jpg?ts=20190919185023',
    link: '',
    caption: ''
  },
  {
    imgUrl: 'https://actus-prod.store-image.jp/shop_contents_headline/1690/shop_contents_headline_group_member_1690.jpg?ts=20191016125001',
    link: '',
    caption: ''
  },
  {
    imgUrl: 'https://actus-prod.store-image.jp/shop_contents_headline/1696/shop_contents_headline_group_member_1696.jpg?ts=20191029161335',
    link: '',
    caption: ''
  }

];

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
}
