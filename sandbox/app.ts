import { select } from 'd3-selection';
import { bar } from 'britecharts';
import { buildTemplate } from './template';
import { SAMPLE_BAR_DATA } from '../data/bar-sample';

export default (window: Window) => {
  const chartContainerId = 'chartArea';

  window.document.body.innerHTML = buildTemplate(chartContainerId);

  const container = select(chartContainerId);
  const barChart = bar();

  barChart
    .width(400)
    .height(400)
    .betweenBarsPadding(300)
    .isAnimated(true)
    .labelsNumberFormat('.0%')
    .orderingFunction((a, b) => a.value - b.value);

  container.datum(SAMPLE_BAR_DATA).call(barChart);
};
