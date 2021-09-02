import React from 'react'
import { useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Podcast } from 'src/common/types'
import { CarouselItem } from './common/types'
import { getCarouselItemWidth, getCarouselWidth } from './common/helpers'
import SuggestedPodcastCard from '../SuggestedPodcastCard'

type Props = {
  data: Podcast[]
  screenPadding: number
}

const SuggestedPodcastCarousel: React.FC<Props> = ({ data, screenPadding }) => {
  const { width } = useWindowDimensions()

  const renderCarouselItem = ({
    item: { name, user, image }
  }: CarouselItem) => (
    <SuggestedPodcastCard
      title={name}
      author={user.nickname}
      source={image?.url}
    />
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
