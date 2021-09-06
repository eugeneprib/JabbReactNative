import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {
  ARRAY_OFFSET,
  CLEARANCE_FOR_ADDITIONAL_LOADING
} from 'src/common/constants'
import { Podcast } from 'src/common/types'
import { NotFound, PodcastCard, Spinner } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import { RenderItem } from './common/types'
import styles from './styles'
import { SearchScreenNavigationProp } from '../../common/types/SearchScreenNavigationProp'

type Props = {
  podcasts: Podcast[]
  isFetching: boolean
  onLoadMore: () => void
}

const PodcastList: React.FC<Props> = ({ podcasts, isFetching, onLoadMore }) => {
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

  const renderFooterComponent = () => {
    return isFetching ? <Spinner /> : null
  }

  const renderEmptyComponent = () => {
    return isFetching ? (
      <Spinner />
    ) : (
      <NotFound label="Oops. There is no podcasts here" />
    )
  }

  return (
    <FlatList
      data={podcasts}
      style={styles.container}
      onEndReachedThreshold={CLEARANCE_FOR_ADDITIONAL_LOADING}
      ListEmptyComponent={renderEmptyComponent}
      ListFooterComponent={renderFooterComponent}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onLoadMore}
    />
  )
}

export default PodcastList
