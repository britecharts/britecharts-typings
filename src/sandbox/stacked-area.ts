import { stackedArea, StackedAreaChartModule } from 'britecharts';

export const constructChart = (
  containerNode: Element
): StackedAreaChartModule => {
  const stackedAreaChart = stackedArea();

  stackedAreaChart
    .isAnimated(true)
    .tooltipThreshold(600)
    .grid('full')
    .width(containerNode.clientWidth);

  return stackedAreaChart;
};
