import { ChartBaseAPI } from '@common/base';
import { GridTypes } from '@common/grid';
import { ChartModuleSelection } from '@common/selection';
import { AxisTimeCombination } from '@helpers/constants';


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

export interface StackedAreaEmptyDataConfig {
  minDate: Date;
  maxDate: Date;
  maxY: number;
}

export interface StackedAreaChartAPI
  extends ChartBaseAPI<StackedAreaChartModule> {
  axisTimeCombinations: {
    [key in keyof typeof AxisTimeCombination]: AxisTimeCombination | string;
  };
  areaCurve(curveType?: string): StackedAreaChartModule;
  aspectRatio(ratio?: number): StackedAreaChartModule;
  areaOpacity(opacity?: number): StackedAreaChartModule;
  dateLabel(label?: string): StackedAreaChartModule;
  emptyDataConfig(config?: StackedAreaEmptyDataConfig): StackedAreaChartModule;
  grid(gridType?: GridTypes): StackedAreaChartModule;
  keyLabel(label?: string): StackedAreaChartModule;
  tooltipThreshold(threshold?: number): StackedAreaChartModule;
  topicsOrder(orderList?: string[]): StackedAreaChartModule;
  valueLabel(label?: string): StackedAreaChartModule;
  xAxisCustomFormat(format?: string): StackedAreaChartModule;
  xAxisFormat(format?: string): StackedAreaChartModule;
  xAxisScale(scale?: 'linear' | 'logarithmic'): StackedAreaChartModule;
  xAxisValueType(valueType?: 'date' | 'numeric'): StackedAreaChartModule;
  xTicks(ticks: number): StackedAreaChartModule;
  yAxisBaseline(baseLine: number): StackedAreaChartModule;
  yAxisLabel(label: string): StackedAreaChartModule;
  yAxisLabelOffset(offset: number): StackedAreaChartModule;
  yTicks(ticks: number): StackedAreaChartModule;
}

export type StackedAreaChartModule = ChartModuleSelection<
  StackedAreaChartDataShape[]
> &
  StackedAreaChartAPI;

/**
 * import {stackedArea} from 'britecharts;
 * const areaChart = stackedArea();
 * areaChart().width(100).height(100);
 * areaChart.xAxisFormat(areaChart.axisTimeCombinations.HOUR_DAY)
 */
export function stackedArea(): StackedAreaChartModule;
