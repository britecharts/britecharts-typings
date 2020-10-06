import { LocalObject } from '@common/local';
import { StackedBarBaseAPI, InteractiveChartAPI, ExportableChartAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';
import { StackedAreaChartModule } from 'britecharts';


export enum StackedBarChartKeys {
  Stack = 'stack',
  Name = 'name',
  Value = 'value',
}

export type StackedBarChartDataShape = {
  [StackedBarChartKeys.Value]: number;
  [StackedBarChartKeys.Name]: string;
  [StackedBarChartKeys.Stack]: string;
};

export type StackedBarSelection = Selection<
  BaseType,
  StackedBarChartDataShape,
  HTMLElement,
  any
>;

type Offset = {
  x: number;
  y: number;
}

export interface StackedBarChartAPI extends StackedBarBaseAPI<StackedBarChartModule>, InteractiveChartAPI<StackedBarChartModule>, ExportableChartAPI<StackedAreaChartModule> {
  aspectRatio(ratio?: number): StackedBarChartModule;
  betweenBarsPadding(padding?: number): StackedBarChartModule;
  grid(gridMode?: 'vertical'|'horizontal'|'full'): StackedBarChartModule;
  hasPercentage(hasPercentage?: boolean): StackedBarChartModule;
  hasReversedStacks(hasReversedStacks?: boolean): StackedBarChartModule;
  isHorizontal(isHorizontal?: boolean): StackedBarChartModule;
  locale(localObject?: LocalObject | null): StackedBarChartModule;
  percentageAxisToMaxRatio(ratio?: number): StackedBarChartModule;
  tooltipThreshold(threshold?: number): StackedBarChartModule;
  valueLabelFormat(format?: string): StackedBarChartModule;  //Deprecated on V3
  xTicks(ticks?: number): StackedBarChartModule;
  yAxisLabel(yAxisLabel?: string): StackedBarChartModule;
  yAxisLabelOffset(yAxisLabelOffset?: number): StackedBarChartModule;
  yTicks(ticks?: number): StackedBarChartModule;
}


export type StackedBarChartModule = ChartModuleSelection<StackedBarChartDataShape[]> &
  StackedBarChartAPI;

/**
 * import {stackedBar} from 'britecharts;
 * stackedBar().width(100).height(100)
 */
export function stackedBar(): StackedBarChartModule;
