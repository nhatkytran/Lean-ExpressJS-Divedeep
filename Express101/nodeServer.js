const http = require('http');
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'node.html'));
const image = fs.readFileSync(path.join(__dirname, 'nodejs.png'));
const styles = fs.readFileSync(path.join(__dirname, 'styles.css'));

const createResponse = (res, headerOptions, body) => {
  res.writeHead(...headerOptions);
  res.write(body);
  res.end();
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    createResponse(
      res,
      [
        200,
        {
          'Content-Type': 'text/html',
        },
      ],
      data
    );
  } else if (req.url === '/styles.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css',
    });
    res.write(styles);
    res.end();
  } else if (req.url === '/nodejs.png') {
    res.writeHead(200, {
      'Content-Type': 'image/png',
    });
    res.write(image);
    res.end();
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });
    res.write('<h1>Page not found!</h1>');
    res.end();
  }
});

server.listen(3000);
