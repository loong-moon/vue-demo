<template>
  <div class="plyr-player">
    <video id="player" playsinline controls>
      <source src="/static/former.mp4" type="video/mp4">

      <!--Captions are optional -->
      <!--<track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default>-->
    </video>
  </div>
</template>

<script>
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

export default {
    name: 'PlyPlayer',
    data () {
        return {
            tokens: null,
            player: null
        }
    },
    mounted () {
        this.initPlayer()
        // this.$nextTick()
        //   .then(() => {
        //   })
    },
    methods: {
        initPlayer () {
            this.player = new Plyr('#player', {
                controls: [
                    'play-large', // The large play button in the center
                    'restart', // Restart playback
                    'rewind', // Rewind by the seek time (default 10 seconds)
                    'play', // Play/pause playback
                    'fast-forward', // Fast forward by the seek time (default 10 seconds)
                    'progress', // The progress bar and scrubber for playback and buffering
                    'current-time', // The current time of playback
                    'duration', // The full duration of the media
                    'mute', // Toggle mute
                    'volume', // Volume control
                    'captions', // Toggle captions
                    'settings', // Settings menu
                    'pip', // Picture-in-picture (currently Safari only)
                    'airplay', // Airplay (currently Safari only)
                    'fullscreen' // Toggle fullscreen
                ]
            })
        }
    },
    destroyed () {
    }
}
</script>

<style lang="scss" scoped>
   .plyr-player{width: 50%;}
</style>
