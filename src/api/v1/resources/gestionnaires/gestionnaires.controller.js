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
    },
    async getItemById(req, res) {
        try{
            const { id } = req.params
            const gestionnaire = await Gestionnaire.findById(id)
            if (!gestionnaire) {
                return res.status(404).json({ err: `could not find item with the id : ${ id }`})
            }
            return res.json(gestionnaire)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }
}