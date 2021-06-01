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
