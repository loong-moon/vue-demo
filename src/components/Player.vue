<template>
  <div class="player">
    <video id="my-video" ref="video" class="video-js" width="300" height="150">
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
  export default {
    name: 'Player',
    data () {
      return {
        tokens: null
      }
    },
    mounted () {
      this.$nextTick()
        .then(() => {

          videojs(this.$refs.video, {
            controls: true,
            autoplay: false,
            preload: 'auto'
          })

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
    }
  }
</script>

<style lang="scss" scoped>

</style>
