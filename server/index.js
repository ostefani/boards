import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
// import router from './routes/data';
import path from 'path';
import schema from './graphql/schema';
import root from './graphql/resolvers';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;
const DB = process.env.DB_URL;
const ORIGIN = process.env.NODE_ENV !== 'production' ? ['http://0.0.0.0:3000','http://0.0.0.0:3000/signup'] : process.env.FRONT;

const extensions = ({
    document,
    variables,
    operationName,
    result,
    context,
}) => {
    console.log('context: ', context.code);
    // console.log('result: ', result);
    // console.log('operationName: ', operationName);
    // console.log('variables: ', variables);
    // console.log('document: ', document);
    return {
    };
};

if (process.env.NODE_ENV !== 'production') {
    console.log('development');
}
else console.log('production');

server.use(
    bodyParser.json(),
);
server.use(cors({
    origin: ORIGIN,
}));
server.use(express.static('dist/src'));
// server.use('/routes', router);
server.use('/data', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
    // extensions,
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
server.get('*', (req, res) =>{
    res.sendFile(path.resolve('dist/src/index.html'));
});

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch(e => console.log(e.message));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
