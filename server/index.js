import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/data';
import schema from './graphql/schema';
// import resolvers from './graphql/resolvers';
import authRoot from './graphql/resolvers/auth';

console.log('authRoot: ', authRoot);

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;
const DB = process.env.DB_URL;

if (process.env.NODE_ENV !== 'production') {
    console.log('development');
}
else console.log('production');

// createUser({ userInput: { "email": "t3@t.t", "password": "test" } }).then(e => console.log(e._doc));

server.use(
    bodyParser.json(),
);

server.use(express.static('dist/src'));
// server.get('/', (req, res) => res.send('Hello Express'));
server.use('/routes', router);
server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: authRoot,
    graphiql: true,
}));


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch(e => console.log(e.message));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
