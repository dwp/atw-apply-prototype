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


module.exports = router
