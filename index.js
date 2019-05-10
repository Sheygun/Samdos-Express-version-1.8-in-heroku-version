const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const { check, validationResult } = require('express-validator/check');
const path = require('path')
const PORT = process.env.PORT || 5000



express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // Body Parser Middleware
  .use(bodyParser.urlencoded({ extended: false}))
  .use(bodyParser.json())

  .get('/', (req, res) => res.render('index'))

  // ======================= index section ================================

  .get('/timetable', function(req, res) {
    res.render('timetable', { title: 'Express' })
  })

  .get('/scholarship', function(req, res) {
    res.render('scholarship', { title: 'Express' })
  })

  .get('/event', function(req, res) {
    res.render('event', { title: 'Express' })
  })

  .get('/solution', function(req, res) {
    res.render('solution', { title: 'Express' })
  })

// =================================== others folder =================================
  .get('/test260219', function(req, res) {
    res.render('others/toyintest260219', { title: 'Express' })
  })

  .get('/contact', function(req, res) {
    res.render('others/contact', { title: 'Express' })
  })

  .get('/advertise', function(req, res) {
    res.render('others/advertise', { title: 'Express' })
  })

  .get('/terms', function(req, res) {
    res.render('others/terms', { title: 'Express' })
  })

  .get('/message', function(req, res) {
    res.render('others/message', { title: 'Express' })
  })

  .post('/send', function(req, res, next) {
    res.render('others/message', { title: 'Express' })
      const output = '<center><h3>You have a new contact request</h3> </center> <br> <h2>Contact Details</h2> <br>' +
      '<ul>'+
        '<li>Name: '+req.body.name +' </li>'+
        '<li>Phone Number : '+req.body.phoneNumber +'</li>' +
        '<li>Email : '+ req.body.email + '</li>' +
        '<li>Feedback : '+ req.body.feedback + '</li> <br>' +
        '</ul>' +

        '<h2>Messages <br></h2>' +
        '<h4>' + req.body.message + '</h4>'



      let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
        auth: {
          user: 'hollasheg@gmail.com', // generated ethereal user
          pass: 'Oluwasegun12' // generated ethereal password
        },

        tls:{
          rejectUnauthorized: false
        }

      })


      let mailOptions = {
        from: req.body.name,
        to: '"hollasheg" <hollasheg@gmail.com>',
        subject: "Samdos Contact Request",
        text: req.body.message,
        html: output
      }


        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(err);
          } else{
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // res.redirect('/message')
          }
      })
  })



// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

  // =============================== Computer Science ===========================
  .get('/csclevel1', function(req, res, next) {
    res.render('pastquestions/science/computer/100level', {})
  })

  .get('/csclevel2', function(req, res, next) {
    res.render('pastquestions/science/computer/200level', {})
  })

  .get('/csclevel3', function(req, res, next) {
    res.render('pastquestions/science/computer/300level', {})
  })

  .get('/csclevel4', function(req, res, next) {
    res.render('pastquestions/science/computer/400level', {})
  })

  .get('/csclevel5', function(req, res, next) {
    res.render('pastquestions/science/computer/500level', {})
  })
  // .get('/cscothers', function(req, res, next) {
  //   res.render('pastquestions/science/computer/others', {
  //   others: 'Express'
  //   })
  // })


  // =============================== Mathematics ===========================
  .get('/matlevel1', function(req, res, next) {
    res.render('pastquestions/science/maths/100level', {  })
  })

  .get('/matlevel2', function(req, res, next) {
    res.render('pastquestions/science/maths/200level', {  })
  })

  .get('/matlevel3', function(req, res, next) {
    res.render('pastquestions/science/maths/300level', {  })
  })

  .get('/matlevel4', function(req, res, next) {
    res.render('pastquestions/science/maths/400level', {  })
  })

  .get('/matlevel5', function(req, res, next) {
    res.render('pastquestions/science/maths/500level', {  })
  })

  // =============================== Biochemistry ===========================
  .get('/bchlevel1', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/100level', {  })
  })

  .get('/bchlevel2', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/200level', {  })
  })

  .get('/bchlevel3', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/300level', {  })
  })

  .get('/bchlevel4', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/400level', {  })
  })

  .get('/bchlevel5', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/500level', {  })
  })


  // =============================== Physics ===========================
  .get('/phylevel1', function(req, res, next) {
    res.render('pastquestions/science/physics/100level', {  })
  })

  .get('/phylevel2', function(req, res, next) {
    res.render('pastquestions/science/physics/200level', {  })
  })

  .get('/phylevel3', function(req, res, next) {
    res.render('pastquestions/science/physics/300level', {  })
  })

  .get('/phylevel4', function(req, res, next) {
    res.render('pastquestions/science/physics/400level', {  })
  })

  .get('/phylevel5', function(req, res, next) {
    res.render('pastquestions/science/physics/500level', {  })
  })


  // =============================== Zoology ===========================
  .get('/zoolevel1', function(req, res, next) {
    res.render('pastquestions/science/zoology/100level', {  })
  })

  .get('/zoolevel2', function(req, res, next) {
    res.render('pastquestions/science/zoology/200level', {  })
  })

  .get('/zoolevel3', function(req, res, next) {
    res.render('pastquestions/science/zoology/300level', {  })
  })

  .get('/zoolevel4', function(req, res, next) {
    res.render('pastquestions/science/zoology/400level', {  })
  })

  .get('/zoolevel5', function(req, res, next) {
    res.render('pastquestions/science/zoology/500level', {  })
  })


  // =============================== Botany ===========================
  .get('/botlevel1', function(req, res, next) {
    res.render('pastquestions/science/botany/100level', {  })
  })

  .get('/botlevel2', function(req, res, next) {
    res.render('pastquestions/science/botany/200level', {  })
  })

  .get('/botlevel3', function(req, res, next) {
    res.render('pastquestions/science/botany/300level', {  })
  })

  .get('/botlevel4', function(req, res, next) {
    res.render('pastquestions/science/botany/400level', {  })
  })

  .get('/botlevel5', function(req, res, next) {
    res.render('pastquestions/science/botany/500level', {  })
  })


  // =============================== Fishery ===========================
  .get('/fislevel1', function(req, res, next) {
    res.render('pastquestions/science/fishery/100level', {  })
  })

  .get('/fislevel2', function(req, res, next) {
    res.render('pastquestions/science/fishery/200level', {  })
  })

  .get('/fislevel3', function(req, res, next) {
    res.render('pastquestions/science/fishery/300level', {  })
  })

  .get('/fislevel4', function(req, res, next) {
    res.render('pastquestions/science/fishery/400level', {  })
  })

  .get('/fislevel5', function(req, res, next) {
    res.render('pastquestions/science/fishery/500level', {  })
  })


  // =============================== MicroBiology ===========================
  .get('/mcblevel1', function(req, res, next) {
    res.render('pastquestions/science/microbiology/100level', {  })
  })

  .get('/mcblevel2', function(req, res, next) {
    res.render('pastquestions/science/microbiology/200level', {  })
  })

  .get('/mcblevel3', function(req, res, next) {
    res.render('pastquestions/science/microbiology/300level', {  })
  })

  .get('/mcblevel4', function(req, res, next) {
    res.render('pastquestions/science/microbiology/400level', {  })
  })

  .get('/mcblevel5', function(req, res, next) {
    res.render('pastquestions/science/microbiology/500level', {  })
  })

  // =============================== Fishery ===========================
  .get('/chmlevel1', function(req, res, next) {
    res.render('pastquestions/science/chemistry/100level', {  })
  })

  .get('/chmlevel2', function(req, res, next) {
    res.render('pastquestions/science/chemistry/200level', {  })
  })

  .get('/chmlevel3', function(req, res, next) {
    res.render('pastquestions/science/chemistry/300level', {  })
  })

  .get('/chmlevel4', function(req, res, next) {
    res.render('pastquestions/science/chemistry/400level', {  })
  })

  .get('/chmlevel5', function(req, res, next) {
    res.render('pastquestions/science/chemistry/500level', {  })
  })

  // =============================== GENERAL STUDIES ===================================================================================== ===========================
  .get('/gnslevel1', function(req, res, next) {
    res.render('pastquestions/general/100level', {  })
  })

  .get('/gnslevel2', function(req, res, next) {
    res.render('pastquestions/general/200level', {  })
  })

  .get('/gnslevel3', function(req, res, next) {
    res.render('pastquestions/general/300level', {  })
  })





  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
