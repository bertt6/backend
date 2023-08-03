var http = require('http');
var fs = require('fs');
var express = require('express')
var path = require('path')


var app = express()
var routerEtc = require('./app_server/routes/etcRouter')


app.use('/public', express.static(path.join(__dirname, 'public')));
//Public dosyasını erişirebilir hale getiriyor.
//path.join(__dirname, 'public') -> /Users/macos/Desktop/nodejs + /public

app.use('/electronics', routerEtc)

app.listen(8000);
