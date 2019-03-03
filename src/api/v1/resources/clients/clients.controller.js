import Joi from 'joi'

export default {
    async create(req, res) {

        const schema = Joi.object().keys({
            fullname: Joi.string().required(),
            email: Joi.string().email().required(),
            email2:  Joi.string().email().optional(),
            telDomicile: Joi.string().optional(),
            telPro: Joi.string().optional(),
            telMobile: Joi.string().optional(),
            telMobile2: Joi.string().optional(),
            fax: Joi.string().optional(),
            sexe: Joi.string().optional()
        })

        const { value, error } = Joi.validate(req.body, schema)
        if (error && error.details) {
            return res.status(400).json(error);
        }
        return res.json(value)
    }
}