import { ComponentBaseAPI } from '@common/base';
import { ChartModuleSelection } from '@common/selection';
import { BaseType, Selection } from 'd3-selection';


export enum LegendKeys {
  Name = 'name',
  Id = 'id',
  Quantity = 'quantity',
}

export type LegendDataShape = {
  [LegendKeys.Name]: string;
  [LegendKeys.Id]: number;
  [LegendKeys.Quantity]?: number;
};

export type LegendSelection = Selection<
  BaseType,
  LegendDataShape,
  HTMLElement,
  any
>;

export interface LegendAPI extends ComponentBaseAPI<LegendModule> {
  highlight(entryId: number): void;
  highlightEntryById(highlightedEntryId?: number): LegendModule;
  isHorizontal(isHorizontal?: boolean): LegendModule;
  marginRatio(ratio?: number): LegendModule;
  markerSize(markerSize?: number): LegendModule;
}

export type LegendModule = ChartModuleSelection<LegendDataShape[]> &
  LegendAPI;

/**
 * import {legend} from 'britecharts;
 * legend().width(100).height(100)
 */
export function legend(): LegendModule;
