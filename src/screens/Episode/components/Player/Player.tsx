import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import { PlainText } from 'src/components'
import { PlayerEpisode } from 'src/common/types'
import { ACTIVE_OPACITY } from 'src/common/constants'
import PlayIcon from 'src/assets/images/play.svg'
import PauseIcon from 'src/assets/images/pause.svg'
import RewindIcon from 'src/assets/images/rewind.svg'
import ForwardIcon from 'src/assets/images/forward.svg'
import {
  getBackwardTime,
  getForwardTime,
  getPlayerTime
} from './common/helpers'
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

  const handleRewindForward = () => {
    TrackPlayer.seekTo(getForwardTime(position, duration))
  }

  const handleRewindBackward = () => {
    TrackPlayer.seekTo(getBackwardTime(position))
  }

  return (
    <View>
      <View style={styles.sliderWrapper}>
        <View style={[styles.timeWrapper, styles.timePosition]}>
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
          onSlidingComplete={TrackPlayer.seekTo}
        />
        <View style={[styles.timeWrapper, styles.timeDuration]}>
          <PlainText label={getPlayerTime(duration)} style={styles.time} />
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          style={styles.jumpButton}
          onPress={handleRewindBackward}
        >
          <RewindIcon width={16} height={30} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          style={styles.controlButton}
          onPress={onHandleControlPlayer}
        >
          {isPlaying ? <PauseIcon width={16} /> : <PlayIcon width={14} />}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          style={styles.jumpButton}
          onPress={handleRewindForward}
        >
          <ForwardIcon width={16} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Player
