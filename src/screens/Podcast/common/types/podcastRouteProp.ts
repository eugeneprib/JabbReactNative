import { RouteProp } from '@react-navigation/native'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type PodcastRouteProp = RouteProp<RootStackParamList, NavigationScreen.PODCAST>

export type { PodcastRouteProp }
