import { GroupedBarBaseAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';


export enum GroupedBarChartKeys {
  Group = 'group',
  Name = 'name',
  Value = 'value',
}

export type GroupedBarChartDataShape = {
  [GroupedBarChartKeys.Value]: number;
  [GroupedBarChartKeys.Name]: string;
  [GroupedBarChartKeys.Group]: string;
};

export type GroupedBarSelection = Selection<
  BaseType,
  GroupedBarChartDataShape,
  HTMLElement,
  any
>;

type Offset = {
  x: number;
  y: number;
}

export interface GroupedBarChartAPI extends GroupedBarBaseAPI<GroupedBarChartModule> {
  aspectRatio(ratio?: number): GroupedBarChartModule;
  betweenBarsPadding(padding?: number): GroupedBarChartModule;
  betweenGroupsPadding(padding?: number): GroupedBarChartModule;
  grid(gridMode?: 'vertical'|'horizontal'|'full'): GroupedBarChartModule;
  isHorizontal(isHorizontal?: boolean): GroupedBarChartModule;
  tooltipThreshold(threshold?: number): GroupedBarChartModule;
  valueLabelFormat(format?: string): GroupedBarChartModule;
  xTicks(ticks?: number): GroupedBarChartModule;
  yAxisLabel(yAxisLabel?: string): GroupedBarChartModule;
  yAxisLabelOffset(yAxisLabelOffset?: number): GroupedBarChartModule;
  yTicks(ticks?: number): GroupedBarChartModule;
  yTickTextOffset(yTickTextOffset?: Offset): GroupedBarChartModule;
}

export type GroupedBarChartModule = ChartModuleSelection<GroupedBarChartDataShape[]> &
  GroupedBarChartAPI;

/**
 * import {groupedBar} from 'britecharts;
 * groupedBar().width(100).height(100)
 */
export function groupedBar(): GroupedBarChartModule;
