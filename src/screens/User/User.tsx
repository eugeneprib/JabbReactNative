import React, { useEffect } from 'react'
import { View, Image, TouchableOpacity, Linking, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import PodcastItem from './components'
import { UserScreenNavigationProp } from './common'
import { useAppSelector } from 'src/hooks'
import { RootState } from 'src/common/types'
import { resetUser, loadPodcasts } from 'src/store/actions'
import { Heading, HeadingType, PlainText } from 'src/components'
import { Podcast } from 'src/common/types'
import Check from 'src/assets/images/checkMark.svg'
import AtMark from 'src/assets/images/atMark.svg'
import LogOut from 'src/assets/images/iconmonstr-log-out-16.svg'
import styles from './styles'

type Props = {
  navigation: UserScreenNavigationProp
}

const User: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(resetUser())
  }

  const { user, podcasts } = useAppSelector(({ auth, user }: RootState) => ({
    user: auth.user,
    podcasts: user.podcasts
  }))

  useEffect(() => {
    dispatch(loadPodcasts(Number(user?.id)))
  }, [user?.id])

  const handleOpenMail = async () => {
    await Linking.openURL(`mailto://${user?.email}}`)
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
            source={{ uri: user?.image?.url }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Heading
            type={HeadingType.MEDIUM}
            label={`${user?.firstName} ${user?.lastName}`}
          />
          <View style={styles.userContacts}>
            <View style={styles.userInfoItem}>
              <Check width={15} />
              <PlainText
                style={styles.userInfoItemText}
                label={String(user?.nickname)}
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
                label={String(user?.email)}
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

export default User
