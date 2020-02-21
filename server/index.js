import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import jwt from 'express-jwt';
import mongoose from 'mongoose';
import cors from 'cors';
// import router from './routes/data';
import path from 'path';
import schema from './graphql/schema';
import root from './graphql/resolvers';
import postUser from './postUser';

const server = express();
const { SECRET } = process.env;
const PORT = process.env.PORT || 3001;
const DB = process.env.DB_URL;
const ORIGIN = process.env.NODE_ENV !== 'production' ? 'http://0.0.0.0:3000' : process.env.FRONT;

if (process.env.NODE_ENV !== 'production') {
    console.log('development');
}
else console.log('production');

server.use(cors({
    origin: ORIGIN,
    credentials: true,
}));
server.use(
    bodyParser.json(),
);
// authentication middleware
server.use(jwt({
    secret: SECRET,
    credentialsRequired: false,
}));

server.use(express.static('dist/src'));
// server.use('/routes', router);
server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return next();
    }
    return next();
});
/*server.use(async (req, res, next) => {
    if (req.body.variables) {
        const { username, email, password } = req.body.variables;
        try {
            const result = await postUser({ username, email, password });
            console.log('result: ', result.name);
            if (result.type) {
                throw new Error(result);
            }
            const {
                username: user, email: temail, password: tpassword, _id, token,
            } = result;
            req.userObj = { username: user, email: temail, password: tpassword, _id, token };
            return next();
        }
        catch (error) {
            req.error = error;
            return next();
        }
    }
    return next();
});*/
/*server.use((req, res) => {
    console.log('miidleware: ', req.user);
})*/

server.use('/api', graphqlHTTP(() => ({
    schema,
    rootValue: root,
    graphiql: true,
    //schemaDirectives: { constraint: ConstraintDirective },
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
