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
        <span class="address"></span>
        <span class="star"></span>
        <span>人均{{seller.per}}</span>
      </div>
      <div class="header-notice">
        <p>{{seller.notice}}</p>
      </div>
    </div>
</template>

<script>
    export default {
      data: function () {
        return {}
      },
      props:{
        seller:{
          type:Object
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
  }
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

</style>
