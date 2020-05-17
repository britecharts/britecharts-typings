import * as britecharts from 'britecharts';
import { buildTemplate } from './template';

export default (window: Window) => {
  const chartContainerId = 'chartArea';

  window.document.body.innerHTML = buildTemplate(chartContainerId);

  const barChart = britecharts.bar();

  barChart
    .width(400)
    .height(400)
    .betweenBarsPadding(300)
    .isAnimated(true)
    .labelsNumberFormat('.0%')
    .orderingFunction((a, b) => a.value - b.value);
};
