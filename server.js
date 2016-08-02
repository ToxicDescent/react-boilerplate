const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.dev.config');
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname + 'dist')));

app.get('*', function response(request, response) {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', function onStart(error) {
  if(error) {
    console.error(error);
  } else {
    console.info('Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
  }
});
