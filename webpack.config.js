const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');
const apiMocker = require('connect-api-mocker');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  devServer: {
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    onBeforeSetupMiddleware: (devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server가 정의되지 않았습니다.');
      }

      devServer.app.get('/api/detail/:url', (req, res) => {
        const getHtml = async () => {
          const url = `https://hub.zum.com/${req.params.url.replace(
            / /g,
            '/'
          )}`;
          try {
            return await axios.get(url);
          } catch (error) {
            console.error(error);
          }
        };

        getHtml()
          .then((html) => {
            const $ = cheerio.load(html.data);
            const data = {
              title: $('div.article_header > div > div > h2').text(),
              category: $(
                'div.article_header > div > div > p.top > strong'
              ).html(),
              mainContents: $('div.article.d_article').html(),
              mediaName: $('#btn_media').text(),
            };

            return data;
          })
          .then((result) => res.send(result));
      });
      devServer.app.use(apiMocker('/api', 'mocks/api'));
    },
  },
  mode: 'development', // 개발 모드
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
};
