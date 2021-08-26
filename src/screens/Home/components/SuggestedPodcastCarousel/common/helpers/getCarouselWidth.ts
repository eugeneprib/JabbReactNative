import { HORIZONTAL_PADDINGS_COUNT } from '../constants'

const getCarouselWidth = (
  screenWidth: number,
  screenPadding: number
): number => {
  return screenWidth - HORIZONTAL_PADDINGS_COUNT * screenPadding
}

export { getCarouselWidth }
