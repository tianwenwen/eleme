var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

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
// apiRoutes.route('/:apiName').all(function(req,res){
//   fs.readFile('../data.json','utf-8',function(err,data){
//     if(err) throw err;
//     if(data[req.params.apiName]){
//       res.json(data[req.params.apiName])
//     }else{
//       res.send('no such api name')
//     }
//   })
// });
app.use('/api',apiRoutes);

app.use(express.static('./dist'));

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})
console.log('> Starting dev server...***********************');

var server = app.listen(port);
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
