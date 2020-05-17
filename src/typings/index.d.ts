declare module 'britecharts' {
  import * as barChart from 'charts/bar-chart';

  export * from 'charts/bar-chart';

  // Britecharts module contents:
  // import * as britecharts from 'britecharts';
  // britecharts.bar()
  // britecharts.colors.colorSchemas.britecharts
  export function bar(): barChart.BarChartModule;
  // TODO: add more specific type of colors
  export const colors: any;
}
