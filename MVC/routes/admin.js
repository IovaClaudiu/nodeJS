const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

// /add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /products => GET
router.get("/products", adminController.getProducts);

// /add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
