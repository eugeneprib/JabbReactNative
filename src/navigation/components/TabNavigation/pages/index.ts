import { ComponentType } from 'react'
import { SvgProps } from 'react-native-svg'
import { Home, Podcast, User } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'
import HomeIcon from 'src/assets/images/home.svg'
import Play from 'src/assets/images/playNavigation.svg'
import UserIcon from 'src/assets/images/user.svg'

type Props = {
  name: NavigationScreen
  component: ComponentType<any>
  Icon: React.FC<SvgProps>
}

export const tabPages: Props[] = [
  {
    name: NavigationScreen.HOME,
    component: Home,
    Icon: HomeIcon
  },
  {
    name: NavigationScreen.LISTENING,
    component: Podcast,
    Icon: Play
  },
  {
    name: NavigationScreen.MY_PROFILE,
    component: User,
    Icon: UserIcon
  }
]
