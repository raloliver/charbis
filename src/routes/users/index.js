const express = require('express')
const router = express.Router()

router.get('/', require('./../../services/users/index'))
router.get('/new', require('./../../services/users/add'))
router.get('/edit/:id', require('./../../services/users/edit'))
router.get('/:id', require('./../../services/users/read'))

router.post('', require('./../../services/users/create'))
router.put('/:id', require('./../../services/users/update'))
router.patch('/:id', require('./../../services/users/update'))
router.delete('/:id', require('./../../services/users/delete'))

module.exports = router