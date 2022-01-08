import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  summer2021List = Array(13).fill(0).map((x, i) => i+2)
  christmas2021List = Array(21).fill(0).map((x, i) => i+2)

  constructor() { }

  ngOnInit() {
  }

}
