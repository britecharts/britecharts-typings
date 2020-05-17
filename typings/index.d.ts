declare module 'britecharts' {
  export interface ChartModule<T> {
    height(height?: number): T & ChartModule<T>;
    isAnimated(isAnimated?: boolean): T & ChartModule<T>;
    loadingState(markup?: string): T & ChartModule<T>;
    width(width?: number): T & ChartModule<T>;
  }

  export enum BarChartKeys {
    Value = 'value',
    Name = 'name',
  }

  export type BarChartDataShape = {
    [BarChartKeys.Value]: number;
    [BarChartKeys.Name]: string;
  };

  export interface BarChartModule extends ChartModule<BarChartModule> {
    betweenBarsPadding(padding?: number): BarChartModule;
    chartGradient(gradient?: [string, string]): BarChartModule;
    labelsNumberFormat(format?: string): BarChartModule;
    labelsSize(size?: number): BarChartModule;
    orderingFunction(
      orderingFunc: (a: BarChartDataShape, b: BarChartDataShape) => void
    ): BarChartModule;
  }

  function bar(): BarChartModule;
}
