const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


router.post('/addTraining', checkRoleMiddleware('ADMIN'), trainingController.addTraining)
router.get('/allTraining', trainingController.allTraining)
router.put('/changeBusy', checkRoleMiddleware('COUCH') ,trainingController.changeBusy)

module.exports = router