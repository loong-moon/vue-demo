<template>
  <div class="player">
    <video id="my-video" ref="video" class="video-js" width="600" height="300">
      <source src="/static/3.flv" type='video/flv'>
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
  import 'videojs-flash'

  export default {
    name: 'FlvPlayer',
    data () {
      return {
        player: null
      }
    },
    mounted () {
      this.initPlayer()
    },
    methods: {
      initPlayer () {
        this.player = videojs(this.$refs.video, {
          controls: true,
          autoplay: false,
          preload: 'auto',
          techOrder: ['flash', 'html5']
        })

        // this.player.on('timeupdate', function () {
        //   console.log(this.currentTime())
        // })

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
