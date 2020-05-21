import { scatter, ScatterPlotModule } from 'britecharts';

export const constructChart = (containerNode: Element): ScatterPlotModule => {
  const scatterPlot = scatter();

  scatterPlot
    .width(containerNode.clientWidth)
    .aspectRatio(0.7)
    .hasTrendline(true)
    .grid('horizontal')
    .xAxisLabel('Temperature (C)')
    .yAxisLabel('Ice Cream Sales')
    .xAxisFormat('.1f')
    .yAxisFormat('$');

  return scatterPlot;
};
