import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
import { Heading, HeadingType, PlainText } from 'src/components'
import { NavigationScreen } from 'src/common/enums'
import { useAppSelector } from 'src/hooks'
import {
  loadSuggestedPodcasts,
  loadRecentlyPlayedEpisodes
} from 'src/store/actions'
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
  const { user, suggestedPodcasts, recentlyPlayedEpisodes } = useAppSelector(
    ({ auth, home }) => ({
      user: auth.user,
      suggestedPodcasts: home.suggestedPodcasts,
      recentlyPlayedEpisodes: home.recentlyPlayedEpisodes
    })
  )

  const dispatch = useDispatch()

  const hasSuggestedPodcasts = Boolean(suggestedPodcasts.length)
  const hasRecentlyPlayedEpisodes = Boolean(recentlyPlayedEpisodes.length)

  useEffect(() => {
    dispatch(loadSuggestedPodcasts())
    dispatch(loadRecentlyPlayedEpisodes())
  }, [])

  const navigation = useNavigation()

  const handleNavigateProfile = () => {
    navigation.navigate(NavigationScreen.MY_PROFILE)
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
        <UserAvatar
          source={user?.image?.url}
          style={styles.profile}
          onPress={handleNavigateProfile}
        />
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
          <PopularSingleCard
            title="About Knowing Nothing"
            author="John Snow"
            source="http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629360713/19/swkh7sxam77huzrowebb.jpg"
            style={styles.popularFirst}
          />
          <PopularSingleCard
            title="The Last of Us"
            author="Eugenius"
            source="http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629475407/2/binrglfxwxztrxjkcoap.png"
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home
