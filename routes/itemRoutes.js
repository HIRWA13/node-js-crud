const express = require('express')

// get route handlers
const itemRoutes = require('../controller/itemHandlers')

const router = express.Router()

router.get('/items', itemRoutes.items_get)

router.post('/items', itemRoutes.item_create_post)

router.get('/items/:id', itemRoutes.item_get_details)

router.delete('/items/:id', itemRoutes.item_delete)

router.patch('/items/:id', itemRoutes.item_update)

module.exports = router