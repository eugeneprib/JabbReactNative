import { NavigationScreen } from 'src/common/enums'

type RootStackParamList = {
  [NavigationScreen.SIGN_IN]: undefined
  [NavigationScreen.HOME]: undefined
  [NavigationScreen.MY_PROFILE]: undefined
  [NavigationScreen.PODCAST]: { id: number }
  [NavigationScreen.EPISODE]: { id: number }
  [NavigationScreen.TO_TABS_NAVIGATOR]: undefined
}

export type { RootStackParamList }
