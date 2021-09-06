import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreen } from 'src/common/enums'
import { Heading, HeadingType, PlainText, Spinner } from 'src/components'
import { DataStatus } from 'src/common/enums'
import { useAppSelector } from 'src/hooks'
import {
  loadSuggestedPodcasts,
  loadRecentlyPlayedEpisodes,
  loadPopularEpisodes
} from 'src/store/actions'
import { HomeScreenNavigationProp } from './common/types'
import {
  sliceRecentlyPlayedEpisodes,
  sliceSuggestedPodcasts
} from './common/helpers'
import {
  PopularSingleCard,
  RecentlyPlayedCard,
  SuggestedPodcastCarousel,
  UserAvatar
} from './components'
import { styles } from './styles'

const Home: React.FC = () => {
  const {
    user,
    suggestedPodcasts,
    recentlyPlayedEpisodes,
    dataStatus,
    popularEpisodes
  } = useAppSelector(({ auth, home }) => ({
    user: auth.user,
    suggestedPodcasts: home.suggestedPodcasts,
    recentlyPlayedEpisodes: home.recentlyPlayedEpisodes,
    popularEpisodes: home.popular,
    dataStatus: home.dataStatus
  }))

  const dispatch = useDispatch()
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const hasSuggestedPodcasts = Boolean(suggestedPodcasts.length)
  const hasRecentlyPlayedEpisodes = Boolean(recentlyPlayedEpisodes.length)
  const isLoading = dataStatus === DataStatus.PENDING

  useEffect(() => {
    dispatch(loadSuggestedPodcasts())
    dispatch(loadRecentlyPlayedEpisodes())
    dispatch(loadPopularEpisodes())
  }, [])

  const handleNavigateToEpisode = (author: string, id: number) => {
    navigation.navigate(NavigationScreen.EPISODE, { author, id })
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Heading
            style={styles.userName}
            label={`Hey, ${user?.nickname}`}
            type={HeadingType.MEDIUM}
          />
          <PlainText
            label={`Find this week's hottest podcasts`}
            style={styles.headerText}
          />
        </View>
        <UserAvatar source={user?.image?.url} style={styles.profile} />
      </View>
      {hasSuggestedPodcasts && (
        <View style={styles.block}>
          <SuggestedPodcastCarousel
            data={sliceSuggestedPodcasts(suggestedPodcasts)}
            screenPadding={Number(styles.container.padding)}
          />
        </View>
      )}
      <View style={styles.block}>
        <PlainText label="Recently Played" style={styles.title} />
        {hasRecentlyPlayedEpisodes ? (
          sliceRecentlyPlayedEpisodes(recentlyPlayedEpisodes).map((episode) => (
            <RecentlyPlayedCard
              {...episode}
              key={episode.id}
              style={styles.recentlyPlayedCard}
            />
          ))
        ) : (
          <PlainText
            label="There is no recently played episodes yet"
            style={styles.placeholder}
          />
        )}
      </View>
      <View style={styles.block}>
        <PlainText label="Popular Singles" style={styles.title} />
        <View style={styles.popular}>
          {popularEpisodes.map((episode, index) => (
            <PopularSingleCard
              id={episode.id}
              position={index}
              key={episode.id}
              title={episode.name}
              author={episode.user.nickname}
              source={episode.image?.url}
              onPress={handleNavigateToEpisode}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Home
