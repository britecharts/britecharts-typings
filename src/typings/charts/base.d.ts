import { ChartMarginParams } from '@charts/margin'

export interface ChartBaseAPI<T> {
  colorSchema(schema: any): T & ChartBaseAPI<T>
  height(height?: number): T & ChartBaseAPI<T>
  isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>
  loadingState(markup?: string): T & ChartBaseAPI<T>
  numberFormat(format?: string): T & ChartBaseAPI<T>
  margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>
  width(width?: number): T & ChartBaseAPI<T>
}
