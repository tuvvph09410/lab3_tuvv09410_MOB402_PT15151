var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var path = req.url;
    console.log(path);
    if (path.match('them')) {
        var data="day la cau lenh tao file";
        fs.writeFile('index.txt',data,function (err,data) {
        res.end('ghi thanh cong file index!!!');

        })
    } else if(path.match('update')){
        var data='Du lieu moi';
        fs.writeFile('index.txt',data,function (err,data) {
        res.end('Ghi de thanh cong!!!');
        })
        fs.appendFile('index.txt',data,function (err,data) {

        })
    }else if (path.match('rename')){
        fs.rename('index.txt','tenmoi.txt',function (orr,data) {
        res.end('doi ten moi thanh cong !!!');
        })
    }else if (path.match('delete')){
        fs.unlink('index.txt',function (orr,data) {
            res.end('delete thanh cong , check lai!!');
        })
    }
    else {
        fs.readFile('index.html', 'utf8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();

        });
    }

}).listen(1090);