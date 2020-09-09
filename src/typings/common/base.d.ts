import { LocalObject } from '@common/local';
import { ColorsSchemasType } from '@helpers/colors';
import { ChartMarginParams } from '@common/margin';

export interface ChartBaseAPI<T> {
  colorSchema(schema: ColorsSchemasType): T & ChartBaseAPI<T>;
  numberFormat(format?: string): T & ChartBaseAPI<T>;
  isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>;
  height(height?: number): T & ChartBaseAPI<T>;
  loadingState(markup?: string): T & ChartBaseAPI<T>;
  locale(localObject?: LocalObject | null): T & ChartBaseAPI<T>;
  margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>;
  width(width?: number): T & ChartBaseAPI<T>;
}

export interface ChartBaseAPIMinimal<T> {
  height(height?: number): T & ChartBaseAPIMinimal<T>;
  loadingState(markup?: string): T & ChartBaseAPIMinimal<T>;
  locale(localObject?: LocalObject | null): T & ChartBaseAPIMinimal<T>;
  margin(margin?: ChartMarginParams): T & ChartBaseAPIMinimal<T>;
  width(width?: number): T & ChartBaseAPIMinimal<T>;
}


export interface ComponentBaseAPI<T> {
  colorSchema(schema: ColorsSchemasType): T & ComponentBaseAPI<T>;
  numberFormat(format?: string): T & ComponentBaseAPI<T>;
  height(height?: number): T & ComponentBaseAPI<T>;
  margin(margin?: ChartMarginParams): T & ComponentBaseAPI<T>;
  width(width?: number): T & ComponentBaseAPI<T>;
}

// TODO: Deprecate once the API gets consistent
// https://github.com/britecharts/britecharts/issues/842
// https://github.com/britecharts/britecharts/issues/841
export interface GroupedBarBaseAPI<T> {
  colorSchema(schema: ColorsSchemasType): T & ChartBaseAPI<T>;
  isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>;
  height(height?: number): T & ChartBaseAPI<T>;
  loadingState(markup?: string): T & ChartBaseAPI<T>;
  margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>;
  width(width?: number): T & ChartBaseAPI<T>;
}

// Using it on Heatmap until getting a good set of API configs
// https://github.com/britecharts/britecharts/issues/845
export interface BaseAPI<T> {
  colorSchema(schema: ColorsSchemasType): T & ChartBaseAPI<T>;
  height(height?: number): T & ChartBaseAPI<T>;
  margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>;
  width(width?: number): T & ChartBaseAPI<T>;
}