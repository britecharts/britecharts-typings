import { bullet, BulletChartModule } from 'britecharts';

export const constructChart = (containerNode: Element): BulletChartModule => {
  const bulletChart = bullet();

  bulletChart.width(containerNode.clientWidth).height(300);

  return bulletChart;
};
