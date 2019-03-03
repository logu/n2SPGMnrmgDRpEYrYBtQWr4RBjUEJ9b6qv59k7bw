import Joi from 'joi'
import Client from './client.model'

export default {
    async create(req, res) {
        try {
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
                return res.status(400).json(error)
            }

            const client = await Client.create(value)
            return res.json(client)
        }  catch (err) {
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
            const clients = await Client.paginate({}, options)
            return res.json(clients)
        }  catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    async getItemById(req, res) {
        try{
            const { id } = req.params
            const client = await Client.findById(id)
            if (!client) {
                return res.status(404).json({ err: `could not find item with the id : ${ id }`})
            }
            return res.json(client)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const client = await Client.findOneAndRemove({ _id: id });
            if (!client) {
                return res.status(404).json({ err: `could not find item with the id : ${ id }` });
            }
            return res.json(client);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }
}