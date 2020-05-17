declare module 'britecharts' {
  import { Selection } from 'd3-selection';

  export interface ChartBaseAPI<T> {
    height(height?: number): T & ChartBaseAPI<T>;
    isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>;
    loadingState(markup?: string): T & ChartBaseAPI<T>;
    width(width?: number): T & ChartBaseAPI<T>;
  }

  enum BarChartKeys {
    Value = 'value',
    Name = 'name',
  }

  export type BarChartDataShape = {
    [BarChartKeys.Value]: number;
    [BarChartKeys.Name]: string;
  };

  export interface BarChartAPI extends ChartBaseAPI<BarChartAPI> {
    betweenBarsPadding(padding?: number): BarChartAPI;
    chartGradient(gradient?: [string, string]): BarChartAPI;
    labelsNumberFormat(format?: string): BarChartAPI;
    labelsSize(size?: number): BarChartAPI;
    orderingFunction(
      orderingFunc: (a: BarChartDataShape, b: BarChartDataShape) => void
    ): BarChartAPI;
  }

  type BarModuleType = (
    _selection: Selection<HTMLElement, BarChartDataShape[], HTMLElement, any>,
    _data: BarChartDataShape[]
  ) => void;

  function bar(): BarModuleType & BarChartAPI;
}
