// Dependencies
const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// Middleware
app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})

// Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  