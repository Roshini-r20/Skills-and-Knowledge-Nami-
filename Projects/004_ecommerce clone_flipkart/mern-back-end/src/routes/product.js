const express = require("express");
const {createProduct} = require("../controller/product");
//const Category= require('../models/category');
const { requireSignin, adminMiddleware } = require("../common-middleware");
const multer = require('multer');
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    }
  })

  const upload=multer({storage});


router.post('/product/create',requireSignin, adminMiddleware, upload.single('productPicture'), createProduct);
//router.get('/product/getproduct',getCategories);

module.exports = router;