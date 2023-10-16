import postRouter from './post';

export const setupApiRoutes = (app) => {
    app.use('/posts', postRouter);
}