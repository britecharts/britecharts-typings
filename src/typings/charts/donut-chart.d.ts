import { ChartBaseAPI } from '@charts/base'
import { ChartModuleSelection } from '@charts/selection'

export enum DonutChartKeys {
  ID = 'id',
  Name = 'name',
  Quantity = 'quantity',
  Percentage = 'percentage'
}

export type DonutChartDataShape = {
  [DonutChartKeys.ID]: number
  [DonutChartKeys.Name]: string
  [DonutChartKeys.Quantity]: number
  [DonutChartKeys.Percentage]: number
}

export interface DonutChartAPI extends ChartBaseAPI<DonutChartModule> {
  centeredTextFunction(
    centeredTextFunc: (a: DonutChartDataShape) => void
  ): DonutChartModule
}

export type DonutChartModule = ChartModuleSelection<DonutChartDataShape[]> &
  DonutChartAPI

/**
 * import {donut} from 'britecharts;
 * donut().width(100).height(100)
 */
export function donut (): DonutChartModule
