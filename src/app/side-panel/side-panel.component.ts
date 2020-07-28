import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  pdfClick(eventData) {
  console.log(eventData);
  }
  // tslint:disable-next-line:typedef
  excelClick(eventData) {
    console.log(eventData);
  }
  // tslint:disable-next-line:typedef
  chartClick(eventData) {
    console.log(eventData);
  }
}
