const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Index
breads.get('/', (req, res) => {
  res.render('index',
    {
      breads: Bread
    }
  )
//  res.send(bread)
})

// Show
breads.get('/:arrayIndex', (req, res) => {
    res.send(bread[req.params.arrayIndex])
  })
  
module.exports = breads

