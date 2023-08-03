var path = require('path')


//module exports ve sağında yazılan isim app.js'de alınan isim oluyor.
//ve exports'un sağına yazılan isim ile app.js'te bir fonksiyono larak kullanabiliriz.
// export etmemizin sebebi ise diğer dosyada kullanabilmek içindir.
module.exports.index = function(req, res) {
    console.log('seLAMSSS')
    res.sendFile(path.join(__dirname, 'index.html'))
}

module.exports.computers = function(req, res) {
    res.sendFile(path.join(__dirname, 'login.html'))
}



