const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

//for pug template
router.get('/pug-shop', (req, res) => {
  res.render('shop', {prods: adminData.products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;
