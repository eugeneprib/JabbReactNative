import React from 'react'
import {
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Heading, HeadingType, PlainText } from 'src/components'
import Check from 'src/assets/images/checkMark.svg'
import AtMark from 'src/assets/images/atMark.svg'
import styles from './styles'

import { User, Podcast } from './common'

type Props = {
  podcasts: Podcast[]
  user: User
}

const MockedUser: User = {
  firstname: 'Yevhenii',
  surname: 'Cheremisin',
  nickname: 'Eugenius',
  email: 'eucheremisin@gmail.com',
  image:
    'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629464038/2/yhyck6w6nzrfkorkqlxv.jpg'
}

const MockedPodcasts: Podcast[] = [
  {
    name: `Cartoon's Soundtracks`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474124/2/ttp0xygzbdyrn0yyxfnk.jpg'
  },
  {
    name: `Game of Thrones`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628514060/2/ghhobbuga6qppv2brze1.jpg'
  },
  {
    name: `Country Roads`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628675258/2/lcwrvci7ti2hcqrwa5lh.jpg'
  },
  {
    name: `Calm Waves`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628675351/2/h2nbpynwbb2lm1qldjpk.jpg'
  },
  {
    name: `Classic Party`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628675741/2/ehbf6m8pokibhkxvori0.jpg'
  }
]

const userPageInfo: Props = {
  podcasts: MockedPodcasts,
  user: MockedUser
}

const handleLogOut = () => {
  return 0
}

const PodcastPage: React.FC<Props> = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Heading type={HeadingType.LARGE} label="Profile" />
      </View>

      <View style={styles.userInfoContaienr}>
        <View>
          <Image
            width={118}
            height={118}
            source={{ uri: userPageInfo.user.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Heading
            type={HeadingType.MEDIUM}
            label={`${userPageInfo.user.firstname} ${userPageInfo.user.surname}`}
          />
          <View style={styles.userContacts}>
            <View style={styles.userInfoItem}>
              <Check width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={userPageInfo.user.nickname}
              />
            </View>
            <View style={styles.userInfoItem}>
              <AtMark width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={userPageInfo.user.email}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.userDataContainer}>
        <Heading type={HeadingType.MEDIUM} label="Podcasts" />
        {userPageInfo.podcasts.map((podcast, inx) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.podcastItem}
              key={inx}
            >
              <Image
                width={85}
                height={85}
                source={{ uri: podcast.image }}
                style={styles.imagePodcast}
              />
              <View style={styles.podcastItemTextContainer}>
                <Heading
                  style={{ fontSize: 18 }}
                  type={HeadingType.MEDIUM}
                  label={podcast.name}
                />
                <PlainText
                  style={{ fontSize: 12, marginTop: 5 }}
                  label={podcast.author}
                />
              </View>
            </TouchableOpacity>
          )
        })}
        <View>
          <TouchableOpacity
            onPress={handleLogOut}
            activeOpacity={0.4}
            style={styles.logOutButton}
          >
            <Heading type={HeadingType.SMALL} label="Log Out" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default PodcastPage
