var express = require('express')
var router = express.Router();
var controller = require('../controller/electronicControl')



//app.use('/electronics', routerEtc) bu kullanımdan sonra router zaten
// /electronics'e baktığı için tekrarardan router.get /electronics kullanırsak
// /electronics/electronics'i kontrol ettirmiş oluruz. Bundan dolayı alttaki satıra gerek duyulmamaktadır.
//router.get('/electronics', module.exports.index);
router.get('/', controller.index);

// app.js'te app.use('/electronics', routerEtc) bu kullanımdan sonra hala
// /electronic/computers yazmamıza gerek yok zaten /electronics içerisinde get işlevi çağırılıyor
router.get('/computers', controller.computers)

module.exports = router;