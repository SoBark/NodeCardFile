const Router = require('express')
const router = new Router()
const logController = require('../controllers/logController')

router.post('/',logController.create)
router.get('/',logController.getAll)
//router.get('/:id',)


module.exports = router