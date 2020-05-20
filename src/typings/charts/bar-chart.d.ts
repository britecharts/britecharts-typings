import { ChartBaseAPI } from '@charts/base'
import { ChartModuleSelection } from '@charts/selection'

export enum BarChartKeys {
  Value = 'value',
  Name = 'name'
}

export type BarChartDataShape = {
  [BarChartKeys.Value]: number
  [BarChartKeys.Name]: string
}

export interface BarChartAPI extends ChartBaseAPI<BarChartModule> {
  betweenBarsPadding(padding?: number): BarChartModule
  chartGradient(gradient?: [string, string]): BarChartModule
  enableLabels(shouldEnable?: boolean): BarChartModule
  hasPercentage(hasPercentage?: boolean): BarChartModule
  isHorizontal(isHorizontal?: boolean): BarChartModule
  labelsNumberFormat(format?: string): BarChartModule
  labelsSize(size?: number): BarChartModule
  percentageAxisToMaxRatio(ratio?: number): BarChartModule
  orderingFunction(
    orderingFunc: (a: BarChartDataShape, b: BarChartDataShape) => void
  ): BarChartModule
}

export type BarChartModule = ChartModuleSelection<BarChartDataShape[]> &
  BarChartAPI

/**
 * import {bar} from 'britecharts;
 * bar().width(100).height(100)
 */
export function bar (): BarChartModule
