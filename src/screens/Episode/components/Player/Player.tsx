import React, { useEffect, useState } from 'react'
import { View, Pressable } from 'react-native'
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { getTime } from 'src/screens/Episode/helpers'
import { PlainText } from 'src/components'
import {
  DEFAULT_START_TIME,
  PlayerEpisode,
  TIME_SHIFT_IN_SECONDS
} from 'src/screens/Episode/common'
import PlayIcon from 'src/assets/images/play.svg'
import PauseIcon from 'src/assets/images/pause.svg'
import RewindIcon from 'src/assets/images/rewind.svg'
import ForwardIcon from 'src/assets/images/forward.svg'
import styles from './styles'

type Props = {
  episode: PlayerEpisode
}

const Player: React.FC<Props> = ({ episode }) => {
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
      stopWithApp: false,
      alwaysPauseOnInterruption: true,
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.Stop
      ]
    })
    TrackPlayer.add(episode)
  }, [])

  const onPressPlay = () => {
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

  const onHandleRewind = () => {
    TrackPlayer.seekTo(position - TIME_SHIFT_IN_SECONDS)
  }

  const onHandleForward = () => {
    TrackPlayer.seekTo(position + TIME_SHIFT_IN_SECONDS)
  }

  return (
    <View>
      <View style={styles.sliderWrapper}>
        <View style={styles.positionWrapper}>
          <PlainText label={getTime(position)} style={styles.time} />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={DEFAULT_START_TIME}
          maximumValue={duration}
          minimumTrackTintColor="#52527a"
          maximumTrackTintColor="#52527a"
          thumbTintColor="#52527a"
          value={position}
          onSlidingComplete={onHandleSeekTo}
        />
        <View style={styles.durationWrapper}>
          <PlainText label={getTime(duration)} />
        </View>
      </View>
      <View style={styles.row}>
        <Pressable onPress={onHandleRewind} style={styles.jumpButton}>
          <RewindIcon
            style={styles.jumpIcon}
            width={26}
            height={26}
            fill="#595959"
          />
        </Pressable>

        {!isPlaying && (
          <Pressable onPress={onPressPlay} style={styles.controlButton}>
            <PlayIcon width={12} fill="#595959" />
          </Pressable>
        )}
        {isPlaying && (
          <Pressable onPress={onPressPause} style={styles.controlButton}>
            <PauseIcon width={12} height={12} fill="#595959" />
          </Pressable>
        )}

        <Pressable onPress={onHandleForward} style={styles.jumpButton}>
          <ForwardIcon
            style={styles.jumpIcon}
            width={26}
            height={26}
            fill="#595959"
          />
        </Pressable>
      </View>
    </View>
  )
}
export default Player
