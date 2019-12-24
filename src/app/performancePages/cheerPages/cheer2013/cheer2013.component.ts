import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheer2013',
  templateUrl: './cheer2013.component.html',
  styleUrls: ['./cheer2013.component.scss']
})
export class Cheer2013Component implements OnInit {

  pictureNums = Array(10).fill(0).map((x, i) => i+1);

  constructor() { }

  ngOnInit() {
  }

}
