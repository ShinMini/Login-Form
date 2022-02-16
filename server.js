const http = require('http');
const fs = require('fs');
const app = http.createServer((request, response) => {

   let url = request.url;

   if (request.url == '/') {
      url = '/index.html';
   }
   if (request.url == '/Main') {
      url = '/Page/Main.html'
   }
   if (request.url == '/favicon.ico') {
      return response.writeHead(404);
   }
   response.writeHead(200);
   response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000)
console.log('Server running at http://127.0.0.1:3000/');