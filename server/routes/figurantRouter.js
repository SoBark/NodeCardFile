const Router = require('express')
const router = new Router()
const figurantController = require('../controllers/figurantController')

router.post('/', figurantController.create)
router.get('/',figurantController.getAll)
//router.get('/:id',)


module.exports = router