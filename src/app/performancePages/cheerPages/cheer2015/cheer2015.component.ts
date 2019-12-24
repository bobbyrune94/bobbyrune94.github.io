import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheer2015',
  templateUrl: './cheer2015.component.html',
  styleUrls: ['./cheer2015.component.scss']
})
export class Cheer2015Component implements OnInit {

  pictureNums = Array(18).fill(0).map((x, i) => i+1);

  constructor() { }

  ngOnInit() {
  }

}
