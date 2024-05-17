const Router = require('express')
const router = new Router()
const soldSubscriptionController = require('../controllers/soldSubscriptionController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/addSoldSubs',checkRoleMiddleware('ADMIN') , soldSubscriptionController.addSoldSubs)
router.get('/allSoldSubs', soldSubscriptionController.allSoldSubs)

module.exports = router