var express = require('express'),
bodyParser = require('body-parser'),
http = require('http'),
app = express(),
mongoose = require('mongoose'),
User = require('./models/user')

mongoose.connect('mongodb+srv://addy:addy123%40%23@chatbot-pyrij.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})


app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

var routes = require('./routes/routes')
routes(app)

app.listen((process.env.PORT || 8000), function(){
    console.log("Server is up and listening to port" + process.env.PORT)
})