import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    template: `
    <div style="width: 500px;">
    <!-- <kendo-chart [categoryAxis]="{ categories: categories }">
    <kendo-chart-title text="Gross domestic product growth /GDP annual %/"></kendo-chart-title>
    <kendo-chart-legend position="bottom" orientation="horizontal"></kendo-chart-legend>
    <kendo-chart-tooltip format="{0}%"></kendo-chart-tooltip>
    <kendo-chart-series>
        <kendo-chart-series-item *ngFor="let item of series"
            type="line" style="smooth" [data]="item.data" [name]="item.name">
        </kendo-chart-series-item>
    </kendo-chart-series>
</kendo-chart> -->
</div>
    `
})
export default class HomeComponent {
    public series: any[] = [{
        name: "India",
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
      }, {
        name: "Russian Federation",
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
      }, {
        name: "Germany",
        data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
      },{
        name: "World",
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
      }];
      public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
}

