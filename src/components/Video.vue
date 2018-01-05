<template>
  <div class="video-box">
    <Row :gutter="16">
      <i-col span="6">
        <player></player>
        <div>普通播放</div>
      </i-col>
      <i-col span="6">
        <dash-player></dash-player>
        <div>DASH播放</div>
      </i-col>
      <i-col span="6">
        <hls-player></hls-player>
        <div>HLS播放</div>
      </i-col>
      <i-col span="6">
        <div>col-6</div>
      </i-col>
    </Row>

  </div>
</template>

<script>
  import Player from './Player.vue'
  import DashPlayer from './DashPlayer.vue'
  import HlsPlayer from './HlsPlayer.vue'
  export default {
    name: 'CommonPlayer',
    data () {
      return {
        tokens: null
      }
    },
    components: {Player, DashPlayer, HlsPlayer},
    mounted () {
      this.$nextTick()
        .then(function () {
          // DOM 更新了
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
  .video-box{ padding: 20px;}
</style>
