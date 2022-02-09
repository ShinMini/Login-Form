const http = require('http');

const app = http.createServer((req, res) => {
   let url = req.url;
   if(req.url == '/'){
      url = 'index.html';
   }
   if(req.url == '/favicon.ico'){
      return res.writeHead(404);
   }
   res.writeHead(200);
   res.end(fs.readFileSync(__dirname + url));
})
app.listen(3000);