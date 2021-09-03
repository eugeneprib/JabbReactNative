import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationScreen } from 'src/common/enums'
import { RootStackParamList } from 'src/common/types'

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  NavigationScreen.HOME
>

export type { HomeScreenNavigationProp }
