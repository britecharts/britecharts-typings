import { ChartDimensionsAPI, ChartAnimationAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';

export enum SparklineChartKeys {
  Value = 'value',
  Date = 'date',
}

export type SparklineChartDataShape = {
  [SparklineChartKeys.Value]: number;
  [SparklineChartKeys.Date]: string;
};

export type SparklineSelection = Selection<
  BaseType,
  SparklineChartDataShape,
  HTMLElement,
  any
>;

export interface SparklineChartAPI extends
    ChartDimensionsAPI<SparklineChartModule>,
    ChartAnimationAPI<SparklineChartModule> {
  areaGradient(gradient?: [string, string]): SparklineChartModule;
  lineGradient(gradient?: [string, string]): SparklineChartModule;
  titleText(title?: string): SparklineChartModule;
  titleTextStyle(titleStyle?: any): SparklineChartModule;
  loadingState(markup?: string): SparklineChartModule;
}

export type SparklineChartModule = ChartModuleSelection<SparklineChartDataShape[]> &
  SparklineChartAPI;

/**
 * import {sparkline} from 'britecharts;
 * sparkline().width(100).height(100)
 */
export function sparkline(): SparklineChartModule;
