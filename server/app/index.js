import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import passport from 'passport';
import schema from '../graphql/schema';
import root from '../graphql/resolvers';

const app = express();

const DB = process.env.DB_URL;
const ORIGIN = process.env.NODE_ENV !== 'production' ? ['http://0.0.0.0:3000','http://0.0.0.0:3000/signup'] : process.env.FRONT;

if (process.env.NODE_ENV !== 'production') {
    console.log('development');
}
else console.log('production');

app.use(
    bodyParser.json(),
);
app.use(cors({
    origin: ORIGIN,
}));
app.use(express.static('dist/src'));
// app.use('/routes', router);
app.use('/data', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: error => {
        const { type, message } = error.originalError;
        return ({
            message,
            type,
            locations: error.locations,
            stack: error.stack ? error.stack.split('\n') : [],
            path: error.path,
        });
    },
}));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/src/index.html'));
});

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch(e => console.log(e.message));

app.use(passport.initialize());

export default app;
