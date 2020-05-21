import { ChartBaseAPI } from '@common/base';
import { GridTypes } from '@common/grid';
import { ChartModuleSelection } from '@common/selection';

export enum ScatterPlotKeys {
  Ranges = 'ranges',
  Measures = 'measures',
  Markers = 'markers',
}

export type ScatterPlotDataShape = {
  [ScatterPlotKeys.Ranges]: [number?, number?, number?];
  [ScatterPlotKeys.Measures]: [number?, number?, number?];
  [ScatterPlotKeys.Markers]: [number?];
};

export type ScatterPlotBaseAPI = Omit<
  ChartBaseAPI<ScatterPlotModule>,
  'locale' | 'isAnimated' | 'loadingState'
>;

export interface ScatterPlotAPI extends ScatterPlotBaseAPI {
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

export type ScatterPlotModule = ChartModuleSelection<ScatterPlotDataShape> &
  ScatterPlotAPI;

/**
 * import {scatter} from 'britecharts;
 * scatter().width(100).height(100)
 */
export function scatter(): ScatterPlotModule;
