import { Selection } from 'd3-selection'

export type ChartModuleSelection<T> = (
  _selection: Selection<Element, T, Element | null, any>,
  _data: T
) => void
