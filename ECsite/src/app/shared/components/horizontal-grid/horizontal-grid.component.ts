import { Component, OnInit } from '@angular/core';

export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
