import { select } from 'd3-selection';
import { SAMPLE_BAR_DATA } from '../data/bar-sample';
import { SAMPLE_DONUT_DATA } from '../data/donut-sample';
import { SAMPLE_STACKED_AREA_DATA } from '../data/stacked-area-sample';
import { SAMPLE_BULLET_DATA } from '../data/bullet-sample';
import { SAMPLE_SCATTER_PLOT_DATA } from '../data/scatter-plot-sample';
import { constructChart as constructBarChart } from './bar';
import { constructChart as constructDonutChart } from './donut';
import { constructChart as constructBulletChart } from './bullet';
import { constructChart as constructStackedAreaChart } from './stacked-area';
import { constructChart as constructScatterPlot } from './scatter-plot';
import { buildTemplate } from './template';

export default (window: Window) => {
  const chartContainerId = 'chartArea';

  window.document.body.innerHTML = buildTemplate(chartContainerId);

  const containerNode = document.querySelector(`#${chartContainerId}`);
  const container = select(containerNode);

  container.datum(SAMPLE_BAR_DATA).call(constructBarChart(containerNode));
  container.datum(SAMPLE_DONUT_DATA).call(constructDonutChart(containerNode));
  container.datum(SAMPLE_BULLET_DATA).call(constructBulletChart(containerNode));
  container
    .datum(SAMPLE_STACKED_AREA_DATA)
    .call(constructStackedAreaChart(containerNode));
  container
    .datum(SAMPLE_SCATTER_PLOT_DATA)
    .call(constructScatterPlot(containerNode));
};
