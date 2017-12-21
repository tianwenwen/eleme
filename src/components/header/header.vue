<template>
    <div class="header">

      <div class="header-bg clearfix">
        <div class="app-share">
          <span class="icon-collect"></span>
          <span class="icon-share"></span>
        </div>
        <div class="upload-img">
          上传照片
        </div>
      </div>
      <div class="header-detail">
        <div class="go-there"></div>
        <span class="address">{{seller.address}}</span>
        <span class="star"></span>
        <span>人均{{seller.per}}</span>
      </div>
      <div class="header-notice ellipsis" @click="showDetail">
        <span class="title"></span>
        <span class="bulletin-text">{{seller.notice}}</span>
      </div>
      <transition name = "fade">
        <div class="detail" v-show="detailShow">
          <div class="wrap clearfix">
            <div class="detail-main">
              <h1>{{seller.name}}</h1>
              <span>{{seller.score}}</span>
              <star :score="seller.score" :size="36"></star>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>

            </div>
          </div>
          <div @click="closeDetail" class="detail-close">关闭</div>
        </div>
      </transition>

    </div>

</template>

<script>
    import  STAR from '@/components/star/star'
    export default {
      data: function () {
        return {
          detailShow:false,
        }
      },
      components:{
        star:STAR
      },
      props:{
        seller:{
          type:Object
        }
      },
      methods:{
        showDetail:function(){
          this.detailShow = true;
        },
        closeDetail:function(){
          this.detailShow = false;
        }
      }
    }
</script>
<style lang="less">
  .header{
    color:#FFF;
    background: #333;
    text-align: center;
    overflow: hidden;
  .header-bg{
    height: 3.63rem;
    background:#7e8c8d;
    position: relative;
  }
  .app-share{
    position: absolute;
    top:0.58rem;
    right:0;
  }
  .icon-collect{
    width: 0.45rem;
    height:0.43rem;
    display: inline-block;
    background:red;
  }
  .icon-share{
    width:0.42rem;
    height: 0.40rem;
    display: inline-block;
    background: green;
  }
  .upload-img{
    color: #fff;
    width:1.98rem;
    height:0.52rem;
    line-height:0.52rem;
    position: absolute;
    bottom:0.25rem;
    left:0.2rem;
    border-radius: 0.265rem;
    -webkit-border-radius:0.265rem;
    background:rgba(0,0,0,.5);
  }
  .header-detail{
    background: #999;
  }
  .header-notice{
    height:0.656rem;
    line-height:0.656rem;
    text-align: left;
    padding:0 0.28rem;
    background: #999;
    cursor:pointer;
  }
  .detail{
    position:fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background:rgba(7,17,27,.8);
    top:0;
    left:0;
    backdrop-filter:blur(10px);

  &.fade-enter-active, &.fade-leave-active {
                          transition: opacity .5s;
                        }
  &.fade-enter, &.fade-leave-to {
                   opacity: 0;
                 }
  &.fade-leave-to{
     background:rgba(7,17,27,0)
   }
  &.fade-enter-to{
     background:rgba(7,17,27,0.8);
   }

  .wrap{
    min-height: 100%;
  }
  .detail-main{
    margin-top:64px;
    padding-bottom:64px;
    word-wrap:break-word;
  }
  .detail-close{
    position:relative;
    width: 32px;
    height: 32px;
    line-height:32px;
    border:1px solid red;
    margin:-64px auto 0 auto;
    clear:both;
  }
  .title{
    display: flex;
    width: 80%;
    margin:28px auto 20px;
    text-align: center;
  .line{
    flex:1;
    height: 1px;
    margin-top:8px;
    border-bottom: 1px solid rgba(225,225,2225,0.2);
  }
  .text{
    padding:0 12px;
    font-size:14px;
    font-weight: 700;
  }
  }
  }
  }


</style>
