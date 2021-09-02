import React, { useEffect } from 'react'
import { View, Image, TouchableOpacity, Linking, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser, loadPodcasts } from 'src/store/actions'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'
import { Heading, HeadingType, PlainText } from 'src/components'
import { Podcast } from 'src/common/types'
import PodcastItem from './components'
import Check from 'src/assets/images/checkMark.svg'
import AtMark from 'src/assets/images/atMark.svg'
import LogOut from 'src/assets/images/iconmonstr-log-out-16.svg'
import styles from './styles'

type EpisodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.MY_PROFILE
>

type Props = {
  navigation: EpisodeScreenNavigationProp
}

const UserPage: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(resetUser())
  }

  const { currentUser, podcasts } = useSelector(({ auth, user }: any) => ({
    currentUser: auth.user,
    podcasts: user.podcasts
  }))

  useEffect(() => {
    dispatch(loadPodcasts(currentUser.id))
  }, [currentUser.id])

  const handleOpenMail = async () => {
    await Linking.openURL(
      `mailto://${currentUser.email}}&subject=abcdefg&body=body`
    )
  }

  const renderItem = ({ item }: { item: Podcast }) => (
    <PodcastItem podcast={item} navigation={navigation} />
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
            source={{ uri: currentUser.image?.url }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Heading
            type={HeadingType.MEDIUM}
            label={`${currentUser.firstName} ${currentUser.lastName}`}
          />
          <View style={styles.userContacts}>
            <View style={styles.userInfoItem}>
              <Check width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={currentUser.nickname}
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
                label={currentUser.email}
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
          data={podcasts}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.FlatListContainer}
        />
      </View>
    </View>
  )
}

export default UserPage
