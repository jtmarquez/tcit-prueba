import { ControllerError } from "../../libs/errors/controllerError";
import { HTTP_CODES } from "../../libs/http/httpCodes";

export const errorMiddleware = (error, req, res, next) => {
    let statusCode;
    let errorMessage;

    if (error instanceof SyntaxError && 'body' in error && error['statusCode'] === 400) {
        const { message } = error;

        statusCode = HTTP_CODES.BAD_REQUEST;
        errorMessage = message;
    } else if (error.code !== 500) {
        const { code, message } = error;
        console.log(error);

        statusCode = code;
        errorMessage = message;
    } else {
        statusCode = HTTP_CODES.INTERNAL_ERROR;
        errorMessage = 'Internal Server Error';
    }

    console.error(error);
    console.error('Request IP:', req.ip);
    console.error('Request Origin:', req.get('origin'));

    res.status(statusCode);
    res.send({ error: errorMessage });
};
