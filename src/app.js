import express from 'express'
import logger from 'morgan'
import passport from 'passport'
import swagger from 'swagger-ui-express'
import {connect} from './config/db'
import { restRouterV1 } from './api/v1'
import  swaggerDoc from './config/swagger.json'
import { configJWTStrategy } from './api/v1/middlewares/passport-jwt'

const app = express()
const PORT = 8080


connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(passport.initialize())
configJWTStrategy()

app.get('/', (req, res) => res.json({ msg: 'Welcome to MyFca Api' }))
app.use('/api/v1', restRouterV1)
app.use(
    '/api-docs/v1',
    swagger.serve,
    swagger.setup(swaggerDoc, {
        explorer: true
    })
)
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.message = 'Invalid route'
    error.status = 404
    next(error)
});
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`)
});