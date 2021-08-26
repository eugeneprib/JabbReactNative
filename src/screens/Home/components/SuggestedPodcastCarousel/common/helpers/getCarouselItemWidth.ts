import { getCarouselWidth } from './getCarouselWidth'
import { CAROUSEL_ITEM_OFFSET } from '../constants'

const getCarouselItemWidth = (
  screenWidth: number,
  screenPadding: number
): number => {
  return getCarouselWidth(screenWidth, screenPadding) - CAROUSEL_ITEM_OFFSET
}

export { getCarouselItemWidth }
