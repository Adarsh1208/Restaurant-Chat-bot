'use strict'
var express = require('express')

module.exports = function(app){
    var botcontroller = require('../controllers/botcontroller')

    var apiroutes = express.Router()

    app.get('/', function(req, res){
        res.send('Hello')
    })

    app.route('/').post(botcontroller.processRequest)
}