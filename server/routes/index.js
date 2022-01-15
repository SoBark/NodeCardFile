const Router = require('express')
const router = new Router()
const caseRouter = require('./caseRouter')
const figurantRouter = require('./figurantRouter')
const logRouter = require('./logRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/case',caseRouter)
router.use('/type',typeRouter)
router.use('/log',logRouter)
router.use('/figurant',figurantRouter)

module.exports = router