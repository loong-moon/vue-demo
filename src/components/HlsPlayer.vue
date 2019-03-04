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
    name: 'HlsPlayer',
    data () {
        return {
            tokens: null
        }
    },
    mounted () {
        this.initPlayer()
    },
    methods: {
        initPlayer () {
            videojs(this.$refs.video, {
                //            html5: {
                //              hls: {
                //                withCredentials: true
                //              }
                //            },
                sources: [{
                    //              withCredentials: true,
                    type: 'application/x-mpegURL',
                    src: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'
                    // src: 'http://localhost:8090/oceans-hls/index.m3u8'
                }],
                muted: true,
                controls: true,
                autoplay: false,
                preload: 'auto'
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
