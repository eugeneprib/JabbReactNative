import TrackPlayer, { Event } from 'react-native-track-player'

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play' as Event, () => TrackPlayer.play())
  TrackPlayer.addEventListener('remote-pause' as Event, () =>
    TrackPlayer.pause()
  )
}
