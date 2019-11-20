import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: HomeService) { }
  SelectedTabLink;

  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.SelectedTabLink = params.get('tabLink');
    });
    this.channels = this.service.getChannels();
    this.imageSliders = this.service.getImageSliders();
  }

}
