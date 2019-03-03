import express from 'express'
import passport from 'passport'
import clientsController from './clients.controller'

export const clientsRouter = express.Router()
clientsRouter
    .route('/')
    .post(passport.authenticate('jwt', { session: false }), clientsController.create)
    .get(passport.authenticate('jwt', { session: false }), clientsController.getAll)

clientsRouter
    .route('/:id')
    .get(passport.authenticate('jwt', { session: false }), clientsController.getItemById)
    .delete(passport.authenticate('jwt', { session: false }), clientsController.delete)
    .put(passport.authenticate('jwt', { session: false }), clientsController.update)