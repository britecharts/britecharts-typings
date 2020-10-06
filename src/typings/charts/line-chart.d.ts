import { ChartBaseAPI, InteractiveChartAPI } from '@common/base';
import { GridTypes } from '@common/grid';
import { ChartModuleSelection } from '@common/selection';
import { AxisTimeCombination } from '@helpers/constants';


export enum LineChartKeys {
  Date = 'date',
  Name = 'name',
  TopicName = 'topicName',
  Value = 'value',
}

export type LineChartDataShape = {
  [LineChartKeys.Date]: string;
  [LineChartKeys.Name]: string;
  [LineChartKeys.TopicName]: string;
  [LineChartKeys.Value]: number;
};

export type LineChartData = {
  data: LineChartDataShape[],
}

export interface LineChartEmptyDataConfig {
  minDate: Date;
  maxDate: Date;
  maxY: number;
}

export interface CustomLine {
  y: number;
  name: string;
  color: string;
}

export interface LineChartAPI
  extends ChartBaseAPI<LineChartModule>, InteractiveChartAPI<LineChartModule> {
  axisTimeCombinations: {
    [key in keyof typeof AxisTimeCombination]: AxisTimeCombination | string;
  };
  aspectRatio(ratio?: number): LineChartModule;
  grid(gridType?: GridTypes): LineChartModule;
  lineCurve(curveType?: string): LineChartModule;
  lineGradient(gradient?: [string, string]): LineChartModule;
  lines(customLines: CustomLine[]): LineChartModule;
  shouldShowAllDataPoints(showAllDataPoints?: boolean): LineChartModule;
  tooltipThreshold(threshold?: number): LineChartModule;
  xAxisCustomFormat(format?: string): LineChartModule;
  xAxisFormat(format?: string): LineChartModule;
  xAxisLabel(label: string): LineChartModule;
  xAxisScale(scale?: 'linear' | 'logarithmic'): LineChartModule;
  xAxisValueType(valueType?: 'date' | 'numeric'): LineChartModule;
  xTicks(ticks: number): LineChartModule;
  yAxisLabel(label: string): LineChartModule;
  yAxisLabelPadding(padding: number): LineChartModule;
  yTicks(ticks: number): LineChartModule;
}


export type LineChartModule = ChartModuleSelection<
LineChartData
> &
  LineChartAPI;

/**
 * import {line} from 'britecharts;
 *
 * const lineChart = line();
 *
 * lineChart()
 *    .width(100)
 *    .height(100)
 *    .xAxisFormat(lineChart.axisTimeCombinations.HOUR_DAY)
 */
export function line(): LineChartModule;
