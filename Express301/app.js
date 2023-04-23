const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const app = express();

app.use(cors());
app.options('*', cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('Cookie is so delicious'));

app.use(compression());

app.get('/', (req, res, next) => {
  res.render('login');
});

app.get('/login', (req, res) => {
  console.log(req.secure);
  console.log(req.headers['x-forwarded-proto']);
  console.log(req.signedCookies);

  res.status(200).json({
    status: 'success',
    message: 'Login successfully!',
  });
});

app.post('/login', (req, res, next) => {
  console.log(req.body);

  res.cookie('passport', 123123123, {
    // maxAge: 10000,
    expires: new Date(Date.now() + 100 * 1000),
    httpOnly: true,
    signed: true,
  });

  res.redirect(303, '/login');
});

app.all('/cool', (req, res, next) => {
  console.log('1');

  res.send('Hello beautiful World!');
});
app.get('/cool', (req, res, next) => {
  console.log('2');
});

app.listen(3000);
