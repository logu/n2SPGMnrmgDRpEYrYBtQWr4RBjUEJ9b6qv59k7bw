import express from 'express'
import lotsController from './lots.controller'

export const lotsRouter = express.Router()
lotsRouter.route('/').post(lotsController.create)