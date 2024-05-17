const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Worker} = require('../models/models')

const generateJwt = (id, email , role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class workerController{

    async registration(req, res, next){
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await Worker.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const worker = await Worker.create({email, role, password: hashPassword})

        return res.json(worker)
    }
    async login(req, res, next){
        const {email, password} = req.body
        const worker = await Worker.findOne({where: {email}})
        if(!worker){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, worker.password)
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(worker.id, worker.email, worker.role)
        return res.json({token})
    }
    async auth(req, res, next){
        const token = generateJwt(req.worker.id, req.worker.email, req.worker.role)
        return res.json({token})
    }
    async logout(req, res){
        const {id} = req.body
        const delToken = await Worker.update({token: null}, {where: {id:id}})
        return res.json({message: "Успешно"})
    }
    async deleteWorker(req, res){
        const {id} = req.body
        const deleted = await Worker.destroy({where: {id: id}})
        return res.json({message: "Работник удален"})
    }
    async allWorkers(req, res){
        const allWorkers = await Worker.findAll()
        return res.json(allWorkers)
    }
}

module.exports = new workerController()