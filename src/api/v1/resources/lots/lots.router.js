import express from 'express'
import passport from 'passport'
import lotsController from './lots.controller'

export const lotsRouter = express.Router()
lotsRouter
    .route('/')
    .post(passport.authenticate('jwt', { session: false }), lotsController.create)
    .get(passport.authenticate('jwt', { session: false }), lotsController.getAll)

lotsRouter
    .route('/:id')
    .get(passport.authenticate('jwt', { session: false }), lotsController.getItemById)
    .delete(passport.authenticate('jwt', { session: false }), lotsController.delete)
    .put(passport.authenticate('jwt', { session: false }), lotsController.update)