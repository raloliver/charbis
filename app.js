const express = require('express')
const path = require('path')

const app = express()
const env = path.join(__dirname, './src/configs/env', process.env.NODE_ENV || 'development')

module.exports = {
    app: app,
    env: env
}
require('./src')

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server starts on port: ${app.get('port')} & at host: ${app.get('host')}`)
})