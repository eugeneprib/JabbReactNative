import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type EpisodeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.EPISODE
>

export type { EpisodeScreenNavigationProp }
