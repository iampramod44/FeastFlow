const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

const menuController = require("../controllers/menuControllers");

// get all menu items

router.get("/", menuController.getAllMenuItems);

//post menu item
router.post("/", menuController.postMenuItem);

//delet a menu item
router.delete("/:id", menuController.deleteMenuItem);

//get single menu item
router.get("/:id", menuController.singleMenuItem);

module.exports = router;
