const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


/* === Main journey routes === */

// Help with travel
router.post('/help-with-travel-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const helpWanted = req.session.data['helpWanted']

  if (helpWanted === 'no') {
    res.redirect('/work-impact')
  } else {
    res.redirect('/car-lift-or-taxi')
  }
})

// Work impact
router.post('/work-impact-answer', function (req, res) {

  const jobHarder = req.session.data['jobHarder']

  if (jobHarder === 'no') {
    res.redirect('/not-eligible')
  } else {
    res.redirect('/job-status')
  }
})

// Job status
router.post('/job-status-answer', function (req, res) {

  const howEmployed = req.session.data['howEmployed']

  if (howEmployed === 'employed') {
    res.redirect('/employed')
  } else if (howEmployed === 'selfEmployed') {
    res.redirect('/self-employed')
  } else {
    res.redirect('/company-director')
  }
})


/* === Contact routes === */

// Who to contact
router.post('/contact/who-contact-answer', function (req, res) {

  const whoToContact = req.session.data['whoToContact']

  if (whoToContact === 'Me') {
    res.redirect('/contact/best-way-contact')
  } else {
    res.redirect('/contact/representative')
  }
})

// Best way to contact
router.post('/contact/best-way-contact-answer', function (req, res) {

  const bestWayContact = req.session.data['bestWayContact']

  if (bestWayContact === 'Email') {
    res.redirect('/contact/email')
  } else {
    res.redirect('/contact/phone')
  }
})

// Phone yes or no
router.post('/contact/option-phone-answer', function (req, res) {

  const optionPhone = req.session.data['optionPhone']

  if (optionPhone === 'Yes') {
    res.redirect('/contact/phone-2')
  } else {
    res.redirect('/contact/check-your-answers')
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