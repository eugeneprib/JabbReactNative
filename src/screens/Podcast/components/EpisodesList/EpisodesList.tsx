import React from 'react'
import { FlatList } from 'react-native'
import {
  ARRAY_OFFSET,
  CLEARANCE_FOR_ADDITIONAL_LOADING
} from 'src/common/constants'
import { Episode } from 'src/common/types'
import { NotFound, Spinner } from 'src/components'
import { RenderItem } from './common/types'
import styles from './styles'
import { EpisodeItem } from '../'

type Props = {
  episodes: Episode[]
  author: string
  podcast: string
  onEndReached: () => void
  isEpisodesFetching: boolean
}

const EpisodeList: React.FC<Props> = ({
  episodes,
  author,
  podcast,
  onEndReached,
  isEpisodesFetching
}) => {
  const keyExtractor = (item: Episode) => item.id.toString()

  const renderItem = ({ item, index }: RenderItem) => (
    <EpisodeItem
      episode={item}
      author={author}
      podcast={podcast}
      position={index + ARRAY_OFFSET}
    />
  )

  const renderFooterComponent = () => {
    return isEpisodesFetching ? <Spinner /> : null
  }

  const renderEmptyComponent = () => {
    return isEpisodesFetching ? (
      <Spinner />
    ) : (
      <NotFound label="Oops. There is no episodes here" />
    )
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
