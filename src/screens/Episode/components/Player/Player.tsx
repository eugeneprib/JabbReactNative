import React, { useEffect, useState } from 'react'
import { View, Pressable } from 'react-native'
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { PlainText } from 'src/components'
import { PlayerEpisode } from 'src/common/types'
import PlayIcon from 'src/assets/images/play.svg'
import PauseIcon from 'src/assets/images/pause.svg'
import RewindIcon from 'src/assets/images/rewind.svg'
import ForwardIcon from 'src/assets/images/forward.svg'
import { getPlayerTime } from './common/helpers'
import {
  DEFAULT_START_TIME,
  TIME_SHIFT_IN_SECONDS,
  BASE_SLIDER_COLOUR
} from './common/constants'
import styles from './styles'

type Props = {
  episode: PlayerEpisode
  startToPlay?: boolean
}

const Player: React.FC<Props> = ({ episode, startToPlay = false }) => {
  const { position, duration } = useProgress()
  const [isPlaying, setPlaying] = useState(startToPlay)

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer({
      maxCacheSize: 1048576
    })
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

    if (startToPlay) {
      TrackPlayer.play()
    }
  }, [])

  const onHandleControlPlayer = () => {
    isPlaying ? TrackPlayer.pause() : TrackPlayer.play()
    setPlaying(!isPlaying)
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
          <PlainText label={getPlayerTime(position)} style={styles.time} />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={DEFAULT_START_TIME}
          maximumValue={duration}
          minimumTrackTintColor={BASE_SLIDER_COLOUR}
          maximumTrackTintColor={BASE_SLIDER_COLOUR}
          thumbTintColor={BASE_SLIDER_COLOUR}
          value={position}
          onSlidingComplete={onHandleSeekTo}
        />
        <View style={styles.durationWrapper}>
          <PlainText label={getPlayerTime(duration)} />
        </View>
      </View>
      <View style={styles.row}>
        <Pressable onPress={onHandleRewind} style={styles.jumpButton}>
          <RewindIcon style={styles.jumpIcon} width={26} height={26} />
        </Pressable>

        <Pressable onPress={onHandleControlPlayer} style={styles.controlButton}>
          {isPlaying ? <PauseIcon width={12} /> : <PlayIcon width={12} />}
        </Pressable>

        <Pressable onPress={onHandleForward} style={styles.jumpButton}>
          <ForwardIcon style={styles.jumpIcon} width={26} height={26} />
        </Pressable>
      </View>
    </View>
  )
}
export default Player
