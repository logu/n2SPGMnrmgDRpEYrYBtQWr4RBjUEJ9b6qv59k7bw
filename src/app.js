import express from 'express'
import logger from 'morgan'
import {connect} from './config/db'

const app = express()
const PORT = 8080


connect()

app.use(logger('dev'))

app.get('/', (req, res) => res.json({ msg: 'Welcome to MyFca Api' }))
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
            message: error.message,
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`)
});