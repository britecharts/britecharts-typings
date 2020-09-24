import { sparkline, SparklineChartModule } from 'britecharts';

export const constructChart = (containerNode: Element): SparklineChartModule => {
  const sparklineChart = sparkline();

  sparklineChart
    .margin({
      left: 100,
      right: 100,
      top: 80,
      bottom: 80,
    })
    .width(containerNode.clientWidth)
    .height(300)
    .isAnimated(true)
    .duration(400);

  return sparklineChart;
};
