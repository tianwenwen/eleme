<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function () { // 实例已经创建完成之后被调用
    this.$http.get('/api/goods').then(function (response) {
      // 成功回调
      response = response.body
      if (response.status === 200) {
        this.seller = response.data // this  vue实例
      }
    }, function () {
      // 失败回调

    })
  }
}
</script>

<style>
  .app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
