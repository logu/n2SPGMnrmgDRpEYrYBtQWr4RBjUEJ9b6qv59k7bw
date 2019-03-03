import Joi from 'joi';
import bcrypt from 'bcryptjs'

export default {
    encryptPassword(palinText) {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(palinText, salt)
    },
    comparePassword(plainText, encrypedPassword) {
        return bcrypt.compareSync(plainText, encrypedPassword);
    },
    validateSignup(body) {
        const schema = Joi.object().keys({
            user: Joi.string().required(),
            password: Joi.string().required()
        });
        const { value, error } = Joi.validate(body, schema)
        if (error && error.details) {
            return { error }
        }
        return { value }
    },
    validateLogin(body) {
        const schema = Joi.object().keys({
            user: Joi.string()
                .required(),
            password: Joi.string().required(),
        });
        const { value, error } = Joi.validate(body, schema);
        if (error && error.details) {
            return { error };
        }
        return { value };
    }
};