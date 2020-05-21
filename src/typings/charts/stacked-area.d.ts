import { ChartBaseAPI } from '@charts/base';
import { ChartModuleSelection } from '@charts/selection';

export enum StackedAreaChartKeys {
  Date = 'date',
  Name = 'name',
  Value = 'value',
}

export type StackedAreaChartDataShape = {
  [StackedAreaChartKeys.Date]: string;
  [StackedAreaChartKeys.Name]: string;
  [StackedAreaChartKeys.Value]: number;
};

export interface StackedAreaChartAPI
  extends ChartBaseAPI<StackedAreaChartDataShape> {}

export type StackedAreaChartModule = ChartModuleSelection<
  StackedAreaChartDataShape
> &
  StackedAreaChartAPI;

/**
 * import {bar} from 'britecharts;
 * bar().width(100).height(100)
 */
export function stackedArea(): StackedAreaChartModule;
