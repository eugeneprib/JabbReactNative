import React from 'react'
import { View, Image, TouchableOpacity, Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Heading, HeadingType, PlainText } from 'src/components'
import { User, Podcast } from './common'
import { MockedUser, MockedPodcasts } from './mockedData'
import Check from 'src/assets/images/checkMark.svg'
import AtMark from 'src/assets/images/atMark.svg'
import styles from './styles'

type Props = {
  podcasts: Podcast[]
  user: User
}

const userPageInfo: Props = {
  podcasts: MockedPodcasts,
  user: MockedUser
}

const UserPage: React.FC<Props> = () => {
  const handleLogOut = () => {
    return 0
  }

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
            source={{ uri: MockedUser.image }}
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
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.userInfoItem}
              onPress={() =>
                Linking.openURL(
                  `mailto://${userPageInfo.user.email}}&subject=abcdefg&body=body`
                )
              }
            >
              <AtMark width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={userPageInfo.user.email}
              />
            </TouchableOpacity>
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
                  style={{ fontSize: 19 }}
                  type={HeadingType.LARGE}
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

export default UserPage
