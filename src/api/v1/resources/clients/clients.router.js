import express from 'express'
import clientsController from './clients.controller'

export const clientsRouter = express.Router()
clientsRouter
    .route('/')
    .post(clientsController.create)
    .get(clientsController.getAll)