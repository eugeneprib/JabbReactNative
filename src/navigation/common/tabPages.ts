import { SvgProps } from 'react-native-svg'
import { Home, PodcastPage, SignIn } from 'src/screens'
import { NavigationScreen } from 'src/common/enums'
import HomeIcon from 'src/assets/images/home.svg'
import Play from 'src/assets/images/playNavigation.svg'
import User from 'src/assets/images/user.svg'

type Prop = {
  name: NavigationScreen
  component: React.FC<any>
  Icon: React.FC<SvgProps>
}

export const tabPages: Prop[] = [
  {
    name: NavigationScreen.HOME,
    component: Home,
    Icon: HomeIcon
  },
  {
    name: NavigationScreen.LISTENING,
    component: PodcastPage,
    Icon: Play
  },
  {
    name: NavigationScreen.MY_PROFILE,
    component: SignIn,
    Icon: User
  }
]
