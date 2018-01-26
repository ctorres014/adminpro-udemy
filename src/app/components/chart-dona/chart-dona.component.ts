import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-dona',
  templateUrl: './chart-dona.component.html',
  styles: []
})
export class ChartDonaComponent implements OnInit {

  // Doughnut
  // public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: number[] = [350, 450, 100];
  // public doughnutChartType: string = 'doughnut';
  @Input() leyenda: string;
  @Input() chartData: number[];
  @Input() chartLabels: string[];
  @Input() chartType: string;

  constructor() { }

  ngOnInit() {

  }

}
