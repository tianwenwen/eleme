<template>
    <div class="star" :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"> </span>

    </div>
</template>

<script>
  const LEN = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_CLOSE = 'close';
    export default {
        data: function () {
            return {

            }
        },
      props:{
          size:{
            type:Number
          },
        score:{
            type:Number
        }
      },
      computed:{
          starType(){
            return 'star-' + this.size
          },
        itemClasses(){
          let result = [];
          let score = Math.floor(this.score*2)/2;
          let hasDecimal = score % 1 !== 0 ;
          let integer = Math.floor(score);
          for(let i = 0; i<integer;i++){
            result.push(CLS_ON);
          }
          if(hasDecimal){
            result.push(CLS_HALF)
          }
          while(result.length < LEN){
            result.push(CLS_CLOSE)
          }

          return result;

        }
      }
    }
</script>
<style lang="less" scoped>
.star{
  .star-item{
    display: inline-block;
    background-repeat: no-repeat;
    &.on{
      background: yellow;
     }
    &.close{
      background: grey;
     }
     &.half{
      background: palevioletred;
      }
      &.last-child{
        margin-right:0;
       }

  }
  &.star-48{
  .star-item{
    width: 24px;
    height: 24px;
    margin-right:24px;
  }

   }
   &.star-36{
    .star-item{
      width: 15px;
      height: 15px;
      margin-right:6px;
    }

    }
    &.star-24{
    .star-item{
       width: 10px;
       height: 10px;
       margin-right:3px;
     }
     }
}
</style>
