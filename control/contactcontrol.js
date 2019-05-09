let models = require('../models/contactSchema')

  exports.postSend = function(req, res, next){
    res.render('others/message', { title: 'Express' })

    console.log(req.body)
    let Contact = {
      Names: req.body.name,
      PhoneNumbers: req.body.phoneNumber,
      Emails: req.body.email,
      Feedbacks: req.body.feedback,
      Messages: req.body.message,
    }
    let data = new models(Contact);
    data.save();
};