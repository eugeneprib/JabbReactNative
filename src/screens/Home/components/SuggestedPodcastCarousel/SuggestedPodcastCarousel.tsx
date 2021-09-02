import React from 'react'
import { useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'
import { Podcast } from 'src/common/types'
import { PodcastNavigationProp } from 'src/screens/Podcast/common/types'
import { CarouselItem } from './common/types'
import { NavigationScreen } from 'src/common/enums'
import { getCarouselItemWidth, getCarouselWidth } from './common/helpers'
import SuggestedPodcastCard from '../SuggestedPodcastCard'

type Props = {
  data: Podcast[]
  screenPadding: number
}

const SuggestedPodcastCarousel: React.FC<Props> = ({ data, screenPadding }) => {
  const { width } = useWindowDimensions()
  const navigation = useNavigation<PodcastNavigationProp>()

  const renderCarouselItem = ({
    item: { name, user, image, id }
  }: CarouselItem) => {
    const handleNavigateToPodcast = () => {
      navigation.navigate(NavigationScreen.PODCAST, { id })
    }

    return (
      <SuggestedPodcastCard
        title={name}
        author={user.nickname}
        source={image?.url}
        onPress={handleNavigateToPodcast}
      />
    )
  }

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
