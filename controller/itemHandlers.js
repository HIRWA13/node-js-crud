const Item = require("../models/items/item");

// get all items
const items_get = (req, res) => {
  Item.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("items/index", { items: result, title: "All items" });
    })
    .catch((err) => crossOriginIsolated.log(err));
};

// create a new item

const item_create_post = (req, res) => {
    const item = new Item(req.body);
    item
      .save()
      .then((result) => {
        res.redirect("/items");
      })
      .catch((err) => {
        console.log(err);
      });
};

module.exports = {
  item_create_post,
  items_get,
};
