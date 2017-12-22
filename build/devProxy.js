var express = require('express');

var app = express();
var router = express.Router();

router.get('/',function(req,res,next){
  req.url = '/index.html';
  next();
});

app.use(router);
var appData = require('./data.json');
console.log("获取本地数据");
var apiRoutes = express.Router();

apiRoutes.get('/goods',function(req,res){
  res.json({
    status:200,
    data:appData.goods
  })
});
apiRoutes.get('/ratings',function(req,res){
  res.json({
    status:200,
    data:appData.ratings
  })
});
apiRoutes.get('/seller',function(req,res){
  res.json({
    status:200,
    data:appData.seller
  })
});
app.use('/api',apiRoutes);


