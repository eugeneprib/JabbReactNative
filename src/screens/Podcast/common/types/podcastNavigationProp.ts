import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type PodcastNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.PODCAST
>

export type { PodcastNavigationProp }
