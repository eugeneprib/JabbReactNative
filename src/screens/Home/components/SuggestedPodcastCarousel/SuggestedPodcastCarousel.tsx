import React from 'react';
import { useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { CarouselItem, SuggestedPodcast } from './common/types'
import { getCarouselItemWidth, getCarouselWidth } from './common/helpers'
import SuggestedPodcastCard from '../SuggestedPodcastCard'

type Props = {
  data: SuggestedPodcast[]
  screenPadding: number
}

const SuggestedPodcastCarousel: React.FC<Props> = ({ data, screenPadding }) => {
  const { width } = useWindowDimensions()

  const renderCarouselItem = ({
    item: { title, author, source }
  }: CarouselItem) => (
    <SuggestedPodcastCard title={title} author={author} source={source} />
  )

  return (
    <Carousel
      sliderWidth={getCarouselWidth(width, screenPadding)}
      itemWidth={getCarouselItemWidth(width, screenPadding)}
      data={data}
      renderItem={renderCarouselItem}
      inactiveSlideScale={1}
      activeSlideAlignment="start"
    />
  )
}

export default SuggestedPodcastCarousel
