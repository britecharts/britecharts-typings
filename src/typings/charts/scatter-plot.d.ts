import { ChartBaseAPI, InteractiveChartAPI, ExportableChartAPI } from '@common/base';
import { GridTypes } from '@common/grid';
import { ChartModuleSelection } from '@common/selection';

export enum ScatterPlotKeys {
  Name = 'name',
  X = 'x',
  Y = 'y',
}

export type ScatterPlotDataShape = {
  [ScatterPlotKeys.Name]: string;
  [ScatterPlotKeys.X]: number;
  [ScatterPlotKeys.Y]: number;
};

export type ScatterPlotBaseAPI = Omit<
  ChartBaseAPI<ScatterPlotModule>,
  'locale' | 'loadingState'
>;

export interface ScatterPlotAPI extends ScatterPlotBaseAPI, InteractiveChartAPI<ScatterPlotModule>, ExportableChartAPI<ScatterPlotModule> {
  aspectRatio(ratio?: number): ScatterPlotModule;
  circleOpacity(opacity?: number): ScatterPlotModule;
  grid(opacity?: GridTypes): ScatterPlotModule;
  hasCrossHairs(hasCrossHairs?: boolean): ScatterPlotModule;
  hasHollowCircles(hasHollowCircles?: boolean): ScatterPlotModule;
  hasTrendline(hasTrendline?: boolean): ScatterPlotModule;
  highlightTextLegendOffset(offset?: number): ScatterPlotModule;
  maxCircleArea(area?: number): ScatterPlotModule;
  xAxisFormat(format?: string): ScatterPlotModule;
  xAxisLabel(label?: string): ScatterPlotModule;
  xAxisLabelOffset(offset?: number): ScatterPlotModule;
  xTicks(ticks?: number): ScatterPlotModule;
  yAxisFormat(format?: string): ScatterPlotModule;
  yAxisLabel(label?: string): ScatterPlotModule;
  yAxisLabelOffset(offset?: string): ScatterPlotModule;
  yTicks(ticks?: number): ScatterPlotModule;
}

export type ScatterPlotModule = ChartModuleSelection<ScatterPlotDataShape[]> &
  ScatterPlotAPI;

/**
 * import {scatter} from 'britecharts;
 * scatter().width(100).height(100)
 */
export function scatterPlot(): ScatterPlotModule;
