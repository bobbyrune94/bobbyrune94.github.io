import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheer2014',
  templateUrl: './cheer2014.component.html',
  styleUrls: ['./cheer2014.component.scss']
})
export class Cheer2014Component implements OnInit {

  pictureNums = Array(18).fill(0).map((x, i) => i+1);

  constructor() { }

  ngOnInit() {
  }

}
