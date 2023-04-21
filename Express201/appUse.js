const express = require('express');
const app = express();

app.get('/', (req, res) => {
  req.app.locals.notice = "User request get on '/'";

  res.locals.data = 'Data';
  console.log(res.locals);

  res.status(200).json({
    status: 'success',
    message: 'Hello beautiful World!',
  });
});

app.get('/testing', (req, res) => {
  console.log(req.app.locals);

  res.status(200).json({
    status: 'success',
    message: 'Testing!',
  });
});

app.use('/use1', (req, res, next) => {
  req.use = 'Learn new things everyday!';

  next();
});

app.get('/use1', (req, res) => {
  console.log(req.use);

  res.send('<h1>Use1</h1>');
});

app.get('/use2', (req, res) => {
  console.log(req.use);

  res.send('<h1>Use2</h1>');
});

app.use('/user', (req, res, next) => {
  console.log('User1');
  next();
});
app.use('/user235/book', (req, res) => {
  console.log('User2');
  next();
});

app.all('/user', (req, res) => {
  res.send('<h1>User with app.all</h1>');
});

app.use(
  '/chain',
  (req, res, next) => {
    console.log('Chain1');
    next();
  },
  (req, res, next) => {
    console.log('Chain2');
    next();
  }
);

app.all(
  '/chain',
  (req, res, next) => {
    console.log('Chain3');
    next();
  },
  (req, res) => {
    console.log('Chain4');
    res.send('<h1>Chain</h1>');
  }
);

app.listen(3000);
