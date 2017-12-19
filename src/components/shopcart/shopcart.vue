<template>
    <div class="shopcart">
        <div class="content">
          <div class="content-left">
            <div class="logo-wrapper">
              <div class="logo">
                <span class="icon-cart">CAR</span>
              </div>
            </div>
            <div class="price">
              {{data.price}}
            </div>
            <div class="desc">
              {{data.desc}}
            </div>
          </div>
          <div class="content-right">

          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
      props:{
          data:{
            type:Object
          }
      }
    }
</script>
<style lang="less">
.shopcart{
  position: fixed;
  width: 100%;
  bottom:0;
  left:0;
  z-index:99;
  height: 48px;
  .content{
    display: flex;
    background: #141d27;
    height:100%;
    font-size:0;
    .content-left{
      flex:1;
      text-align: left;
      .logo-wrapper{
        display: inline-block;
        font-size:0;
        position: relative;
        top:-10px;
        background:#141d27;
        padding:6px;
        margin:0 12px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-sizing: border-box;
        .logo{
          width: 40px;
          height: 40px;
          background:#2b343c;
          border-radius: 50%;
          margin:0 0 0 2px;
          font-size:14px;
          text-align: center;
          line-height: 40px;
          color:#FFF;
        }
      }
      .price{
        display: inline-block;
        font-size:16px;
        color:#FFF;
        box-sizing: border-box;
        margin-top:12px;
        line-height: 24px;
        padding-right:12px;
        font-weight: 700;
        border-right:1px solid rgba(255,255,255,.1);
      }
      .desc{
        display: inline-block;
        font-size:12px;
        color:#2b343c;
      }
    }
    .content-right{
      flex:0 0 105px;
      width: 105px;
    }

  }
}

</style>
