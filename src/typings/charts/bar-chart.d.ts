import { ChartBaseAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';

export enum BarChartKeys {
  Value = 'value',
  Name = 'name',
}

export type BarChartDataShape = {
  [BarChartKeys.Value]: number;
  [BarChartKeys.Name]: string;
};

export type BarSelection = Selection<
  BaseType,
  BarChartDataShape,
  HTMLElement,
  any
>;

export interface BarChartAPI extends ChartBaseAPI<BarChartModule> {
  betweenBarsPadding(padding?: number): BarChartModule;
  chartGradient(gradient?: [string, string]): BarChartModule;
  enableLabels(shouldEnable?: boolean): BarChartModule;
  hasPercentage(hasPercentage?: boolean): BarChartModule;
  hasSingleBarHighlight(hasHighlight?: boolean): BarChartModule;
  highlightBarFunction(
    highlightFunc: (bar: BarSelection) => void | null
  ): BarChartModule;
  isHorizontal(isHorizontal?: boolean): BarChartModule;
  labelsMargin(margin?: number): BarChartModule;
  labelsNumberFormat(format?: string): BarChartModule;
  labelsSize(size?: number): BarChartModule;
  percentageAxisToMaxRatio(ratio?: number): BarChartModule;
  orderingFunction(
    orderingFunc: (a: BarChartDataShape, b: BarChartDataShape) => void
  ): BarChartModule;
  shouldReverseColorList(shouldReverse?: boolean): BarChartModule;
  valueLabel(valueLabel?: string): BarChartModule;
  xAxisLabel(xAxisLabel?: string): BarChartModule;
  xAxisLabelOffset(offset?: number): BarChartModule;
  xTicks(ticks?: number): BarChartModule;
  yAxisLabel(yAxisLabel?: string): BarChartModule;
  yAxisLabelOffset(yAxisLabelOffset?: number): BarChartModule;
  yAxisPaddingBetweenChart(yAxisPadding?: number): BarChartModule;
  yTicks(ticks?: number): BarChartModule;
}

export type BarChartModule = ChartModuleSelection<BarChartDataShape[]> &
  BarChartAPI;

/**
 * import {bar} from 'britecharts;
 * bar().width(100).height(100)
 */
export function bar(): BarChartModule;
