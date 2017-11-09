const express = require('express')
const router = express.Route()

router.get('/', require('./../services/main'))

module.exports = router