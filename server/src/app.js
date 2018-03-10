const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const app = express()
app.use(logger('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.listen(process.env.PORT || 8081)