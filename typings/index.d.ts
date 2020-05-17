declare module 'britecharts' {
  export interface ChartModule<T> {
    width(width?: number): T & ChartModule<T>;
    height(height?: number): T & ChartModule<T>;
    isAnimated(isAnimated?: boolean): T & ChartModule<T>;
  }

  export interface BarChartModule extends ChartModule<BarChartModule> {
    betweenBarsPadding(padding?: number): BarChartModule;
    labelsNumberFormat(format?: string): BarChartModule;
    chartGradient(gradient?: [string, string]): BarChartModule;
  }

  function bar(): BarChartModule;
}
