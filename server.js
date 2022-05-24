var http = require('http');
var fs = require('fs');
var url = require('url');  // 소스삽입. 

const app = http.createServer((request, response) => {
   var _url = request.url;
   var queryData = url.parse(_url, true).query; // 소스 삽입. 
   console.log(queryData);
   console.log(_url);

   switch (_url) {
      case '/':
         _url = '/index.html';
         break;
      case '/favicon.ico':
         response.writeHead(404);
         response.end();
         break;
      default:
         _url = '/index.html';
         break;
   };
   response.writeHead(200);
   response.end(fs.readFileSync(__dirname + _url)); // __dirname은 새로운 페이지를 요청할 때마다 읽어야할 파일위치를 반환해줌. 
});
app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');