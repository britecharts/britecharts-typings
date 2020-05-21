import { LocalObject } from '@common/local';
import { ColorsSchemasType } from '@helpers/colors';
import { ChartMarginParams } from '@common/margin';

export interface ChartBaseAPI<T> {
  colorSchema(schema: ColorsSchemasType): T & ChartBaseAPI<T>;
  height(height?: number): T & ChartBaseAPI<T>;
  isAnimated(isAnimated?: boolean): T & ChartBaseAPI<T>;
  loadingState(markup?: string): T & ChartBaseAPI<T>;
  locale(localObject?: LocalObject | null): T & ChartBaseAPI<T>;
  numberFormat(format?: string): T & ChartBaseAPI<T>;
  margin(margin?: ChartMarginParams): T & ChartBaseAPI<T>;
  width(width?: number): T & ChartBaseAPI<T>;
}
