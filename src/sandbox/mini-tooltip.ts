import { bar, miniTooltip, colors, BarChartModule } from 'britecharts';

export const constructMiniTooltipBarChart = (containerNode: Element): BarChartModule => {
  const barChart = bar();
  const tooltip = miniTooltip();

  barChart
    .margin({
      left: 120,
      right: 20,
      top: 20,
      bottom: 40,
    })
    .isHorizontal(true)
    .colorSchema(colors.colorSchemas.britecharts)
    .width(containerNode.clientWidth)
    .height(500)
    .on('customMouseOver', tooltip.show)
    .on('customMouseMove', tooltip.update)
    .on('customMouseOut', tooltip.hide);

  return barChart;
};
