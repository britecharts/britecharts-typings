import { select } from 'd3-selection';
import * as britecharts from 'britecharts';
import { buildTemplate } from './template';
import { SAMPLE_BAR_DATA } from '../data/bar-sample';

export default (window: Window) => {
  const chartContainerId = 'chartArea';

  window.document.body.innerHTML = buildTemplate(chartContainerId);
  const containerNode = document.querySelector(`#${chartContainerId}`);

  const container = select(containerNode);
  const barChart = britecharts.bar();

  console.log({ britecharts });

  barChart
    .margin({
      left: 120,
      right: 20,
      top: 20,
      bottom: 40,
    })
    .isHorizontal(true)
    .hasPercentage(true)
    .colorSchema(britecharts.colors.colorSchemas.britecharts)
    .percentageAxisToMaxRatio(1.3)
    .width(800)
    .height(500);

  console.log({ SAMPLE_BAR_DATA });
  container.datum(SAMPLE_BAR_DATA).call(barChart);
};
