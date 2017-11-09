const express = require('express')
const router = Express.Route()

router.get('/', require('./../services/main'))

module.exports = router