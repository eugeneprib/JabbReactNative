import TrackPlayer, { Event } from 'react-native-track-player'

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play' as Event, () => TrackPlayer.play())
  TrackPlayer.addEventListener('remote-pause' as Event, () =>
    TrackPlayer.pause()
  )
  TrackPlayer.addEventListener('remote-stop' as Event, () =>
    TrackPlayer.destroy()
  )
}

// const Player = async () => {
//   TrackPlayer.addEventListener('remote-play' as Event, () => TrackPlayer.play());
//   TrackPlayer.addEventListener('remote-pause' as Event, () => TrackPlayer.pause());
//   TrackPlayer.addEventListener('remote-stop' as Event, () => TrackPlayer.destroy());
// }

// export { Player }
