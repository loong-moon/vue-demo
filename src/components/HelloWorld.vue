<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App:{{ appName }}</h1>
    <Button type="primary" @click="changeAppName('我的应用')">Primary</Button>

    <div style="padding: 10px;">
      <router-link to="/player">视频播放</router-link>
      <router-link to="/dash">DASH播放</router-link>
      <router-link to="/hls">HlS播放</router-link>
      <router-link to="/plyr">plyr播放</router-link>
    </div>

    <svg class="icon" style="color:red;" aria-hidden="true">
      <use xlink:href="#icon-xiangzuo"></use>
    </svg>

  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        tokens: null
      }
    },
    computed: {
      ...mapState([
        'appName'
      ])
    },
    mounted () {
      this.$nextTick()
        .then(function () {
          // DOM 更新了
        })
      // console.log(this, this.$http)
//      this.getTokens()
      this.testFunc('aaa')
    },
    methods: {
      ...mapMutations([
        'changeAppName'
      ]),
      sysFunc (v1, v2) {
        // console.log(v1, v2)
      },
      testFunc (str) {
        // console.log(str)
        this.sysFunc(str)
      },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
