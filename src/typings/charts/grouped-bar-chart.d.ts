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
  yTickTextOffset(yTickTextOffset?: Offset): GroupedBarChartModule;
  yAxisLabelOffset(yAxisLabelOffset?: number): GroupedBarChartModule;
  yAxisLabel(yAxisLabel?: string): GroupedBarChartModule;
  xTicks(ticks?: number): GroupedBarChartModule;
  valueLabelFormat(format?: string): GroupedBarChartModule;
  tooltipThreshold(threshold?: number): GroupedBarChartModule;
  yTicks(ticks?: number): GroupedBarChartModule;
  isHorizontal(isHorizontal?: boolean): GroupedBarChartModule;
  grid(gridMode?: 'vertical'|'horizontal'|'full'): GroupedBarChartModule;
  betweenGroupsPadding(padding?: number): GroupedBarChartModule;
  betweenBarsPadding(padding?: number): GroupedBarChartModule;
  aspectRatio(ratio?: number): GroupedBarChartModule;
}

export type GroupedBarChartModule = ChartModuleSelection<GroupedBarChartDataShape[]> &
  GroupedBarChartAPI;

/**
 * import {groupedBar} from 'britecharts;
 * groupedBar().width(100).height(100)
 */
export function groupedBar(): GroupedBarChartModule;
