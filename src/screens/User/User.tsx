import React from 'react'
import { View, Image, TouchableOpacity, Linking, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from 'src/store/actions'
import { Heading, HeadingType, PlainText } from 'src/components'
import { Podcast, User } from 'src/common/types'
import PodcastItem from './components'
import { MockedUser, MockedPodcasts } from './mockedData'
import Check from 'src/assets/images/checkMark.svg'
import AtMark from 'src/assets/images/atMark.svg'
import LogOut from 'src/assets/images/iconmonstr-log-out-16.svg'
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
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(resetUser())
  }
  const { currentUser } = useSelector(({ auth }: any) => ({
    currentUser: auth.user
  }))

  const handleOpenMail = async () => {
    await Linking.openURL(
      `mailto://${userPageInfo.user.email}}&subject=abcdefg&body=body`
    )
  }

  const renderItem = ({ item }: { item: Podcast }) => (
    <PodcastItem podcast={item} />
  )

  return (
    <View style={styles.container}>
      <View>
        <Heading type={HeadingType.LARGE} label="Profile" />
      </View>

      <View style={styles.userInfoContaienr}>
        <View>
          <Image
            width={118}
            height={118}
            source={{ uri: userPageInfo.user.image?.url }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Heading
            type={HeadingType.MEDIUM}
            label={`${userPageInfo.user.firstName} ${userPageInfo.user.lastName}`}
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
              onPress={handleOpenMail}
            >
              <AtMark width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={userPageInfo.user.email}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.userInfoItem}
              onPress={handleLogOut}
            >
              <LogOut width={15} />
              <PlainText
                style={styles.userInfoItemTextDelete}
                label={'Log out'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.userDataContainer}>
        <Heading type={HeadingType.MEDIUM} label="Podcasts" />
        <FlatList
          data={userPageInfo.podcasts}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.FlatListContainer}
        />
      </View>
    </View>
  )
}

export default UserPage
