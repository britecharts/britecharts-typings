import { BaseAPI, ExportableChartAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';

export enum HeatmapChartKeys {
  Day = 'day',
  Hour = 'hour',
  Value = 'value',
}

export type HeatmapChartDataShape = {
  [HeatmapChartKeys.Day]: number;
  [HeatmapChartKeys.Hour]: number;
  [HeatmapChartKeys.Value]: number;
};

export interface HeatmapChartAPI extends BaseAPI<HeatmapChartModule>, ExportableChartAPI<HeatmapChartModule>  {
  yAxisLabels(labels?: string[]): HeatmapChartModule;
  boxSize(size?: number): HeatmapChartModule;
}

export type HeatmapChartModule = ChartModuleSelection<HeatmapChartDataShape[]> &
  HeatmapChartAPI;

/**
 * import {heatmap} from 'britecharts;
 * heatmap().width(100).height(100)
 */
export function heatmap(): HeatmapChartModule;
