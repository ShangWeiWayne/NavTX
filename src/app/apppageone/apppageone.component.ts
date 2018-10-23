import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apppageone',
  templateUrl: './apppageone.component.html',
  styleUrls: ['./apppageone.component.css']
})
export class ApppageoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alert() {
    alert('click');
  }
}
