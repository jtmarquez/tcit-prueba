import bodyParser from 'body-parser';

export const jsonBodyParserMiddleware = bodyParser.json({ strict: false });
