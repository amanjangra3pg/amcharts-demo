# AmchartsDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve --port 9999` for a dev server. Navigate to `http://localhost:9999/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## For Charts 

Instantiate chart using am4Charts.create method which takes the div id where chart needs to be created and Chart Type


`let chart = am4core.create("donut-chart-div", am4charts.PieChart);`


Add and configure Series by pushing into charts series array


`let pieSeries = chart.series.push(new am4charts.PieSeries());

pieSeries.dataFields.value = "litres"; // Key

pieSeries.dataFields.category = "country"; // Value`


Series has slices instance which further has template. Whatever property you set on template will be applied on actual slices.

`pieSeries.slices.template.stroke = am4core.color("#4a2abb");

pieSeries.slices.template.strokeWidth = 2;

pieSeries.slices.template.strokeOpacity = 1;`


You can bind any property that is in the JSON chart data to chart properties eg color

`pieSeries.slices.template.propertyFields.fill = "color";`

You can play with different states of a slice eg On Slice Hover/Active you can do some stuff

`let hs = pieSeries.slices.template.states.getKey("hover");

hs.properties.scale = 1.1;

hs.properties.fillOpacity = 0.5;`

`let as = pieSeries.slices.template.states.getKey("active");

as.properties.shiftRadius = 0.1;`

You can set/modify the labels. All the properties JSON data passed to the chart can be used for that

`pieSeries.labels.template.text = "Value for {category} is {value.value}";`
