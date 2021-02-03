var express = require('express');

var app = express();

(function () {
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath
      
    })
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {})
  );
})();


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(1616, "localhost");