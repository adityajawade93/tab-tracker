const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const app = express()
app.use(logger('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.json({
    message: `Hello ${req.body.email} new user was registered`
  })
})

app.listen(process.env.PORT || 8081)
