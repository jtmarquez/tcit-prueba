import { HTTP_CODES } from "../http/httpCodes";

const expressRequestHandler = async (controller, req, res, next) => {
    try {
        const response = await controller(req, res, next);

        if (response.headers) {
            res.set(response.headers);
        }

        res.status(response.responseCode ?? HTTP_CODES.OK);
        res.send({ data: response.data });
    } catch (error) {
        next(error)
    }
}

export const controllerProxyHandler = {
    get(target, prop) {
        return async (req, res, next) => {
            const response = await expressRequestHandler(target[prop], req, res, next);
            return response;
        }
    }
}