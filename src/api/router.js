const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

const fs = require('fs');

router.get('/best', (req, res) => {
  const best = JSON.parse(
    fs.readFileSync('./public/data/best.json', 'utf8')
  );

  res.json(best);
});

router.get('/content/:category', (req, res) => {
  const param = req.params.category;
  const category = JSON.parse(
    fs.readFileSync(`./public/data/${param}.json`, 'utf8')
  );

  res.json(category);
});

router.get('/detail/:url', (req, res) => {
  const getHtml = async () => {
    const url = req.params.url.replace(/ /g, '/');
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

module.exports = router;
