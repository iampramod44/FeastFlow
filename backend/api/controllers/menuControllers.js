const Menu = require("../models/Menu");

const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find({}).sort({ createdAt: -1 });
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post a new menu item
const postMenuItem = async (req, res) => {
  const newItem = req.body;
  try {
    const result = await Menu.create(newItem);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a menu item
const deleteMenuItem = async (req, res) => {
  const menuId = req.params.id;
  try {
    const deleteItem = await Menu.findByIdAndDelete(menuId);
    if (!deleteItem) {
      return res.status(404).json({ message: "Menu not found" });
    }
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single menu item
const singleMenuItem = async (req, res) => {
   const menuId = req.params.id;
  try {
    const menu = await Menu.findById(menuId);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllMenuItems,
  postMenuItem,
  deleteMenuItem,
  singleMenuItem,
};
