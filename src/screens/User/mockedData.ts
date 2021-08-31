import { User, Podcast } from './common'

const MockedUser: User = {
  firstname: 'Yevhenii',
  surname: 'Cheremisin',
  nickname: 'Eugenius',
  email: 'eucheremisin@gmail.com',
  image:
    'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629464038/2/yhyck6w6nzrfkorkqlxv.jpg'
}

const MockedPodcasts: Podcast[] = [
  {
    name: `Cartoon's Soundtracks`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1629474124/2/ttp0xygzbdyrn0yyxfnk.jpg'
  },
  {
    name: `Game of Thrones`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628514060/2/ghhobbuga6qppv2brze1.jpg'
  },
  {
    name: `Country Roads`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628675258/2/lcwrvci7ti2hcqrwa5lh.jpg'
  },
  {
    name: `Calm Waves`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628675351/2/h2nbpynwbb2lm1qldjpk.jpg'
  },
  {
    name: `Classic Party`,
    author: MockedUser.nickname,
    image:
      'http://res.cloudinary.com/hmqu8gtpn/image/upload/v1628675741/2/ehbf6m8pokibhkxvori0.jpg'
  }
]

export { MockedUser, MockedPodcasts }
