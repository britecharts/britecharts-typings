import { stackedArea, StackedAreaChartModule } from 'britecharts';

export const constructChart = (
  containerNode: Element
): StackedAreaChartModule => {
  const donutChart = stackedArea();

  donutChart
    .margin({
      left: 120,
      right: 20,
      top: 20,
      bottom: 40,
    })
    .width(containerNode.clientWidth)
    .height(500)
    .centeredTextFunction((d) => `${d.quantity} units`);

  return donutChart;
};
