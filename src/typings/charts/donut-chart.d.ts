import { ChartBaseAPI, InteractiveChartAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';

export enum DonutChartKeys {
  ID = 'id',
  Name = 'name',
  Quantity = 'quantity',
  Percentage = 'percentage',
}

export type DonutChartDataShape = {
  [DonutChartKeys.ID]: number;
  [DonutChartKeys.Name]: string;
  [DonutChartKeys.Quantity]: number;
  [DonutChartKeys.Percentage]: number;
};

export interface DonutEmptyDataConfig {
  emptySliceColor: string;
  showEmptySlice: boolean;
}

export interface DonutChartAPI extends ChartBaseAPI<DonutChartModule>, InteractiveChartAPI<DonutChartModule> {
  centeredTextFunction(
    centeredTextFunc: (a: DonutChartDataShape) => void
  ): DonutChartModule;
  emptyDataConfig(config?: DonutEmptyDataConfig): DonutChartModule;
  externalRadius(radius?: number): DonutChartModule;
  hasFixedHighlightedSlice(hasFixed?: boolean): DonutChartModule;
  hasHoverAnimation(hasHoverAnimation?: boolean): DonutChartModule;
  hasLastHoverSliceHighlighted(hasSliceHighlight?: boolean): DonutChartModule;
  highlightSliceById(id: DonutChartDataShape['id']): DonutChartModule;
  internalRadius(radius: number): DonutChartModule;
  orderingFunction(
    orderingFunc: (a: DonutChartDataShape, b: DonutChartDataShape) => void
  ): DonutChartModule;
  percentageFormat(format: string): DonutChartModule;
  radiusHoverOffset(offset: number): DonutChartModule;
}

export type DonutChartModule = ChartModuleSelection<DonutChartDataShape[]> &
  DonutChartAPI;

/**
 * import {donut} from 'britecharts;
 * donut().width(100).height(100)
 */
export function donut(): DonutChartModule;
