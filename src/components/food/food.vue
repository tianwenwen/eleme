<template>
  <transition name="into">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="img-header">
          <img src="" alt="">
          <span class="close" @click="close($event)"><</span>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="newPrice">￥{{food.price}}</span>
            <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
          </div>

        </div>
        <div class="car-control-wrapper">
          <div class="car-wrapper" v-show="food.count>=1">
            <carcontrol :food="food" @carAdd="carAdd"></carcontrol>
          </div>
          <transition name="fade">
            <div class="buy" v-show="!food.count || food.count===0" @click.stop="buy($event)">
              加入购物车
            </div>
          </transition>

        </div>

      </div>
    </div>
  </transition>

</template>

<script>
  import Vue from 'vue';
   import BScroll from 'better-scroll';
   import Carcontrol from'@/components/carcontrol/carcontrol'
    export default {
      name:'food',
        data: function () {
            return {
              showFlag:false
            }
        },
      props:{
          food:{
            type:Object
          }
      },
      components:{
        carcontrol:Carcontrol
      },
      methods:{
        show(event){
          if(!event._constructed){return}
          this.showFlag = true;
          this.$nextTick(function(){
            if(!this.scroll){
              this.scroll =new BScroll(this.$refs.food,{
                click:true
              })
            }else{
              this.scroll.refresh();
            }
          })

        },
        close(event){
          if(!event._constructed){return}
          this.showFlag = false;
        },
        carAdd(target){
          this.$emit("carAddd",target)
        },
        buy(event){
          if(!event._constructed)return;
          if(this.food.count){
            this.food.count++;
          }else{
           Vue.set(this.food,'count',1);
          }
          this.carAdd(event.target);

        }
      }
    }
</script>
<style lang="less">
.food{
  position: fixed;
  left:0;
  top:0;
  bottom:48px;
  z-index:30;
  width: 100%;
  background:#FFF;
  transition:all .4s linear;
  &.into-enter-to{
     opacity: 1;
     transform: translate3d(0,0,0);
   }
   &.into-leave-to,&.into-enter{
     transform: translate3d(100%,0,0);
    }
  .food-content{

    .img-header{
      position:relative;
      width:100%;
      height:0;
      padding-top:100%;
    /*padding-top保证了宽高相等，且不会影响整个页面*/

      img{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background:rgba(7,17,27,.8)

      }
      .close{
        position: absolute;
        top:10px;
        left:0;
        color:#FFF;
        padding:10px;
        display: block;
        font-size:20px;
      }
    }
    .content{
      padding:18px;
      text-align:left;
      .title{
        line-height:14px;
        margin-bottom:8px;
        font-size:14px;
        font-weight: 700;
        color:rgb(7,17,27);
      }
      .detail{
        margin-bottom:18px;
        line-height:10px;
        font-size: 0;
        height:10px;
        .sell-count,.rating{
          font-size:10px;
          color:rgb(147,153,159)
        }
        .sell-count{
          margin-right:12px;
        }

      }
      .price{
      .newPrice{
        color:rgb(240,20,20);
        font-weight: 700;
      }
      .oldPrice{
        color:grey;
        font-size:10px;
        text-decoration: line-through;
      }

      }
    }
  .car-control-wrapper{
    position: absolute;
    right: 12px;
    bottom:12px;
    .buy{
      position:absolute;
      right:18px;
      bottom:18px;
      z-index:10;
      height:24px;
      line-height:24px;
      padding:0 12px;
      border-radius:12px;
      box-sizing: border-box;
      font-size:10px;
      color:#FFF;
      background:rgb(0,160,220);
      width: 100px;
      transition:all.2s;
      &.fade-enter-to{
      opacity: 1;
           }
        }
        &.fade-enter,&.date-leave-to{
                opacity:0;
              }
  }
  }


}
</style>
