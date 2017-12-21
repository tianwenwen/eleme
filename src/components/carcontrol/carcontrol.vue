<template>
    <div class="carcontrol">
        <span class="car-decrease" v-show="food.count>0" @click.stop="decCar($event)">-</span>
        <span class="car-count" v-show="food.count>0">{{food.count}}</span>
        <span class="car-add" @click.stop="addCar($event)">+</span>
    </div>
</template>

<script>
  import Vue from 'vue';

    export default {

        data: function () {
            return {}
        },
      props:{
          food:{
            type:Object
          }
      },
      methods:{
        addCar(event){
          if(!event._constructed) return;
          if(!this.food.count){
            Vue.set(this.food,'count',1)
          }else{
            this.food.count++;
          }
          this.$emit('carAdd',event.target)
        },
        decCar(event){
          if(!event._constructed) return;
          this.food.count--;
        }
      }
    }
</script>
<style lang="less">
  .carcontrol{
    span{
      display: inline-block;
    }
    .car-decrease,.car-add{
      padding:6px;
      font-size:24px;
      line-height:24px;
      color:rgb(0,160,220)
    }
    .car-decrease{

    }
    .car-count{
      width: 12px;
      padding-top:12px;
      text-align: center;
      font-size:10px;
      color:rgb(147,153,159);
      vertical-align: top;

    }
    .car-add{

    }
  }
  .car-decrease{}
</style>
