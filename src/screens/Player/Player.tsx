import React, { useEffect, useState } from 'react'
import { View, Pressable, Text, ScrollView } from 'react-native'
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { DateFormatType, getFormattedDate } from 'src/helpers'
import * as dateFns from 'date-fns'
import ArrowIcon from 'src/assets/images/arrow_back.svg'
import PlayIcon from 'src/assets/images/play.svg'
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
  const [isPlaying, setPlaying] = useState(false)

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
    setPlaying(true)
  }
  const onPressPause = () => {
    TrackPlayer.pause()
    setPlaying(false)
  }
  const onHandleSeekTo = (seconds: number) => {
    TrackPlayer.seekTo(seconds)
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        padding: 25
      }}
    >
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Pressable
          onPress={onPressFunction}
          style={{
            position: 'absolute',
            left: 0,
            top: '5%',
            backgroundColor: '#e1e1e1',
            width: 36,
            height: 36,
            margin: 10,
            borderRadius: 36,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ArrowIcon width={12} fill={'#595959'} />
        </Pressable>
        <Text>Now Plaing</Text>
      </View>
      <View
        style={{ flex: 0.4, width: '100%', backgroundColor: 'yellow' }}
      ></View>
      <View
        style={{
          flexDirection: 'column',
          flex: 0.25,
          width: '100%',
          backgroundColor: 'green'
        }}
      ></View>
      <View
        style={{
          flexDirection: 'column',
          flex: 0.25,
          width: '100%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
        <View
          style={{
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            onPress={() => onHandleSeekTo(position - 15)}
            style={{
              width: 36,
              height: 36,
              margin: 10,
              borderRadius: 36,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <RewindIcon
              style={{ position: 'absolute', top: 6 }}
              width={26}
              height={26}
              fill={'#595959'}
            />
          </Pressable>
          {!isPlaying && (
            <Pressable
              onPress={onPressFunction}
              style={{
                backgroundColor: '#e1e1e1',
                width: 46,
                height: 46,
                margin: 10,
                borderRadius: 46,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <PlayIcon width={12} fill={'#595959'} />
            </Pressable>
          )}
          {isPlaying && (
            <Pressable
              onPress={onPressPause}
              style={{
                backgroundColor: '#e1e1e1',
                width: 46,
                height: 46,
                margin: 10,
                borderRadius: 46,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <PauseIcon width={12} height={12} fill={'#595959'} />
            </Pressable>
          )}
          <Pressable
            onPress={() => onHandleSeekTo(position + 15)}
            style={{
              width: 36,
              height: 36,
              margin: 10,
              borderRadius: 36,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <ForwardIcon
              style={{ position: 'absolute', top: 6 }}
              width={26}
              height={26}
              fill={'#595959'}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}
export default Player
