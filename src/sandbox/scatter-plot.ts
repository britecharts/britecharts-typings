import { scatterPlot, ScatterPlotModule } from 'britecharts';

export const constructChart = (containerNode: Element): ScatterPlotModule => {
  const scatter = scatterPlot();

  scatter
    .width(containerNode.clientWidth)
    .aspectRatio(0.7)
    .hasTrendline(true)
    .grid('horizontal')
    .xAxisLabel('Temperature (C)')
    .yAxisLabel('Ice Cream Sales')
    .xAxisFormat('.1f')
    .yAxisFormat('$');

  return scatter;
};
