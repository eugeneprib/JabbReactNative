import React, { useEffect, useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import TrackPlayer, {
  useProgress,
  Event,
  Capability,
  useTrackPlayerEvents
} from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { DateFormatType, getFormattedDate } from 'src/helpers'
import * as dateFns from 'date-fns'
import PlayIcon from 'src/assets/images/play.svg'
import StopIcon from 'src/assets/images/stop.svg'
import PauseIcon from 'src/assets/images/pause.svg'
import RewindIcon from 'src/assets/images/rewind.svg'
import ForwardIcon from 'src/assets/images/forward.svg'
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
  const { position, duration } = useProgress()

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1048576
    })
    return true
  }

  // const events = [
  //   Event.PlaybackTrackChanged,
  //   Event.PlaybackQueueEnded,
  //   Event.PlaybackError,
  //   Event.RemotePause,
  //   Event.RemoteNext,
  //   Event.RemotePrevious,
  //   Event.RemotePlay,
  //   Event.RemotePause,
  //   Event.RemoteStop,
  //   Event.RemoteSeek,
  //   Event.RemoteDuck,
  // ];
  // useTrackPlayerEvents(events, event => {
  //   switch (event.type) {
  //     case Event.RemoteDuck:
  //       pauseSong();
  //       break;
  //     case Event.PlaybackError:
  //       console.warn(
  //         'An error occured while playing the current track.',
  //         event,
  //       );
  //       break;
  //     case Event.RemoteNext:
  //       playNextSong();
  //       break;
  //     case Event.RemotePrevious:
  //       playPrevSong();
  //       break;
  //     case Event.RemotePlay:
  //       playSong();
  //       break;
  //     case Event.RemotePause:
  //       pauseSong();
  //       break;
  //     case Event.RemoteStop:
  //       pauseSong();
  //       break;
  //     case Event.RemoteSeek:
  //       TrackPlayer.seekTo(event.position);
  //       break;
  //     default:
  //   }
  // });

  useEffect(() => {
    trackPlayerInit()
    // TrackPlayer.registerPlaybackService(() => require('../../services/player'));
    TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true,
      capabilities: [Capability.Play, Capability.Pause, Capability.SeekTo],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SeekTo
      ],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SeekTo
      ]
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
  const onHandleSeekTo = (seconds: number) => {
    TrackPlayer.seekTo(seconds)
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25
      }}
    >
      <Pressable
        onPress={onPressFunction}
        style={{
          backgroundColor: '#e1e1e1',
          width: 36,
          height: 36,
          margin: 10,
          borderRadius: 36,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <PlayIcon width={12} fill={'#595959'} />
      </Pressable>

      <Pressable
        onPress={onPressStop}
        style={{
          backgroundColor: '#e1e1e1',
          width: 36,
          height: 36,
          margin: 10,
          borderRadius: 36,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <StopIcon width={12} height={12} fill={'#595959'} />
      </Pressable>

      <Pressable
        onPress={onPressPause}
        style={{
          backgroundColor: '#e1e1e1',
          width: 36,
          height: 36,
          margin: 10,
          borderRadius: 36,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <PauseIcon width={12} height={12} fill={'#595959'} />
      </Pressable>
      <Pressable
        onPress={() => onHandleSeekTo(position + 15)}
        style={{
          backgroundColor: '#e1e1e1',
          width: 36,
          height: 36,
          margin: 10,
          borderRadius: 36,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <RewindIcon width={12} height={12} fill={'#595959'} />
      </Pressable>
      <Pressable
        onPress={() => onHandleSeekTo(position - 15)}
        style={{
          backgroundColor: '#e1e1e1',
          width: 36,
          height: 36,
          margin: 10,
          borderRadius: 36,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ForwardIcon width={12} height={12} fill={'#595959'} />
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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ width: '15%', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 12 }}>
            {getFormattedDate(
              String(dateFns.addSeconds(new Date(0), position)),
              DateFormatType.HOURS_MINUTES_SECONDS
            )}
          </Text>
        </View>
        <Slider
          style={{ width: '70%', height: 40 }}
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#52527a"
          maximumTrackTintColor="#52527a"
          thumbTintColor="#52527a"
          value={position}
          onSlidingComplete={(seek) => onHandleSeekTo(seek)}
        />
        <View style={{ width: '15%' }}>
          <Text style={{ fontSize: 12 }}>
            {getFormattedDate(
              String(dateFns.addSeconds(new Date(0), duration)),
              DateFormatType.HOURS_MINUTES_SECONDS
            )}
          </Text>
        </View>
      </View>
    </View>
  )
}
export default Player
