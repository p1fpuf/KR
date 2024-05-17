const Router = require('express')
const router = new Router()
const workerController = require('../controllers/workerController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/login', workerController.login)
router.post('/registration',checkRoleMiddleware('OWNER'), workerController.registration)
router.get('/auth',authMiddleware, workerController.auth)
router.post('/logout', workerController.logout)
router.post('/deleteWorker', workerController.deleteWorker)
router.get('/allWorkers', checkRoleMiddleware('OWNER'), workerController.allWorkers)

module.exports = router