import React from 'react'
import { FlatList } from 'react-native'
import { EpisodeItem, NoEpisodes } from '../'
import { CLEARANCE_FOR_ADDITIONAL_LOADING } from './common/constants'
import { RenderItem } from './common/types'
import { ARRAY_OFFSET } from 'src/common/constants/array'
import { Episode } from 'src/common/types'
import styles from './styles'
import { Spinner } from 'src/components'

type Props = {
  episodes: Episode[]
  author: string
  onEndReached: () => void
  isEpisodesFetching: boolean
}

const EpisodeList: React.FC<Props> = ({
  episodes,
  author,
  onEndReached,
  isEpisodesFetching = false
}) => {
  const keyExtractor = (item: Episode) => item.id.toString()

  const renderItem = ({ item, index }: RenderItem) => (
    <EpisodeItem
      episode={item}
      author={author}
      position={index + ARRAY_OFFSET}
    />
  )

  const renderFooterComponent = () => {
    return isEpisodesFetching ? <Spinner /> : null
  }

  const renderEmptyComponent = () => {
    return isEpisodesFetching ? <Spinner /> : <NoEpisodes />
  }

  return (
    <FlatList
      data={episodes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={renderEmptyComponent}
      contentContainerStyle={styles.flatList}
      onEndReachedThreshold={CLEARANCE_FOR_ADDITIONAL_LOADING}
      onEndReached={onEndReached}
      ListFooterComponent={renderFooterComponent}
      ListFooterComponentStyle={styles.flatListFooter}
    />
  )
}

export default EpisodeList
