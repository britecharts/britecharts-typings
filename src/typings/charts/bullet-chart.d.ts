import { ChartBaseAPI, ExportableChartAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';

export enum BulletChartKeys {
  Ranges = 'ranges',
  Measures = 'measures',
  Markers = 'markers',
}

export type BulletChartDataShape = {
  [BulletChartKeys.Ranges]: [number?, number?, number?];
  [BulletChartKeys.Measures]: [number?, number?, number?];
  [BulletChartKeys.Markers]: [number?];
};

export type BulletChartBaseAPI = Omit<
  ChartBaseAPI<BulletChartModule>,
  'locale' | 'isAnimated' | 'loadingState'
>;

export interface BulletChartAPI extends BulletChartBaseAPI, ExportableChartAPI<BulletChartModule> {
  aspectRatio(ratio?: number): BulletChartModule;
  customSubtitle(subtitle?: number): BulletChartModule;
  customTitle(title?: number): BulletChartModule;
  isReverse(isReverse?: boolean): BulletChartModule;
  paddingBetweenAxisAndChart(padding?: number): BulletChartModule;
  startMaxRangeOpacity(opacity?: number): BulletChartModule;
  ticks(ticks?: number): BulletChartModule;
}

export type BulletChartModule = ChartModuleSelection<BulletChartDataShape> &
  BulletChartAPI;

/**
 * import {bullet} from 'britecharts;
 * bullet().width(100).height(100)
 */
export function bullet(): BulletChartModule;
