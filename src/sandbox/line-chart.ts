import { line, LineChartModule } from 'britecharts';

export const constructChart = (
  containerNode: Element
): LineChartModule => {
  const lineChart = line();

  lineChart
    .isAnimated(true)
    .tooltipThreshold(600)
    .aspectRatio(0.5)
    .grid('horizontal')
    .margin({ top: 60, bottom: 50, left: 50, right: 30 })
    .yAxisLabel('Value Axis Label')
    .on('customMouseOver', (...args) => {
      console.log('customMouseOver')
      console.log('args', args)
    })
    .width(containerNode.clientWidth);

  return lineChart;
};
