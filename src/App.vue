<template>
  <div class="layout">
    <div class="layout-ceiling">
      <div class="layout-ceiling-main">
        <a href="#">Sign up</a> |
        <a href="#">Help Center</a> |
        <a href="#">Security</a> |
        <a href="#">Service</a>
      </div>
    </div>
    <div class="layout-header">
      <div class="layout-logo"><img src="./assets/logo.png" /></div>
    </div>
    <div style="min-height: 200px">
      <router-view/>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    img{ height: 30px; }
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
</style>
