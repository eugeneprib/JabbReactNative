import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ARRAY_OFFSET } from 'src/common/constants'
import { Podcast } from 'src/common/types'
import { PodcastCard } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import { RenderItem } from './common/types'
import styles from './styles'
import { SearchScreenNavigationProp } from '../../common/types/SearchScreenNavigationProp'

type Props = {
  podcasts: Podcast[]
  onLoadMore: () => void
}

const PodcastList: React.FC<Props> = ({ podcasts, onLoadMore }) => {
  const navigation = useNavigation<SearchScreenNavigationProp>()

  const keyExtractor = (item: Podcast) => item.id.toString()

  const renderItem = ({ item, index }: RenderItem) => {
    const isLastItem = index === podcasts.length - ARRAY_OFFSET
    const itemStyle = isLastItem ? undefined : styles.item

    const handleNavigateToPodcast = () => {
      navigation.navigate(NavigationScreen.PODCAST, { id: item.id })
    }

    return (
      <PodcastCard
        title={item.name}
        author={item.user.nickname}
        date={item.createdAt}
        image={item.image?.url}
        style={itemStyle}
        onPress={handleNavigateToPodcast}
      />
    )
  }

  return (
    <FlatList
      style={styles.container}
      data={podcasts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onLoadMore}
    />
  )
}

export default PodcastList
