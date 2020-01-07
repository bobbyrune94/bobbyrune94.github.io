import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  travelPhotos = Array(31).fill(0).map((x, i) => i+2)

  constructor() { }

  ngOnInit() {
  }

}
