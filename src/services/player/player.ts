import TrackPlayer, { Event } from 'react-native-track-player'

module.exports = async function () {
  TrackPlayer.addEventListener(
    'remote-play' as Event,
    async () => await TrackPlayer.play()
  )
  TrackPlayer.addEventListener(
    'remote-pause' as Event,
    async () => await TrackPlayer.pause()
  )
  TrackPlayer.addEventListener(
    'remote-stop' as Event,
    async () => await TrackPlayer.stop()
  )
}
