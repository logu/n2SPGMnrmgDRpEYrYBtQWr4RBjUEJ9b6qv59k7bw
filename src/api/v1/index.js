import express from 'express'
import { lotsRouter } from './resources/lots'
import { gestionnairesRouter } from './resources/gestionnaires'
import { clientsRouter } from './resources/clients'
import { userRouter } from './resources/user/user.router'

export const restRouterV1 = express.Router()
restRouterV1.use('/lots', lotsRouter)
restRouterV1.use('/gestionnaires', gestionnairesRouter)
restRouterV1.use('/clients', clientsRouter)
restRouterV1.use('/users', userRouter)