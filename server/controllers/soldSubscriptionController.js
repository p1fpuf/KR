const {SoldSubscription, Subscription} = require('../models/models')
const ApiError = require('../error/ApiError')

class soldSubscriptionController{

    async addSoldSubs(req, res){
        const {sold_count} = req.body
        const subscription = await Subscription.findOne({where: {id: 1}})
        const soldSubscription = await SoldSubscription.findOne({where: {id: 1}})
        const plus = await SoldSubscription.update({sold_count: +soldSubscription.sold_count + +sold_count}, {where: {id: 1}})
        const minus = await Subscription.update({count: subscription.count - sold_count}, {where: {id: 1}}) 
        return res.json(soldSubscription)

    }
    async allSoldSubs(req, res){
        const soldSubs = await SoldSubscription.findAll()
        return res.json(soldSubs)
    }
}
module.exports = new soldSubscriptionController()