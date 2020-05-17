import { Selection } from 'd3-selection';
import { ChartBaseAPI } from './base';

enum BarChartKeys {
  Value = 'value',
  Name = 'name',
}

export type BarChartDataShape = {
  [BarChartKeys.Value]: number;
  [BarChartKeys.Name]: string;
};

type BarChartModuleSelection = (
  _selection: Selection<Element, BarChartDataShape[], Element | null, any>,
  _data: BarChartDataShape[]
) => void;

export interface BarChartAPI extends ChartBaseAPI<BarChartModule> {
  betweenBarsPadding(padding?: number): BarChartModule;
  chartGradient(gradient?: [string, string]): BarChartModule;
  hasPercentage(hasPercentage?: boolean): BarChartModule;
  isHorizontal(isHorizontal?: boolean): BarChartModule;
  labelsNumberFormat(format?: string): BarChartModule;
  labelsSize(size?: number): BarChartModule;
  percentageAxisToMaxRatio(ratio?: number): BarChartModule;
  orderingFunction(
    orderingFunc: (a: BarChartDataShape, b: BarChartDataShape) => void
  ): BarChartModule;
}

export type BarChartModule = BarChartModuleSelection & BarChartAPI;
