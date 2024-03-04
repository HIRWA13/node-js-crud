const express = require('express')

// get route handlers
const itemRoutes = require('../controller/itemHandlers')

const router = express.Router()

router.get('/items', itemRoutes.items_get)

router.post('/items', itemRoutes.item_create_post)

module.exports = router