const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Home
router.get("/home", shopController.renderHomePage);
router.post("/home", shopController.handleUpload);

// Product
router.get("/product/:category/:id", shopController.renderProductPage);

// About
router.get("/about", shopController.renderAboutPage);

// Login
router.get("/login", shopController.renderLoginPage);
router.post("/my-form-handler", shopController.handleAdminAccount);
router.get("/my-form-handler", shopController.handleTest);
module.exports = router;

// Shopping Cart 
router.get("/shopcart", shopController.renderShoppingCartPage);
router.post("/my-form-handler", shopController.handleAdminAccount);
router.get("/my-form-handler", shopController.handleTest);
module.exports = router;
