<template>
  <div class="container">
      <v-header :seller="seller"></v-header>
      <div class="tab border-1px">
        <div class="tab-item">
          <!--<router-link to="/goods" tag="li">商品</router-link>-->
          <router-link :to="{name:'goods'}">商品</router-link>
          <!--<a href="/goods">商品</a>-->
        </div>
        <div class="tab-item">
          <router-link :to="{path:'/ratings', query:{plan:'test'}}">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{name:'seller', params:{color: 123 }}">商家</router-link>

        </div>
      </div>
      <div class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="footer">
        我是尾部
      </div>
  </div>
</template>

<script>
  import Header from '@/components/header/header';
export default {
  name: 'layout',
  data() {
    return {
      seller:{
        notice:"商家活动在即，快快戳！",
        img:"",
        name:"fenxing",
        description:"zhuansong",
        per:"30"
      },
      goods:{},
      ratings:{}
    }
  },
  created() { // 实例已经创建完成之后被调用
    this.$http.get('/api/goods').then(function (response) {
      // 成功回调
      response = response.body
      if (response.status === 200) {
        this.goods = response.data // this  vue实例
      }
    }, function () {
      // 失败回调

    })
  },
  components:{
    vHeader:Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../common/less/mixin.less";
.tab {
  display: flex;
  width: 100%;
  height: 0.5rem;
  flex:1;
  line-height: 0.5rem;
  .border-1px(rgba(7,17,27,.1));
  .tab-item{
    flex: 1;
    text-align: center;
    a{
      display: block;
      color:rgb(77,85,93);
    &.active{
       color:rgb(240,20,20);
     }
    }
  }
}
</style>
