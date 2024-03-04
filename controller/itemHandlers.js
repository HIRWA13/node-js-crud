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

const item_create_post = (req, res, next) => {
    const item = new Item(req.body);
    item
      .save()
      .then((result) => {
         res.redirect('/items/create')
      })
      .catch((err) => {
        console.log(err);
      });
};

const item_delete = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id)
      .then((result) => res.json({ item: result, id}))
      .catch((err) => console.log(err));
}

const item_update = (req, res) => {
    const id = req.params.id;
    const isComplete = !req.body.isComplete;
    Item.findByIdAndUpdate(id, { isComplete }, { new: true })
        .then((result) => res.json({ item: result, id , title: 'All items'}))
        .catch((err) => console.log(err));
}

module.exports = {
  items_get,
  item_create_post,
  item_delete,
  item_update
};
