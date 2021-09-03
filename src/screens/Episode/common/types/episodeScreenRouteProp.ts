import { RouteProp } from '@react-navigation/native'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type EpisodeScreenRouteProp = RouteProp<
  RootStackParamList,
  NavigationScreen.EPISODE
>

export type { EpisodeScreenRouteProp }
