import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
// import router from './routes/data';
import path from 'path';
import schema from './graphql/schema';
import root from './graphql/resolvers';
import authenticate from './middleware';

const server = express();
const PORT = process.env.PORT || 3001;
const DB = process.env.DB_URL;
const ORIGIN = process.env.NODE_ENV !== 'production' ? 'http://0.0.0.0:3000' : process.env.FRONT;

server.use(
    cors({
        origin: ORIGIN,
        credentials: true,
    }),
    bodyParser.json(),
    express.static('dist/src'),
    authenticate(),
);

server.use((err, req, res, next) => {
    if (err) {
        req.error = err;
        return next();
    }
    return next();
});

server.use('/api', graphqlHTTP(() => ({
    schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: error => {
        if (error.originalError) {
            const { type, message } = error.originalError;
            return ({
                message,
                type,
                locations: error.locations,
                stack: error.stack ? error.stack.split('\n') : [],
                path: error.path,
            });
        }
        return error;
    },
})));

// Handles any requests that don't match the ones above
server.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/src/index.html'));
});

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch(e => console.log(e.message));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
