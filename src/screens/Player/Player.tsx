import React, { useEffect } from 'react'
import { View, Pressable, Text } from 'react-native'
import TrackPlayer from 'react-native-track-player'
import useTrackPlayerProgress from 'react-native-track-player'
import styles from './styles'

const mockedTrack = [
  {
    id: '1',
    url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
    title: 'Keys of moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
    album: '',
    duration: 149
  }
]

const Player: React.FC = () => {
  // const { position, bufferedPosition, duration } = useTrackPlayerProgress()

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1048576
    })
    return true
  }
  useEffect(() => {
    trackPlayerInit()
    TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true
      // capabilities: [
      //   TrackPlayer.CAPABILITY_PLAY,
      //   TrackPlayer.CAPABILITY_PAUSE,
      //   TrackPlayer.CAPABILITY_SEEK_TO,
      //   TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      //   TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
      // ],
      // compactCapabilities: [
      //   TrackPlayer.CAPABILITY_PLAY,
      //   TrackPlayer.CAPABILITY_PAUSE,
      //   TrackPlayer.CAPABILITY_SEEK_TO,
      //   TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      //   TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
      // ],
      // notificationCapabilities: [
      //   TrackPlayer.CAPABILITY_PLAY,
      //   TrackPlayer.CAPABILITY_PAUSE,
      //   TrackPlayer.CAPABILITY_SEEK_TO,
      //   TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      //   TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
      // ]
    })
  }, [])

  const onPressFunction = () => {
    TrackPlayer.add(mockedTrack)
    TrackPlayer.play()
  }
  const onPressStop = () => {
    TrackPlayer.stop()
  }
  const onPressPause = () => {
    TrackPlayer.pause()
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Pressable
        onPress={onPressFunction}
        style={{ backgroundColor: '#6200ee', padding: 15, margin: 10 }}
      >
        <Text
          style={{
            color: 'white',
            width: 200,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center'
          }}
        >
          Play
        </Text>
      </Pressable>

      <Pressable
        onPress={onPressStop}
        style={{ backgroundColor: '#000', padding: 15, margin: 10 }}
      >
        <Text
          style={{
            color: 'white',
            width: 200,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center'
          }}
        >
          Stop
        </Text>
      </Pressable>

      <Pressable
        onPress={onPressPause}
        style={{ backgroundColor: 'orange', padding: 15, margin: 10 }}
      >
        <Text
          style={{
            color: 'white',
            width: 200,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center'
          }}
        >
          Pause
        </Text>
      </Pressable>
      <Pressable
        onPress={() => TrackPlayer.seekTo(12.5)}
        style={{ backgroundColor: 'orange', padding: 15, margin: 10 }}
      >
        <Text
          style={{
            color: 'white',
            width: 200,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center'
          }}
        >
          Seek
        </Text>
      </Pressable>
      <Pressable
        onPress={() => TrackPlayer.setVolume(0.5)}
        style={{ backgroundColor: 'orange', padding: 15, margin: 10 }}
      >
        <Text
          style={{
            color: 'white',
            width: 200,
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center'
          }}
        >
          Volume
        </Text>
      </Pressable>

      <View>
        {/* <Text>
          Track progress: {position} seconds out of {duration} total
        </Text>
        <Text>
          Buffered progress: {bufferedPosition} seconds buffered out of{' '}
          {duration} total
        </Text> */}
      </View>
    </View>
  )
}

export default Player
