import React, { useEffect } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useDispatch } from 'react-redux'
import PodcastItem from './components'
import { useAppSelector } from 'src/hooks'
import { RootState } from 'src/common/types'
import { resetUser, loadPodcasts } from 'src/store/actions'
import { Heading, HeadingType, PlainText } from 'src/components'
import { Podcast } from 'src/common/types'
import { DataStatus } from 'src/common/enums'
import Check from 'src/assets/images/checkMark.svg'
import AtMark from 'src/assets/images/atMark.svg'
import LogOut from 'src/assets/images/iconmonstr-log-out-16.svg'
import styles from './styles'

const Profile: React.FC = () => {
  const dispatch = useDispatch()

  const handleLogOut = (): void => {
    dispatch(resetUser())
  }

  const { user, podcasts, dataStatus } = useAppSelector(
    ({ auth, profile }: RootState) => ({
      user: auth.user,
      podcasts: profile.podcasts,
      dataStatus: profile.dataStatus
    })
  )

  useEffect(() => {
    dispatch(loadPodcasts(Number(user?.id)))
  }, [user?.id])

  if (!user) {
    return null
  }

  const hasUser = Boolean(user)
  const isLoading = dataStatus === DataStatus.PENDING

  if (!hasUser && isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f3427f" />
      </View>
    )
  }

  const handleOpenMail = async () => {
    await Linking.openURL(`mailto://${user.email}}`)
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
            source={{ uri: user.image?.url }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Heading
            type={HeadingType.MEDIUM}
            label={`${user.firstName} ${user.lastName}`}
          />
          <View style={styles.userContacts}>
            <View style={styles.userInfoItem}>
              <Check width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={user.nickname}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.userInfoItem}
              onPress={handleOpenMail}
            >
              <AtMark width={15} />
              <PlainText style={styles.userInfoItemText} label={user.email} />
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
        {!podcasts ? (
          <FlatList
            data={podcasts}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.FlatListContainer}
          />
        ) : (
          <View style={styles.center}>
            <PlainText label="Oops! There's nothing here." />
          </View>
        )}
      </View>
    </View>
  )
}

export default Profile
