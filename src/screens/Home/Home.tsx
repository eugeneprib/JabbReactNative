import React from 'react'
import { ScrollView, View } from 'react-native'
import { Heading, HeadingType, PlainText } from 'src/components'
import {
  PopularSingleCard,
  RecentlyPlayedCard,
  SuggestedPodcastCarousel,
  UserAvatar
} from './components'
import { styles } from './styles'

const suggestedPodcasts = [
  {
    title: "Cartoon's Soundtracks",
    author: 'Eugenius',
    source:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474209/2/wqbm1x3q0h6ea2ebrnze.jpg'
  },
  {
    title: 'World of music',
    author: 'artem',
    source:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629094506/19/cvtjr8llimhroma8dmyi.png'
  },
  {
    title: 'Country Roads',
    author: 'Eugenius',
    source:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629451213/2/xrfr3aklucw8jpyivsmu.jpg'
  }
]

const Home: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View>
          <Heading
            style={styles.userName}
            label="Hey, Den"
            type={HeadingType.MEDIUM}
          />
          <PlainText
            label={`Find this week's hottest podcasts`}
            style={styles.headerText}
          />
        </View>
        <UserAvatar
          source="https://ca.slack-edge.com/T025CKYU9R7-U0261G9DKRN-0714d7d9b1ae-512"
          style={styles.profile}
        />
      </View>
      <View style={styles.block}>
        <SuggestedPodcastCarousel
          data={suggestedPodcasts}
          screenPadding={Number(styles.container.padding)}
        />
      </View>
      <View style={styles.block}>
        <PlainText label={`Recently Played`} style={styles.title} />
        <RecentlyPlayedCard
          title="Kingdom Dance Kingdom Dance Kingdom Dance Kingdom Dance Kingdom Dance"
          author="Eugenius"
          date="2021-08-21T13:45:54.000Z"
          source="http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474371/2/ujhl5sifotk2rrz9nl6a.jpg"
          style={styles.recentlyPlayedCard}
        />
        <RecentlyPlayedCard
          title="You are Welcome"
          author="Eugenius"
          date="2021-08-22T15:12:34.000Z"
          source="http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474747/2/ob8eswfbgvcxtfgnwuks.jpg"
          style={styles.recentlyPlayedCard}
        />
      </View>
      <View style={styles.block}>
        <PlainText label={`Popular Singles`} style={styles.title} />
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
