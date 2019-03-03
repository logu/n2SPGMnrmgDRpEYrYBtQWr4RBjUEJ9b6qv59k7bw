import express from 'express'
import gestionnairesController from './gestionnaires.controller'

export const gestionnairesRouter = express.Router()
gestionnairesRouter
    .route('/')
    .post(gestionnairesController.create)
    .get(gestionnairesController.getAll)

gestionnairesRouter
    .route('/:id')
    .get(gestionnairesController.getItemById)