import React, { useEffect } from 'react'
import { useAppSelector } from 'src/hooks'
import { ListeningScreenNavigationProp } from './common/types'
import { NavigationScreen } from 'src/common/enums'

type Props = {
  navigation: ListeningScreenNavigationProp
}

const Listening: React.FC<Props> = ({ navigation }) => {
  const { recentlyPlayedEpisodes, popularEpisodes } = useAppSelector(
    ({ home }) => ({
      recentlyPlayedEpisodes: home.recentlyPlayedEpisodes,
      popularEpisodes: home.popularEpisodes
    })
  )
  const hasRecentlyPlayedEpisodes = Boolean(recentlyPlayedEpisodes.length)

  let { id, author } = recentlyPlayedEpisodes[0]
  if (!hasRecentlyPlayedEpisodes) {
    id = popularEpisodes[0].id
    author = popularEpisodes[0].user.nickname
  }

  useEffect(() => {
    navigation.navigate(NavigationScreen.EPISODE, {
      author,
      id,
      playback: true
    })
  }, [])

  return null
}

export default Listening
