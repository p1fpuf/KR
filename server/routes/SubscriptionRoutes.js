const Router = require('express')
const router = new Router()
const subscriptionController = require('../controllers/subscriptionController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/addSubs', checkRoleMiddleware('OWNER') ,subscriptionController.addSubs)
router.get('/allSubs', checkRoleMiddleware('OWNER','ADMIN') ,subscriptionController.allSubs)


module.exports = router