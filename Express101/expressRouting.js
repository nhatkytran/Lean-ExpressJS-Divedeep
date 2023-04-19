const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>Get</h1>');
});

app.get('/nodejs', (req, res) => {
  res.sendFile(path.join(__dirname, 'node.html'));
});

app.all('*', (req, res) => {
  res.send('<h1>All</h1>');
});

app.listen(3000);
