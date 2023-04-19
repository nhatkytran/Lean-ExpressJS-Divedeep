const express = require('express');
const app = express();

app.all('*', (req, res) => {
  res.send('<h1>Hello beautiful World!</h1>');
});

app.listen(3000);
