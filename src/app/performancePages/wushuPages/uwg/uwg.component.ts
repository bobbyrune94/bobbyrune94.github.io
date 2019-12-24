import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uwg',
  templateUrl: './uwg.component.html',
  styleUrls: ['./uwg.component.scss']
})
export class UwgComponent implements OnInit {

  photos2018 = Array(6).fill(0).map((x, i) => i+2)
  photos2017 = Array(6).fill(0).map((x, i) => i+1)
  photos2016 = Array(6).fill(0).map((x, i) => i+1)

  constructor() { }

  ngOnInit() {
  }

}
