const { ObjectId } = require('bson')
import JoiBase from 'joi'
const JoiObjectId = require('joi-mongodb-objectid')
const Joi = JoiBase.extend(JoiObjectId)
import Lot from './lot.model'

export default {
    async create(req, res) {
        try {
            const schema = Joi.object().keys({
                client: Joi.objectId().required(),
                surface: Joi.number().required()
                    .min(0)
            })

            const {value, error} = Joi.validate(req.body, schema)
            if (error && error.details) {
                return res.status(400).json(error)
            }
            
            const lot = await Lot.create(value)
            return res.json(lot)
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    async getAll(req, res) {
        try {
            const { page, perPage } = req.query
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10
            }
            const lots = await Lot.paginate({}, options)
            return res.json(lots)
        }  catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    async getItemById(req, res) {
        try{
            const { id } = req.params
            const lot = await Lot.findById(id)
            if (!lot) {
                return res.status(404).json({ err: `could not find item with the id : ${ id }`})
            }
            return res.json(lot)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }
}