import cors from 'cors';

const { CORS_ALLOWED_ORIGINS } = process.env;

if (!CORS_ALLOWED_ORIGINS) {
    throw new Error('Missing env variable "CORS_ALLOWED_ORIGINS"');
}

const allowedOrigins = CORS_ALLOWED_ORIGINS.split(';');

const dynamicOrigin = (requestOrigin, callback) => {
    if (CORS_ALLOWED_ORIGINS == '*' || allowedOrigins.includes(requestOrigin)) {
        callback(null, true);
    } else {
        callback(new Error(
            `Origin "${requestOrigin}"  has been blocked by CORS policy`,
        ));
    }
};

const corsOptions = {
    origin: dynamicOrigin,
};

export const corsMiddleware = cors(corsOptions);