import express from 'express';
import { createItem_, deleteItemByIdOrName, getAllItens, getItemByIdOrName, getItemByIdUser, updateItemByIdOrName } from '../controller/Methods';
import { verifyJwt } from '../middleware';

const routes = express.Router();

routes.post('/createItem', verifyJwt, createItem_)

routes.get('/', getAllItens)
routes.get('/name/:name', verifyJwt, getItemByIdOrName)
routes.get('/id/:id', verifyJwt, getItemByIdOrName)
routes.get('/userItens/:id', verifyJwt, getItemByIdUser)

routes.put('/updateByID/:id', verifyJwt, updateItemByIdOrName)
routes.put('/updateByName/:name', verifyJwt, updateItemByIdOrName)

routes.delete('/delete', verifyJwt, deleteItemByIdOrName)


export default routes;