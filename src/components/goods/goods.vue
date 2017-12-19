<template>
    <div class="goods clearfix">
      <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li v-for="(item,index) in goods" class="menu-item"  :class="{'active':currentIndex === index}"
                @click="changeIndex(index,$event)">
              <span class="text">
                <span v-show="item.type<0">R</span>{{item.name}}</span>
            </li>
          </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <img src="" alt="">
                <div class="cont">
                  <span class="name">{{food.name}}</span>
                  <span class="des">{{food.info}}</span>
                  <div class="extra">
                      <span>月销{{food.sellCount}}</span>
                      <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="newPrice">￥{{food.price}}</span>
                    <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <show-cart :data="carData"></show-cart>
    </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import SHOWCART from '@/components/shopcart/shopcart'
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data:function(){
        return{
          carData:{
            price:12
          },
          listHeight:[],
          scrollY:0,
          goods:[
            {
              "name":"热销榜",
              "type":-1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"尝鲜榜",
              "type":1,
              "foods":[
                {
                  "name":"鲜奶牛乳",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"经典榜",
              "type":1,
              "foods":[
                {
                  "name":"23皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"单人套餐实惠",
              "type":1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"经典榜",
              "type":1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"经典榜",
              "type":1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"经典榜",
              "type":1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"经典榜",
              "type":1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            },
            {
              "name":"经典榜",
              "type":1,
              "foods":[
                {
                  "name":"皮蛋瘦肉粥",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"蒜蓉大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"油焖大虾",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                },
                {
                  "name":"酸辣土豆丝",
                  "price":10,
                  "oldPrice":13,
                  "sellCount":218,
                  "rating":100,
                  "info":"皮蛋瘦肉粥美容养颜",
                  "ratings":[
                    {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }, {
                      "username":"vivan",
                      "rateTime":"22222",
                      "rateType":0,
                      "text":"很喜欢的",
                      "avatar":""
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      components:{
        showCart:SHOWCART
      },
      mounted:function(){
        this.$nextTick(function(){
          this._initScroll();
          this._calculateHeight();
        })

      },
      computed:{
        currentIndex(){
          for(let i = 0; i < this.listHeight.length; i++){
            let height =  this.listHeight[i];
            let height2 = this.listHeight[i+1];
            if(!height2 || (this.scrollY >=height && this.scrollY <height2)){
              return i;
            }
          }
          return 0;
        }
      },
      methods:{
        changeIndex(index,event){
          if(!event._constructed){//浏览器原生false
            return;
          }
          let footList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
          this.foodsScroll.scrollToElement(footList[index],300);
          this.scrollY = this.listHeight[index];
;
        },
        _initScroll() {
          var _self = this;
          this.menuScroll = new BScroll(this.$refs.menuWrapper,{
            click:true
          });
          this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
            probeType:3
          })
          this.foodsScroll.on('scroll',function(pos){
            _self.scrollY = Math.abs(Math.round(pos.y));
          })
        },
        _calculateHeight() {
//          listHeight

          let footList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
          let height = 0;
          this.listHeight.push(height);
          for(let i =0 ; i < footList.length; i++){
            let item = footList[i];
            height += item.clientHeight;
            this.listHeight.push(height);
          }


        }
      }
    }

</script>
<style lang="less" scoped>
  .goods{
    position:absolute;
    width: 100%;
    top:260px;
    bottom:46px;
    display: flex;
    overflow: hidden;

  }
  .menu-wrapper{
    width:80px;
    flex:0 0 80px;
    background:#f3f5f7;
  }
  .foods-wrapper{
    flex:1;
    .title{
      padding-left:16px;
      font-size:12px;
      border-left:2px solid #ddd9e1;
      height: 26px;
      line-height:26px;
      background:#F3F5F7;
    }
    .food-item{
      width: 100%;
      margin-bottom:26px;
      border-bottom:1px solid #CCC;
      display:flex;
      padding-bottom:18px;
      &:last-child{
        border-bottom:none;
       }
       img{
         width: 80px;
         height: 80px;
         border:1px solid #ddd9e1;
         margin-right:10px;
       }
      .cont{
        flex:1;
        text-align: left;
        .name{
          font-size:14px;
          height: 14px;
          line-height:14px;
          margin:8px 2px;
          color:rgb(7,17,27);
          display: block;
        }
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
  }
  .menu-item{
    line-height:14px;
    font-size:12px;
    height:54px;
    width: 56px;
    display: table;
    border-bottom:1px solid #FFF;
    padding:0 12px;
    &.active{
    background:#FFF;
    position:relative;
    margin-top:-1px;
    z-index:10;
    font-weight: 700;
    .text{
      border-bottom: none;
    }
     }
     &:last-child{
    border-bottom: none;
      }
     .text{
       font-size:12px;
       vertical-align: middle;
       width: 56px;
       display: table-cell;
     }
  }
</style>
