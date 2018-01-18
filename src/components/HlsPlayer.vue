<template>
  <div class="player">
    <video id="my-video" ref="video" class="video-js" width="600" height="300">
      <!--<source src="http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" type="application/x-mpegURL">-->
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
  window.videojs = videojs
  require('videojs-contrib-hls/dist/videojs-contrib-hls')

  export default {
    name: 'DashPlayer',
    data () {
      return {
        tokens: null
      }
    },
    mounted () {
      this.$nextTick()
        .then(() => {

          videojs(this.$refs.video, {
//            html5: {
//              hls: {
//                withCredentials: true
//              }
//            },
            sources: [{
//              withCredentials: true,
              type: 'application/x-mpegURL',
              src: 'http://localhost:8090/oceans-hls/index.m3u8'
            }],
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
