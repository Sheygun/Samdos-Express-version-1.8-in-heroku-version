const express = require('express')
const router = express.Router()
const Controller = require('../control/contactcontrol');


router.get('/', (req, res) => res.render('index'))

 // ======================= index section ================================

 router.get('/timetable', function(req, res) {
    res.render('timetable', { title: 'Express' })
  })

  router.get('/scholarship', function(req, res) {
    res.render('scholarship', { title: 'Express' })
  })

  router.get('/event', function(req, res) {
    res.render('event', { title: 'Express' })
  })

  router.get('/solution', function(req, res) {
    res.render('solution', { title: 'Express' })
  })

  // =================================== others folder =================================
  router.get('/test260219', function(req, res) {
    res.render('others/toyintest260219', { title: 'Express' })
  })

  router.get('/contact', function(req, res) {
    res.render('others/contact', { title: 'Express' })
  })

  router.get('/advertise', function(req, res) {
    res.render('others/advertise', { title: 'Express' })
  })

  router.get('/terms', function(req, res) {
    res.render('others/terms', { title: 'Express' })
  })

  router.get('/message', function(req, res) {
    res.render('others/message', { title: 'Express' })
  })

  router.post('/send', Controller.postSend)

  router.get('/tutorform', function(req, res) {
    res.render('others/tutorform', { title: 'Express' })
  })
  router.post('/tutor', Controller.tutor)
// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

  // =============================== Computer Science ===========================
  router.get('/csclevel1', function(req, res, next) {
    res.render('pastquestions/science/computer/100level', {})
  })

  router.get('/csclevel2', function(req, res, next) {
    res.render('pastquestions/science/computer/200level', {})
  })

  router.get('/csclevel3', function(req, res, next) {
    res.render('pastquestions/science/computer/300level', {})
  })

  router.get('/csclevel4', function(req, res, next) {
    res.render('pastquestions/science/computer/400level', {})
  })

  router.get('/csclevel5', function(req, res, next) {
    res.render('pastquestions/science/computer/500level', {})
  })
  // router.get('/cscothers', function(req, res, next) {
  //   res.render('pastquestions/science/computer/others', {
  //   others: 'Express'
  //   })
  // })


  // =============================== Mathematics ===========================
  router.get('/matlevel1', function(req, res, next) {
    res.render('pastquestions/science/maths/100level', {  })
  })

  router.get('/matlevel2', function(req, res, next) {
    res.render('pastquestions/science/maths/200level', {  })
  })

  router.get('/matlevel3', function(req, res, next) {
    res.render('pastquestions/science/maths/300level', {  })
  })

  router.get('/matlevel4', function(req, res, next) {
    res.render('pastquestions/science/maths/400level', {  })
  })

  router.get('/matlevel5', function(req, res, next) {
    res.render('pastquestions/science/maths/500level', {  })
  })

  // =============================== Biochemistry ===========================
  router.get('/bchlevel1', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/100level', {  })
  })

  router.get('/bchlevel2', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/200level', {  })
  })

  router.get('/bchlevel3', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/300level', {  })
  })

  router.get('/bchlevel4', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/400level', {  })
  })

  router.get('/bchlevel5', function(req, res, next) {
    res.render('pastquestions/science/biochemistry/500level', {  })
  })


  // =============================== Physics ===========================
  router.get('/phylevel1', function(req, res, next) {
    res.render('pastquestions/science/physics/100level', {  })
  })

  router.get('/phylevel2', function(req, res, next) {
    res.render('pastquestions/science/physics/200level', {  })
  })

  router.get('/phylevel3', function(req, res, next) {
    res.render('pastquestions/science/physics/300level', {  })
  })

  router.get('/phylevel4', function(req, res, next) {
    res.render('pastquestions/science/physics/400level', {  })
  })

  router.get('/phylevel5', function(req, res, next) {
    res.render('pastquestions/science/physics/500level', {  })
  })


  // =============================== Zoology ===========================
  router.get('/zoolevel1', function(req, res, next) {
    res.render('pastquestions/science/zoology/100level', {  })
  })

  router.get('/zoolevel2', function(req, res, next) {
    res.render('pastquestions/science/zoology/200level', {  })
  })

  router.get('/zoolevel3', function(req, res, next) {
    res.render('pastquestions/science/zoology/300level', {  })
  })

  router.get('/zoolevel4', function(req, res, next) {
    res.render('pastquestions/science/zoology/400level', {  })
  })

  router.get('/zoolevel5', function(req, res, next) {
    res.render('pastquestions/science/zoology/500level', {  })
  })


  // =============================== Botany ===========================
  router.get('/botlevel1', function(req, res, next) {
    res.render('pastquestions/science/botany/100level', {  })
  })

  router.get('/botlevel2', function(req, res, next) {
    res.render('pastquestions/science/botany/200level', {  })
  })

  router.get('/botlevel3', function(req, res, next) {
    res.render('pastquestions/science/botany/300level', {  })
  })

  router.get('/botlevel4', function(req, res, next) {
    res.render('pastquestions/science/botany/400level', {  })
  })

  router.get('/botlevel5', function(req, res, next) {
    res.render('pastquestions/science/botany/500level', {  })
  })


  // =============================== Fishery ===========================
  router.get('/fislevel1', function(req, res, next) {
    res.render('pastquestions/science/fishery/100level', {  })
  })

  router.get('/fislevel2', function(req, res, next) {
    res.render('pastquestions/science/fishery/200level', {  })
  })

  router.get('/fislevel3', function(req, res, next) {
    res.render('pastquestions/science/fishery/300level', {  })
  })

  router.get('/fislevel4', function(req, res, next) {
    res.render('pastquestions/science/fishery/400level', {  })
  })

  router.get('/fislevel5', function(req, res, next) {
    res.render('pastquestions/science/fishery/500level', {  })
  })


  // =============================== MicroBiology ===========================
  router.get('/mcblevel1', function(req, res, next) {
    res.render('pastquestions/science/microbiology/100level', {  })
  })

  router.get('/mcblevel2', function(req, res, next) {
    res.render('pastquestions/science/microbiology/200level', {  })
  })

  router.get('/mcblevel3', function(req, res, next) {
    res.render('pastquestions/science/microbiology/300level', {  })
  })

  router.get('/mcblevel4', function(req, res, next) {
    res.render('pastquestions/science/microbiology/400level', {  })
  })

  router.get('/mcblevel5', function(req, res, next) {
    res.render('pastquestions/science/microbiology/500level', {  })
  })

  // =============================== Fishery ===========================
  router.get('/chmlevel1', function(req, res, next) {
    res.render('pastquestions/science/chemistry/100level', {  })
  })

  router.get('/chmlevel2', function(req, res, next) {
    res.render('pastquestions/science/chemistry/200level', {  })
  })

  router.get('/chmlevel3', function(req, res, next) {
    res.render('pastquestions/science/chemistry/300level', {  })
  })

  router.get('/chmlevel4', function(req, res, next) {
    res.render('pastquestions/science/chemistry/400level', {  })
  })

  router.get('/chmlevel5', function(req, res, next) {
    res.render('pastquestions/science/chemistry/500level', {  })
  })

  // =============================== GENERAL STUDIES ===================================================================================== ===========================
  router.get('/gnslevel1', function(req, res, next) {
    res.render('pastquestions/general/100level', {  })
  })

  router.get('/gnslevel2', function(req, res, next) {
    res.render('pastquestions/general/200level', {  })
  })

  router.get('/gnslevel3', function(req, res, next) {
    res.render('pastquestions/general/300level', {  })
  })



module.exports = router;