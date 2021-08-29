import { NavigationScreen } from 'src/common/enums'

type RootStackParamList = {
  [NavigationScreen.SIGN_IN]: undefined
  [NavigationScreen.HOME]: undefined
  [NavigationScreen.PODCAST]: undefined
  [NavigationScreen.EPISODE]: undefined
}

export type { RootStackParamList }
