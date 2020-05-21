import { ChartMarginParams } from '@charts/margin'
import { ColorsSchemasType } from '@helpers/colors'

export type LocalObject = {
  decimal?: string
  thousands?: string
  grouping?: number[]
  currency?: string[]
  numerals?: string[]
  percent?: string
  minus?: string
  nan?: string
}

export interface ChartBaseAPI<T> {
  colorSchema(schema: ColorsSchemasType): T & ChartBaseAPI<T>
  height(height?: number): T & ChartBaseAPI<T>
  isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>
  loadingState(markup?: string): T & ChartBaseAPI<T>
  locale(localObject?: LocalObject | null): T & ChartBaseAPI<T>
  numberFormat(format?: string): T & ChartBaseAPI<T>
  margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>
  width(width?: number): T & ChartBaseAPI<T>
}
