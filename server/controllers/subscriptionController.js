const {Subscription} = require('../models/models')
const ApiError = require('../error/ApiError')

class subscriptionController{
    async addSubs(req, res){
        const {count} = req.body
        const subscription = await Subscription.findOne({where: {id: 1}})
        const plus = await Subscription.update({count: +subscription.count + +count}, {where: {id: 1}}) 
        return res.json(subscription)
    }

    async allSubs(req, res){
        const subs = await Subscription.findAll()
        return res.json(subs)
    }
}
module.exports = new subscriptionController()