import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type ListeningScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.LISTENING
>

export type { ListeningScreenNavigationProp }
