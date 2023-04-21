const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  console.log(req.body);

  res.status(200).json({
    status: 'success',
    message: 'Hello beautiful World!',
  });
});

app.get('/ip', (req, res) => {
  res.status(200).json({
    status: 'success',
    ip: req.ip,
  });
});

app.get(
  '/locals',
  (req, res, next) => {
    res.locals.data = { message: 'Hello beautiful World!' };
    next();
  },
  (req, res) => {
    console.log(res.locals.data);

    res.status(200).json({
      stastus: 'success',
      message: 'Hello beautiful World!',
    });
  }
);

app.listen(3000);
