const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line
require('./views/coc/current/stencil-1/_routes.js')(router);

/* === Main journey routes === */

// Help with travel
router.post('/apply/main/help-with-travel-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const helpWanted = req.session.data['helpWanted']

  if (helpWanted === 'no') {
    res.redirect('/apply/main/work-impact')
  } else {
    res.redirect('/apply/main/car-lift-or-taxi')
  }
})

// Work impact
router.post('/apply/main/work-impact-answer', function (req, res) {

  const jobHarder = req.session.data['jobHarder']

  if (jobHarder === 'no') {
    res.redirect('/apply/main/not-eligible')
  } else {
    res.redirect('/apply/main/job-status')
  }
})

// Job status
router.post('/apply/main/job-status-answer', function (req, res) {

  const howEmployed = req.session.data['howEmployed']

  if (howEmployed === 'employed') {
    res.redirect('/apply/main/employed')
  } else if (howEmployed === 'selfEmployed') {
    res.redirect('/apply/main/self-employed')
  } else {
    res.redirect('/apply/main/company-director')
  }
})


/* === Contact routes === */

// Who to contact
router.post('/apply/contact/who-contact-answer', function (req, res) {

  const whoToContact = req.session.data['whoToContact']

  if (whoToContact === 'Me') {
    res.redirect('/apply/contact/best-way-contact')
  } else {
    res.redirect('/apply/contact/representative')
  }
})

// Best way to contact
router.post('/apply/contact/best-way-contact-answer', function (req, res) {

  const bestWayContact = req.session.data['bestWayContact']

  if (bestWayContact === 'Email') {
    res.redirect('/apply/contact/email')
  } else {
    res.redirect('/apply/contact/phone')
  }
})

// Phone yes or no
router.post('/apply/contact/option-phone-answer', function (req, res) {

  const optionPhone = req.session.data['optionPhone']

  if (optionPhone === 'Yes') {
    res.redirect('/apply/contact/phone-2')
  } else {
    res.redirect('/apply/contact/check-your-answers')
  }
})


/* === Contact2 routes === */

// Who to contact
router.post('/contact2/who-contact-answer', function (req, res) {

  const whoToContact2 = req.session.data['whoToContact2']

  if (whoToContact2 === 'Me') {
    res.redirect('/contact2/your-email')
  } else {
    res.redirect('/contact2/representative')
  }
})

module.exports = router
