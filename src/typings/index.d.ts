declare module 'britecharts' {
  import { Selection } from 'd3-selection';

  export interface ChartBaseAPI<T> {
    colorSchema(schema: any): T & ChartBaseAPI<T>;
    height(height?: number): T & ChartBaseAPI<T>;
    isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>;
    loadingState(markup?: string): T & ChartBaseAPI<T>;
    margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>;
    width(width?: number): T & ChartBaseAPI<T>;
  }

  export interface ChartMarginParams {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  }

  enum BarChartKeys {
    Value = 'value',
    Name = 'name',
  }

  export type BarChartDataShape = {
    [BarChartKeys.Value]: number;
    [BarChartKeys.Name]: string;
  };

  type BarChartModule = BarChartModuleSelection & BarChartAPI;

  type BarChartModuleSelection = (
    _selection: Selection<Element, BarChartDataShape[], Element | null, any>,
    _data: BarChartDataShape[]
  ) => void;

  export interface BarChartAPI extends ChartBaseAPI<BarChartModule> {
    betweenBarsPadding(padding?: number): BarChartModule;
    chartGradient(gradient?: [string, string]): BarChartModule;
    hasPercentage(hasPercentage?: boolean): BarChartModule;
    isHorizontal(isHorizontal?: boolean): BarChartModule;
    labelsNumberFormat(format?: string): BarChartModule;
    labelsSize(size?: number): BarChartModule;
    percentageAxisToMaxRatio(ratio?: number): BarChartModule;
    orderingFunction(
      orderingFunc: (a: BarChartDataShape, b: BarChartDataShape) => void
    ): BarChartModule;
  }

  // Britecharts module contents:
  // import * as britecharts from 'britecharts';
  // britecharts.bar()
  // britecharts.colors.colorSchemas.britecharts
  function bar(): BarChartModule;
  // TODO: add more specific type of colors
  export const colors: any;
}
