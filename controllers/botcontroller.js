var mongoose = require('mongoose')
var User = mongoose.model('User')

exports.processRequest = function(req, res){
    if(req.body.queryResult.action == 'nameOfCustomer'){
        creatingUser(req, res)
    }
    if(req.body.queryResult.action == 'booking'){
        doBooking(req,res)
    }
    if(req.body.queryResult.action == 'booking.booking-date'){
        booking(req, res)
    }
}



function creatingUser(req, res){
    var username = {
        username : req.body.queryResult.parameters.given-name,
        bookingDone : false,
        bookingDate : Date.now
    }


    User.create(username, function(err, newUser){
        if(err){
            return res.JSON({
                speech: 'Something went wrong!',
                displayText: 'Something went wrong!',
                
            });
        }else{
            return res.JSON({
                "simpleResponses": {
                    "simpleResponses": [
                      {
                        "textToSpeech": "Hello " + req.body.queryResult.parameters.given-name +". How May I assist You ?"
                      }
                    ]
                  },

                  "suggestions": {
                    "suggestions": [
                      {
                        "title": "Book A Table"
                      },
                      {
                        "title": "Show Menu"
                      },
                      {
                        "title": "Cancel Booking"
                      }
                    ]
                  }
            })
        }
})

}

function doBooking(req,res){
    return res.JSON({
        "simpleResponses": {
            "simpleResponses": [
              {
                "textToSpeech": "Sure , Can You tell me the when to do booking?"
              }
            ]
          }
    })
}

function booking(req, res){
    var neU = {
        bookingDone : true,
        bookingDate : currentDate.getDate() + 1
    }

    id = User._id

    User.findByIdAndUpdate(id, neU, function(err , newUser){
        if(err){
            return res.JSON({
                speech: 'Something went wrong!',
                displayText: 'Something went wrong!',
                
            });
        }else{
            return res.JSON({
                "simpleResponses": {
                    "simpleResponses": [
                      {
                        "textToSpeech": "Booking Confirmed , See you at restaurant."
                      }
                    ]
                  }

            })
        }
    } )

    
    


}