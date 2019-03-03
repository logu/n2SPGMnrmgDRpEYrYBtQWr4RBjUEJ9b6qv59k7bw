import Joi from 'joi'
import Gestionnaire from './gestionnaire.model'

export default {
    async create(req, res) {
        try {
            const schema = Joi.object().keys({
                fullname: Joi.string().required()
            })

            const {value, error} = Joi.validate(req.body, schema)
            if (error && error.details) {
                return res.status(400).json(error)
            }
            const gestionnaire = await Gestionnaire.create(value)
            return res.json(gestionnaire)
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
            const gesionnaires = await Gestionnaire.paginate({}, options)
            return res.json(gesionnaires)
        }  catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    }
}