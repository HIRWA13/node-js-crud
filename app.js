const express = require('express')
const mongoose = require('mongoose')
const itemsRouter = require('./routes/itemRoutes')
// require the .env
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('utils'))
app.use(express.urlencoded({ extended: true }))

const dbURI = process.env.DBURI

mongoose
  .connect(dbURI)
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));



app.get('/', (req, res) =>{
    res.redirect('/items')
})

app.get('/items/create', (req, res) => {
    res.render('items/create', { title: 'Create a new item'})
})

app.get('/about', (req, res) => {
  res.render('items/about', { title: 'About us'})
})

app.use(itemsRouter)