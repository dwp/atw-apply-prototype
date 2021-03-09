const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


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

router.post('/contact/who-contact-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const whoToContact = req.session.data['whoToContact']

  if (whoToContact === 'Me') {
    res.redirect('/contact/best-way-contact')
  } else {
    res.redirect('/contact/representative')
  }
})


router.post('/contact/best-way-contact-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const bestWayContact = req.session.data['bestWayContact']

  if (bestWayContact === 'Email') {
    res.redirect('/contact/email')
  } else {
    res.redirect('/contact/phone')
  }
})

router.post('/contact/option-phone-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const optionPhone = req.session.data['optionPhone']

  if (optionPhone === 'Yes') {
    res.redirect('/contact/phone-2')
  } else {
    res.redirect('/contact/check-your-answers')
  }
})
module.exports = router
