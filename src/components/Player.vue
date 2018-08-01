<template>
  <div class="player">
    <video id="my-video" ref="video" class="video-js" width="600" height="300">
      <!--<source src="/static/1.mp4" type='video/mp4'>-->
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
        tokens: null,
        player: null,
        mediaSource: null,
        sourceBuffer: null,
        videoList: [{
          url: '/static/oceans/frag_ocean000.mp4',
          seconds: 11
        }, {
          url: '/static/oceans/frag_ocean001.mp4',
          seconds: 11
        }, {
          url: '/static/oceans/frag_ocean002.mp4',
          seconds: 9
        }, {
          url: '/static/oceans/frag_ocean003.mp4',
          seconds: 8
        }, {
          url: '/static/oceans/frag_ocean004.mp4',
          seconds: 6
        }]
      }
    },
    mounted () {
      this.$nextTick()
        .then(() => {
          // const video = this.$refs.video
          // // const assetURL = 'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4'
          // const assetURL = '/static/oceans/frag_ocean000.mp4'
          // // const assetURL = 'http://localhost:8090/frag_a_1.mp4'
          // const mimeCodec = 'video/mp4; codecs="avc1.42C01E, mp4a.40.2"'
          //
          // var isSupportMp4 = MediaSource.isTypeSupported(mimeCodec)
          // console.log(isSupportMp4)
          //
          // var req = new XMLHttpRequest()
          // var player = window.player = videojs(video, {
          //   controls: true,
          //   preload: 'auto'
          // })
          // // the flash-based media sources implementation only supports FLV video data
          // // use XMLHttpRequest to get the raw byte array of an example FLV
          // req.open('GET', assetURL, true)
          // req.responseType = 'arraybuffer'
          // // req.rang = 'bytes=0-1024'
          // // console.log(req)
          // req.onload = function (event) {
          //   // create a new media source to hold the data buffers
          //   var mediaSource = new videojs.MediaSource()
          //
          //   // wrap the arraybuffer in a view so we can easily work with the
          //   // individual bytes
          //   var bytes = new Uint8Array(req.response)
          //   var url
          //   // when a media source is assigned to a video element the `sourceopen`
          //   // event fires
          //   mediaSource.addEventListener('sourceopen', function (e) {
          //     // construct the video data buffer and set the appropriate MIME type
          //     var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)
          //     // start feeding bytes to the buffer
          //     // the video element that is reading from the associated media buffer is
          //     // ready to start playing now
          //     sourceBuffer.appendBuffer(bytes)
          //     console.log(sourceBuffer)
          //     // player.play()
          //
          //   }, false)
          //   // to assign a media source to a video element, you have to create a URL for it
          //   url = videojs.URL.createObjectURL(mediaSource)
          //   // assign the media source URL to video.js
          //   player.src({
          //     src: url,
          //     type: 'video/mp4'
          //   })
          // }
          // req.send(null)

          // if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
          //   var mediaSource = new MediaSource()
          //   // console.log(mediaSource.readyState); // closed
          //   video.src = URL.createObjectURL(mediaSource)
          //   video.controls = true
          //   mediaSource.addEventListener('sourceopen', sourceOpen)
          // } else {
          //   console.error('Unsupported MIME type or codec: ', mimeCodec)
          // }

          // function sourceOpen () {
          //   // console.log(this.readyState); // open
          //   var mediaSource = this
          //   var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)
          //
          //   // mediaSource.readyState = 'open'
          //   // console.log(mediaSource)
          //
          //   fetchAB(assetURL, function (buf) {
          //     var buff = new Uint8Array(buf)
          //     sourceBuffer.appendBuffer(buff)
          //     console.log(sourceBuffer)
          //     sourceBuffer.addEventListener('updateend', function () {
          //       mediaSource.endOfStream()
          //       video.play()
          //       // console.log(mediaSource.readyState); // ended
          //     })
          //   })
          // }
          //
          // function fetchAB (url, cb) {
          //   // console.log(url)
          //   var xhr = new XMLHttpRequest()
          //   xhr.open('get', url)
          //   xhr.responseType = 'arraybuffer'
          //   xhr.onload = function () {
          //     cb(xhr.response)
          //   }
          //   xhr.send()
          // }

          this.initPlayer()
        })
    },
    methods: {
      initPlugin () {
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
      },
      initPlayer () {
        let segNum = 0

        this.player = videojs(this.$refs.video, {
          controls: true,
          preload: 'auto',
          controlBar: {
            children: ['playToggle', 'progressControl', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'volumePanel', 'fullscreenToggle'],
            volumePanel: {
              inline: false
            }
          }
        })
        this.mediaSource = new videojs.MediaSource()
        console.log(this.mediaSource)

        this.mediaSource.on('sourceopen', async (e) => {
          const sourceBuffer = this.mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42C01E, mp4a.40.2"')
          let bytes = await this.getVideo(this.videoList[segNum].url)
          sourceBuffer.appendBuffer(bytes)

          sourceBuffer.addEventListener('updateend', async () => {
            console.log('update' + segNum)
            segNum++

            if (!sourceBuffer.updating && this.videoList.length > segNum) {
              bytes = await this.getVideo(this.videoList[segNum].url)
              sourceBuffer.timestampOffset += this.videoList[segNum - 1].seconds
              sourceBuffer.appendBuffer(bytes)
            }
          })
          console.log(sourceBuffer)
        })

        const url = videojs.URL.createObjectURL(this.mediaSource)

        this.player.src({
          src: url,
          type: 'video/mp4'
        })
      },
      async getVideo (url) {
        // const url = '/static/oceans/frag_ocean000.mp4'

        const getBytes = await this.$http.get(url, {baseURL: '', timeout: 0, responseType: 'arraybuffer'})
          .then(response => {
            const resData = response.data
            return new Uint8Array(resData)
            // console.log(response)
          })
          .catch(err => {
            console.error(err)
          })
        // console.log(getBytes)
        return getBytes
      }
    },
    destroyed () {
    }
  }
</script>

<style lang="scss" scoped>

</style>
