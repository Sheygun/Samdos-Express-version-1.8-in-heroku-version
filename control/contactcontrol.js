let models = require('../models/contactSchema')
let tutorList = require('../models/tutorDatabase')
let dev = require('../models/devDatabase')

  exports.preSend = function(req, res, next){
    res.render('others/message', { title: 'Express' })
  };

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
    let data = new models(Contact)
    data.save()
    // res.redirect('/contact')
    // console.log('successful')
};

exports.tutor = function(req, res, next){
  res.render('others/tutorform', { title: 'Express' })

  console.log(req.body)
  let Students = {
    StudentNames: req.body.studentName,
    StudentPhoneNumbers: req.body.StudentPhoneNumber,
    StudentEmails: req.body.StudentEmail,
    Address: req.body.StudentAddress,
    Gender: req.body.gender,
    Faculty: req.body.StudentFaculty,
    Dept: req.body.StudentDept,
    Level: req.body.StudentLevel,
    Course: req.body.StudentCourse,
    Classes: req.body.classes,
    Days: req.body.days,
    classTime: req.body.classTime
  }
  let data = new tutorList(Students);
  data.save();
};

exports.postDev = function(req, res, next){
  res.render('others/developer', { title: 'Express' })

  console.log(req.body)
  let developer = {
    Name: req.body.devName,
    PhoneNumber: req.body.devPhone,
    Email: req.body.devEmail,
    Address: req.body.devAddress,
    Gender: req.body.devGender,
    DevType: req.body.devType,
    Duration: req.body.devDuration,
    Quality: req.body.devQuality,
    Learn: req.body.devLearn
  }
  let data = new dev(developer);
  data.save();
};