const Router = require('express')
const router = new Router()
const WorkerRoutes = require('./WorkerRoutes')
const TrainingRoutes = require('./TrainingRoutes')
const SubscriptionRoutes = require('./SubscriptionRoutes')
const SoldSubscription = require('./SoldSubscriptionRoutes')

router.use('/worker', WorkerRoutes)
router.use('/training', TrainingRoutes)
router.use('/subs', SubscriptionRoutes)
router.use('/soldSubs',SoldSubscription)

module.exports = router
