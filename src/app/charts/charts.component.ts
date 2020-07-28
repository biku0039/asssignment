import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  // Array of different segments in chart
  // tslint:disable-next-line:member-ordering
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  // Labels shown on the x-axis
  // tslint:disable-next-line:member-ordering
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  // tslint:disable-next-line:member-ordering
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  // tslint:disable-next-line:member-ordering
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  // tslint:disable-next-line:member-ordering
  lineChartLegend = true;

  // Define type of chart
  // tslint:disable-next-line:member-ordering
  lineChartType = 'line';

  lineChartPlugins = [];

  ngOnInit(): void {
  }

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
