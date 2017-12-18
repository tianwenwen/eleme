<template>
    <div class="goods clearfix">
      <div class="menu-wrapper">
          <ul>
            <li v-for="(item,index) in goods" class="menu-item" @click="changeIndex(index)">
              <span class="text">
                <span v-show="item.type<0">R</span>{{item.name}}</span>
            </li>
          </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods" class="food-list">
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
    </div>
</template>
<script>
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data:function(){
        return{
          currentIndex:0,
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
      methods:{
        changeIndex:function(index){
          this.currentIndex = index;
          console.log(index);
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
    &.active,&:hover{
    background:#FFF;
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
