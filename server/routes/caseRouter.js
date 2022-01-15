const Router = require('express')
const router = new Router()
const CaseController = require('../controllers/caseController')

router.post('/',CaseController.create)
router.get('/',CaseController.getAll)
router.get('/:id',CaseController.getOne)

module.exports = router