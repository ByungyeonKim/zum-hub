const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/:url', (req, res) => {
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
        mainContents: $('div.article.d_article').html(),
        mediaName: $('#btn_media').text(),
      };

      return data;
    })
    .then((result) => res.send(result))
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
