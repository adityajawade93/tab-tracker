const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(logger('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`server is listening on port ${config.port}`)
  })
