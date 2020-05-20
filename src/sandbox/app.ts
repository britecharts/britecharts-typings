import { bar, colors } from 'britecharts'
import { select } from 'd3-selection'
import { SAMPLE_BAR_DATA } from '../data/bar-sample'
import { buildTemplate } from './template'

export default (window: Window) => {
  const chartContainerId = 'chartArea'

  window.document.body.innerHTML = buildTemplate(chartContainerId)

  const containerNode = document.querySelector(`#${chartContainerId}`)
  const container = select(containerNode)
  const barChart = bar()

  barChart
    .margin({
      left: 120,
      right: 20,
      top: 20,
      bottom: 40
    })
    .isHorizontal(true)
    .hasPercentage(true)
    .colorSchema(colors.colorSchemas.britecharts)
    .percentageAxisToMaxRatio(1.3)
    .width(containerNode.clientWidth)
    .height(500)

  container.datum(SAMPLE_BAR_DATA).call(barChart)
}
