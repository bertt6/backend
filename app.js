var http = require('http');
var fs = require('fs');
var express = require('express')
var path = require('path')

var app = express()

//Public dosyasını erişirebilir hale getiriyor.
//path.join(__dirname, 'public') -> /Users/macos/Desktop/nodejs + /public
app.use('/public', express.static(path.join(__dirname, 'public')))

//localhost:8000 portunda ilk açılacak yer
app.get('/', function(req, res) {
    fs.readFile('index.html', function(err, data){
        res.write(data);
        res.end('Mesaj bitti!');
    });
});

//localhost:8000/login 
app.get('/login', function(req, res) {
    fs.readFile('login.html', function(err, data){
        res.write(data);
        res.end('Mesaj bitti!');
    });
});

app.listen(8000);
