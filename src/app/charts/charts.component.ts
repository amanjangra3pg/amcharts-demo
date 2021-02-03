import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  tabs = ['Introduction', 'Pie', 'Donut', 'Line', 'Bar'];
  currentTab: Tabs = Tabs.INTRO;
  pieChart: am4charts.PieChart;
  donutChart: am4charts.PieChart;
  barChart: am4charts.XYChart;
  lineChart: am4charts.XYChart;

  constructor() { }

  ngOnInit(): void {
  }
  switchTab(tab: string) {
    console.log(tab);
    this.invalidateCharts();
    this.currentTab = <Tabs>tab;
    setTimeout(() => {
      if (this.currentTab == Tabs.PIE)
        this.renderPieChart();

      if (this.currentTab == Tabs.DONUT)
        this.renderDonutChart();

      if (this.currentTab == Tabs.LINE)
        this.renderLineChart();

      if (this.currentTab == Tabs.BAR)
        this.renderBarChart();
    }, 500);
  }
  invalidateCharts() {
    if (this.pieChart)
      this.pieChart.dispose();

    if (this.donutChart)
      this.donutChart.dispose();

    if (this.lineChart)
      this.lineChart.dispose();

    if (this.barChart)
      this.barChart.dispose();
  }
  renderPieChart() {
    /*
      Instantiate chart using am4Charts.create method which takes the div id 
      where chart needs to be created and Chart Type
    */
    let chart = am4core.create("pie-chart-div", am4charts.PieChart);

    // Add data
    chart.data = Data.pieChartData;

    // Add and configure Series by pushing into charts series array
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres"; // Key
    pieSeries.dataFields.category = "country"; // Value

    /*
     Series has slices instance which further has template. Whatever property you set on template
     will be applied on actual slices.
     */
    pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    //You can bind any property that is in the JSON chart data to chart properties eg color
    pieSeries.slices.template.propertyFields.fill = "color";

    //You can play with different states of a slice eg On Slice Hover/Active you can do some stuff
    let hs = pieSeries.slices.template.states.getKey("hover");
    hs.properties.scale = 1.1;
    hs.properties.fillOpacity = 0.5;

    let as = pieSeries.slices.template.states.getKey("active");
    as.properties.shiftRadius = 0.1;

    //Change the labels
    pieSeries.labels.template.text = "Value for {category} is {value.value}";

    // Customize Tooltip
    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.background.fill = am4core.color("#000000");
    // pieSeries.slices.template.tooltipHTML =
    //   `
    // <div>
    //   <center>The hovered slice represents {country}</center>
    //   <br>
    //   <center>Supply is {litres}</center>
    // </div>
    // `;

    //Add legends
    /*
      You can change legend indicator shape size, font, position, add image in indicators etc
      Refer to doc for all ops
    */
    chart.legend = new am4charts.Legend();

    this.pieChart = chart;
  }
  renderBarChart() {

  }
  renderLineChart() {

  }
  renderDonutChart() {
    /*
         Instantiate chart using am4Charts.create method which takes the div id 
         where chart needs to be created and Chart Type
       */
    let chart = am4core.create("donut-chart-div", am4charts.PieChart);

    // Add data
    chart.data = Data.pieChartData;

    // Add and configure Series by pushing into charts series array
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres"; // Key
    pieSeries.dataFields.category = "country"; // Value

    //Convert Pie Chart to Donut
    chart.innerRadius = am4core.percent(40);

    /*
     Series has slices instance which further has template. Whatever property you set on template
     will be applied on actual slices.
     */
    pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    //You can bind any property that is in the JSON chart data to chart properties eg color
    pieSeries.slices.template.propertyFields.fill = "color";

    //You can play with different states of a slice eg On Slice Hover/Active you can do some stuff
    let hs = pieSeries.slices.template.states.getKey("hover");
    hs.properties.scale = 1.1;
    hs.properties.fillOpacity = 0.5;

    let as = pieSeries.slices.template.states.getKey("active");
    as.properties.shiftRadius = 0.1;

    //Change the labels
    pieSeries.labels.template.text = "Value for {category} is {value.value}";

    // Customize Tooltip
    pieSeries.tooltip.getFillFromObject = false;
    pieSeries.tooltip.background.fill = am4core.color("#ffffff");
   
    pieSeries.slices.template.tooltipHTML =
      `
   <div style="background:#ffffff">
     <center>The hovered slice represents {country}</center>
     <br>
     <center>Supply is {litres}</center>
   </div>
   `;

    //Add legends
    /*
      You can change legend indicator shape size, font, position, add image in indicators etc
      Refer to doc for all ops
    */
    chart.legend = new am4charts.Legend();

    this.pieChart = chart;
  }
}
export enum Tabs {
  INTRO = 'Introduction',
  PIE = 'Pie',
  DONUT = 'Donut',
  LINE = 'Line',
  BAR = 'Bar'
}
export class Data {
  public static pieChartData = [{
    "country": "Lithuania",
    "litres": 501,
    "color": am4core.color("#67B7DC")
  }, {
    "country": "Czechia",
    "litres": 301,
    "color": am4core.color("#6794DC")
  }, {
    "country": "Ireland",
    "litres": 201,
    "color": am4core.color("#6771DC")
  }, {
    "country": "Germany",
    "litres": 165,
    "color": am4core.color("#8067DC")
  }]
}