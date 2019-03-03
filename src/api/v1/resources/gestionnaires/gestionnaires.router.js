import express from 'express'
import passport from 'passport'
import gestionnairesController from './gestionnaires.controller'

export const gestionnairesRouter = express.Router()
gestionnairesRouter
    .route('/')
    .post(passport.authenticate('jwt', { session: false }), gestionnairesController.create)
    .get(passport.authenticate('jwt', { session: false }), gestionnairesController.getAll)

gestionnairesRouter
    .route('/:id')
    .get(passport.authenticate('jwt', { session: false }), gestionnairesController.getItemById)
    .delete(passport.authenticate('jwt', { session: false }), gestionnairesController.delete)
    .put(passport.authenticate('jwt', { session: false }), gestionnairesController.update)