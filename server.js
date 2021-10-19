const express = require('express');
const app = express();
const port = 3000;
const bestRouter = require('./src/api/best');
const categoryRouter = require('./src/api/category');

app.use('/api/best', bestRouter);
app.use('/api/content', categoryRouter);
app.use(express.static('public'));

app.listen(port, () =>
  console.log(`zum_hub의 서버가 http://localhost:${port}에 열렸습니다. 🌿`)
);
