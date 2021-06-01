# Access to Work prototypes
Handover to future Interaction designers/anyone using the prototype.


## Session data
Learned from Craig Abbott and Vicky Teinaki. Made code changes to server.js and config.js has allowed data entered into the prototype locally to be viewable real time in the terminal/command line window. This is useful to check if something is isn’t working and why.

--- In server.js:
-After
var useDocumentation = (config.useDocumentation === 'true')

Add
// logging
var useLogging = config.useLogging



-Then before
//Clear all data in session if you open /prototype-admin/clear-data

Add
// Logging session data
 if (useLogging !== 'false') {
  app.use((req, res, next) => {
    const all = (useLogging === 'true')
    const post = (useLogging === 'post' && req.method === 'POST')
    const get = (useLogging === 'get' && req.method === 'GET')
    if (all || post || get) {
      const log = {
        method: req.method,
        url: req.originalUrl,
        data: req.session.data
      }
      console.log(JSON.stringify(log, null, 2))
    }
    next()
  })
}


---In app/config.js and at the last line
Add
// Enable logging, options: true, false, get or post
  useLogging: 'true'

## Radio Button Redirect

Installed radioButtonRedirect package  https://github.com/abbott567/radio-button-redirect

You can tell the prototype to redirect to a page if a radio button is selected by adding a tilde(~) to the value in the HTML.

For example, the following code would cause the application to redirect to /page1 if the Yes radio button was selected:

<input class="govuk-radios__input" name="test" type="radio" value="yes~/page1">

The tilde(~) and the link are not stored in the session. So if you called {{data.test}} in the view it will only contain the value of yes, not yes~/page1.

If you don't add a tilde(~) nothing changes and everything just defaults to the original prototype kit behaviour.
