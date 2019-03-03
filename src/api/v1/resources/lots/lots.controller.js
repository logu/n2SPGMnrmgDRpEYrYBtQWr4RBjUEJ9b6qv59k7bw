import Joi from 'joi'

export default {
    async create(req, res) {

        const schema = Joi.object().keys({
            client: Joi.string().required(),
            surface: Joi.number().required()
                .min(0)
        })

        const { value, error } = Joi.validate(req.body, schema)
        if (error && error.details) {
            return res.status(400).json(error)
        }
        return res.json(value)
    }
}