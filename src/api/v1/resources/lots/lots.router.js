import express from 'express'
import lotsController from './lots.controller'

export const lotsRouter = express.Router()
lotsRouter
    .route('/')
    .post(lotsController.create)
    .get(lotsController.getAll)

lotsRouter
    .route('/:id')
    .get(lotsController.getItemById)
    .delete(lotsController.delete)
    .put(lotsController.update)