import { ChartBaseAPIMinimal } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';
import { AxisTimeCombination } from '@helpers/constants';
import { ColorGradientType } from '@helpers/colors';


export enum BrushChartKeys {
  Value = 'value',
  Date = 'date',
}

export type BrushChartDataShape = {
  [BrushChartKeys.Value]: number;
  [BrushChartKeys.Date]: string;
};

export type BrushSelection = Selection<
  BaseType,
  BrushChartDataShape,
  HTMLElement,
  any
>;

export interface BrushChartAPI extends ChartBaseAPIMinimal<BrushChartModule> {
  axisTimeCombinations: {
    [key in keyof typeof AxisTimeCombination]: AxisTimeCombination | string;
  };
  dateRange(dateRange?: [string, string]): BrushChartModule;
  gradient(gradient?: ColorGradientType): BrushChartModule;
  roundingTimeInterval(roundingTimeInterval?: string): BrushChartKeys;
  xAxisCustomFormat(format?: string): BrushChartModule;
  xAxisFormat(format?: string): BrushChartModule;
  xTicks(ticks?: number): BrushChartModule;
}

export type BrushChartModule = ChartModuleSelection<BrushChartDataShape[]> &
  BrushChartAPI;

/**
 * import {brush} from 'britecharts;
 * brush().width(100).height(100)
 */
export function brush(): BrushChartModule;
