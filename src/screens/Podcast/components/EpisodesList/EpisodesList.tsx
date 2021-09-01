import React from 'react'
import { FlatList } from 'react-native'
import { EpisodeItem, NoEpisodes } from './../index'
import { CLEARANCE_FOR_ADDITIONAL_LOADING } from './common/constants'
import { INCREASE_VALUE_FOR_LIST } from 'src/common/constants/array'
import { Episode } from 'src/common/types'
import styles from './styles'

type Props = {
  episodes: Episode[]
  onEndReached: () => void
}

type RenderItem = {
  item: Episode
  index: number
}

const EpisodeList: React.FC<Props> = ({ episodes, onEndReached }) => {
  const keyExtractor = (item: Episode) => item.id.toString()

  const renderItem = ({ item, index }: RenderItem) => (
    <EpisodeItem
      episode={item}
      episodePosition={index + INCREASE_VALUE_FOR_LIST}
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
