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
    }
}