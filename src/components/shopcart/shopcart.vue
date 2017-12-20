<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper" @click="totalCount>0 ?showDetail=!showDetail:''">
          <div class="logo" :class="{'active':totalCount>0}">
            <span class="icon-cart" v-show="totalCount>0">{{totalCount}}</span>
          </div>
        </div>
        <div class="price" :class="{'active':totalPrice>0}">
          ￥{{totalPrice}}元
        </div>
        <div class="desc">
          另需配送费￥{{seller.deliveryPrice}}元
        </div>
      </div>
      <div class="content-right" :class="{'active':totalPrice>=seller.minPrice}">
        <div class="pay">
          {{payDesc}}
        </div>
      </div>
      <div class="ball-container">
        <template v-for="ball in balls">
          <transition name="drop" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </template>

      </div>
    </div>
    <transition name="fold">
      <div class="detail-content" v-show="showDetail">
        <div class="list-header clearfix">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li v-for="food in selectFoods" class="food-item">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
                <div class="car-wrapper">
                  <carcontrol :food="food"></carcontrol>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import Carcontrol from'@/components/carcontrol/carcontrol'
  export default {
    data: function () {
      return {
        showDetail:false,
        balls:[
          {
          show:false
        },{
            show:false
          },{
            show:false
          },{
            show:false
          },{
            show:false
          }
        ],
        dropBalls:[]
      }
    },
    props: {
      seller: {
        type: Object
      },
      selectFoods: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components:{
      carcontrol:Carcontrol
    },
    computed: {
      totalPrice () {
        let total = 0
        for (let i = 0; i < this.selectFoods.length; i++) {
          total += this.selectFoods[i].price * this.selectFoods[i].count
        }
        return total;
      },
      totalCount(){
        let count = 0;
        for (let i = 0; i < this.selectFoods.length; i++) {
          count += this.selectFoods[i].count
        }
        return count;
      },
      payDesc () {
        if(this.totalPrice === 0){
          return `￥${this.seller.minPrice}元起送`
        }else if(this.totalPrice < this.seller.minPrice){
          let diff = this.seller.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`
        }else{
          return '去结算'
        }
      }
    },
    methods:{
      dropBall (el) {
        for (let i = 0; i < this.balls.length; i++){
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeEnter(el){
        let count = this.balls.length;
        while(count--){
          let ball = this.balls[count];
          if(ball.show){
            let rect = ball.el.getBoundingClientRect();
            let x = (rect.left-32);
            let y = -(window.innerHeight-rect.top-22);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },
      enter(el){
        let rf = el.offsetHeight;
        this.$nextTick(function(){
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.transform = 'translate3d(0,0,0)';
        });

      },
      afterEnter(el){
        let ball = this.dropBalls.shift();
        if(ball){
          ball.show = false;
          el.style.display = 'none';
        }
      }
    }
  }
</script>
<style lang="less">
  .shopcart {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
    height: 48px;

  .content {
    display: flex;
    background: #141d27;
    height: 100%;
    font-size: 0;

  .content-left {
    flex: 1;
    text-align: left;

  .logo-wrapper {
    display: inline-block;
    font-size: 0;
    position: relative;
    top: -10px;
    background: #141d27;
    padding: 6px;
    margin: 0 12px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    box-sizing: border-box;

  .logo {
    width: 40px;
    height: 40px;
    background: #2b343c;
    border-radius: 50%;
    margin: 0 0 0 2px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    color: #FFF;
    position:relative;
    &.active{
      background:rgb(0,160,220);
      .icon-cart{

      }
     }
     .icon-cart{
       position: absolute;
       width: 24px;
       height: 16px;
       top:-5px;
       right:-10px;
       line-height: 16px;
       text-align: center;
       border-radius: 16px;
       font-size:9px;
       font-weight:700;
       color:#fff;
       background:rgb(240,20,20);
       box-shadow: 0 4px 8px 0 rgba(0,0,0,.4);
     }
  }

  }
  .price {
    display: inline-block;
    font-size: 16px;
    color: rgba(255, 255, 255, .4);
    box-sizing: border-box;
    margin-top: 12px;
    line-height: 24px;
    padding-right: 12px;
    font-weight: 700;
    vertical-align: top;
    border-right: 1px solid rgba(255, 255, 255, .1);
    &.actice{
       color:#FFF;
     }
  }

  .desc {
    display: inline-block;
    font-size: 10px;
    color: rgba(255, 255, 255, .4);
    vertical-align: top;
    margin: 12px 0 0 12px;
    line-height: 24px;
  }

  }
  .content-right {
    flex: 0 0 105px;
    width: 105px;
    background: #2b333b;
     &.active{
      background: #bbb43c;
      .pay{
        color:#fff;
      }
      }

  .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, .4)
  }

  }

  }
  .ball-container{
    .ball{
      position:fixed;
      left:32px;
      bottom:32px;
      z-index:200;
      transition: all .4s cubic-bezier(.49,-0.29,0.75,0.41);
    }
    .inner{
      width: 16px;
      height: 16px;
      border-radius:50%;
      background:rgb(0,160,320);
      transition: all .4s linear;
    }


  }
  /*.fold-enter,.fold-leave-to{*/
    /*transform: translate3d(0,0,0);*/
  /*}*/
  /*.fold-enter-active{*/
    /*transform:translate3d(0,-100%,0);*/
  /*}*/
  .detail-content{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    z-index:-1;
    transition:all .5s;


  .list-header{
    height:40px;
    line-height:40px;
    padding:0 18px;
    background:#f3f5f7;
    border-bottom:2x solid rgba(7,17,27,.1)
    .title{
      float: left;
      font-size:14px;
      color:rgb(7,17,27);

    }
    .empty{
      float: right;
      font-size:12px;
      color:rgb(0,160,220);

    }
  }
  .list-content{
    padding:0 18px;
    max-height:217px;
    background:#fff;
    overflow:hidden;
    .food-item{
      display:block;
      border-bottom:1px solid rgba(7,17,27,.1);
      position:relative;
      padding:12px 0;
      box-sizing:border-box;
      .name{

        }
      .price{
        .car-wrapper{

        }
      }
    }
  }
  }

  }

</style>
