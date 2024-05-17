const {Training} = require('../models/models')
const ApiError = require('../error/ApiError');
class trainingController{

    async addTraining(req, res){
        const {time, type_of_training, busy} = req.body
        const add = await Training.create({time, type_of_training, busy})
        return res.json(add)
    }
    async allTraining(req, res){
        const all = await Training.findAll()
        return res.json(all)
    }
    async changeBusy(req, res){
        const {id, email} = req.body
        const update = await Training.update({busy: email}, {where: {id: id}})
        return res.json(update)
    }
}
module.exports = new trainingController()