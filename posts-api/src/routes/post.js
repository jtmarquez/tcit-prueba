import express from 'express';
import postControllers from '../controllers/post';
import { controllerProxyHandler } from '../../libs/controllerProxy/handler';

const postsRouter = express.Router();

const wrappedControllers = new Proxy(postControllers, controllerProxyHandler);

postsRouter.get('/', wrappedControllers.list);
postsRouter.delete('/:id', wrappedControllers.delete);
postsRouter.post('/', wrappedControllers.create);

export default postsRouter