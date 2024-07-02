const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const server = http.createServer((req, res) => {
  console.log(`Received request for URL: ${req.url}`);

  let filePath;
  switch (req.url) {
    case '/about':
      filePath = path.join(__dirname, 'views', 'about.html');
      break;
    case '/contact':
      filePath = path.join(__dirname, 'views', 'contact.html');
      break;
    case '/products':
      filePath = path.join(__dirname, 'views', 'products.html');
      break;
    case '/subscribe':
      filePath = path.join(__dirname, 'views', 'subscribe.html');
      break;
    case '/':
      filePath = path.join(__dirname, 'views', 'index.html');
      break;
    default:
      filePath = null;
  }

  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});