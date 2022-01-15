const uuid = require('uuid')
const path = require('path')
const {Case, Figurant, Log} = require('../models/models')
const ApiError = require('../error/ApiError')
class CaseController{
    async create(req, res, next) {
        try{
        let {status, userId, typeId, description, figurants, logs} = req.body
        
        const newCase = await Case.create({status,userId, typeId, description})

        if (figurants){
            figurants = JSON.parse(figurants)
            figurants.forEach(i =>{
                const {img} = i.files
                let fileName = null;
                if (img)
                {
                    fileName = uuid.v4() + ".jpg"
                    img.mv(path.resolve(__dirname, '..', 'static', fileName))
                }
                Figurant.create({
                    surname: i.surname,
                    name: i.name,
                    patronymic: i.patronymic,
                    status: i.status,
                    passport_num: i.passport_num,
                    address: i.address,
                    phoneNumber: i.phoneNumber,
                    photo: fileName,
                    case_id: newCase.id                    
                })
            })
        }

        if (logs){
            logs = JSON.parse(logs)
            logs.forEach(i => 
                Log.create({
                    text: i.text,
                    case_id: newCase.id
                })
            )
        }


        return res.json(newCase)
    }catch(e){
        next(ApiError.badRequest(e.message))
    }
    }
 
    async getAll(req, res) {
        const {userId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page*limit - limit
        let cases;
        if (!userId && !typeId){
            cases = await Case.findAndCountAll(limit, offset)
        }
        if (userId && !typeId){
            cases = await Case.findAndCountAll({where:{userId}, limit, offset})
        }
        if (!userId && typeId){
            cases = await Case.findAndCountAll({where:{typeId}}, limit, offset)
        }
        if (userId && typeId){
            cases = await Case.findAndCountAll({where:{typeId, userId, limit, offset}})
        }
        return res.json(cases)
     }

     async getOne(req, res) {
        const {id} = req.params
        const curCase = await Case.findOne(
            {
                where: {id},
                include: [{model: Figurant, as: 'figurants'}, {model: Log, as: 'Logs'}],
            },  
        )
        return res.json(curCase)
    }
 
 }
 
 module.exports = new CaseController()