import React from 'react'
import { FlatList } from 'react-native'
import { EpisodeItem, NoEpisodes } from '../'
import { CLEARANCE_FOR_ADDITIONAL_LOADING } from './common/constants'
import { RenderItem } from './common/types'
import { ARRAY_OFFSET } from 'src/common/constants/array'
import { Episode } from 'src/common/types'
import styles from './styles'

type Props = {
  episodes: Episode[]
  author: string
  podcast: string
  onEndReached: () => void
}

const EpisodeList: React.FC<Props> = ({
  episodes,
  author,
  podcast,
  onEndReached
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

  return (
    <FlatList
      data={episodes}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={NoEpisodes}
      contentContainerStyle={styles.flatList}
      onEndReachedThreshold={CLEARANCE_FOR_ADDITIONAL_LOADING}
      onEndReached={onEndReached}
    />
  )
}

export default EpisodeList
