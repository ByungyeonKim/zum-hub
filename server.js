const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/api/router');

app.use('/api', router);
app.use(express.static('public'));

app.listen(port, () =>
  console.log(`zum_hub의 서버가 http://localhost:${port}에 열렸습니다. 🌿`)
);
