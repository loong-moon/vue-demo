<template>
  <div class="player">
    <video id="my-video" ref="video" class="video-js" width="600" height="300">
      <source src="/static/1.mp4" type='video/mp4'>
      <p class="vjs-no-js">
        观看视频请启用JavaScript，并且把浏览器升级到
        <a href="http://videojs.com/html5-video-support/" target="_blank">支持HTML5 video</a>
      </p>
    </video>
  </div>
</template>

<script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  const Plugin = videojs.getPlugin('plugin')

  class Advanced extends Plugin {

    constructor (player, options) {
      super(player, options)

      // Whenever the player emits a playing or paused event, we update the
      // state if necessary.
      this.on(player, ['playing', 'paused'], this.updateState)
      this.on('statechanged', this.logState)
    }

    dispose () {
      super.dispose()
      videojs.log('the advanced plugin is being disposed')
    }

    updateState () {
      this.setState({playing: !this.player.paused()})
    }

    logState (changed) {
      videojs.log(`the player is now ${this.state.playing ? 'playing' : 'paused'}`)
    }
  }

  videojs.registerPlugin('advanced', Advanced)

  export default {
    name: 'Player',
    data () {
      return {
        tokens: null,
        player: null
      }
    },
    mounted () {
      this.$nextTick()
        .then(() => {

          this.player = videojs(this.$refs.video, {
            controls: true,
            autoplay: false,
            preload: 'auto'
          })
          this.player.advanced()
          this.player.play()

        })
    },
    methods: {
      getTokens () {
        this.$http.get('/device/devices/tokens')
          .then(response => {
            let resData = response.data
            // console.log(response);
            this.tokens = resData
          })
          .catch(err => {
            console.error(err)
          })
      }
    },
    destroyed () {
    }
  }
</script>

<style lang="scss" scoped>

</style>
